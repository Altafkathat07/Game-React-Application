import connection from "../config/connectDB";
import jwt from 'jsonwebtoken'
import md5 from "md5";
import request from 'request';
require('dotenv').config();
const axios = require('axios');
let timeNow = Date.now();

const userInfo = async (req, res) => {
    let auth = 130;

    if (!auth) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        });
    }
    const [rows] = await connection.query('SELECT * FROM users WHERE `id` = ? ', [auth]);
    
   console.log(rows[0].phone);
    if (!rows) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        });
    }
    const [recharge] = await connection.query('SELECT * FROM recharge WHERE `phone` = ? AND status = 1', [rows[0].phone]);
    console.log(recharge)
    let totalRecharge = 0;
    recharge.forEach((data) => {
        totalRecharge += data.money;
        // console.log(totalRecharge += data.money)
    });
    const [withdraw] = await connection.query('SELECT * FROM withdraw WHERE `phone` = ? AND status = 1', [rows[0].phone]);
    let totalWithdraw = 0;
    withdraw.forEach((data) => {
        totalWithdraw += data.money;

    });



    const { id, password, ip, veri, ip_address, status, time, token, ...others } = rows[0];
    return res.status(200).json({
        message: 'Success',
        status: true,
        data: {
            code: others.code,
            id_user: others.id_user,
            name_user: others.name_user,
            phone_user: others.phone,
            money_user: others.money,
        },
        totalRecharge: totalRecharge,
        totalWithdraw: totalWithdraw,
        timeStamp: timeNow,
    });

}

const recharge = async (req, res) => {
    let auth = 130;
    let rechid = req.cookies.orderid;
    let money = req.body.money;
    let type = "bank";
    let typeid = req.body.typeid;
    let utr = req.body.utr;
    let status = req.body.status
    let txnId = req.body.clientTxnId

    // console.log(rechid, money, type, typeid, utr, status, txnId);

    if (type != 'cancel' && type != 'submit' && type != 'submitauto' && type != 'online') {
        if (!auth || !money || money <= 99) {
            return res.status(200).json({
                message: 'Minimum recharge 100',
                status: false,
                timeStamp: timeNow,
            })
        }
    }
    const [user] = await connection.query('SELECT `phone`, `code`,`invite` FROM users WHERE `id` = ?', [auth]);
    let userInfo = user[0];
    if (!user) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        });
    };
    if (type == 'submit') {
        
        const [utrcount] = await connection.query('SELECT * FROM recharge WHERE utr = ? ', [utr]);       
       if (utrcount.length == 0 ) {
            await connection.query('UPDATE recharge SET utr = ? WHERE phone = ? AND id_order = ? AND status = ? ', [utr, userInfo.phone, typeid, 0]);
            return res.status(200).json({
                message: 'Submit successful',
                status: true,
                timeStamp: timeNow,
            });
        } else {
            return res.status(200).json({
                message: 'UTR already submitted',
                status: true,
                timeStamp: timeNow,
            });
        }
    }

    if (type == 'online'){

        if(status == 1)
        {
            connection.query('Update recharge set status = ? where id_order =?' , [status , txnId] )
            const info = await connection.query(`SELECT * FROM recharge WHERE id_order = ?`, [txnId]);
            console.log(info , '.............+++++++')
        //     await connection.query('UPDATE users SET money = money + ?, total_money = total_money + ? WHERE phone = ?', [info[0].money, info[0].money, info[0].phone]);
        //     return res.status(200).json({
        //         message: 'Submit successful',
        //         status: true,
        //         timeStamp: timeNow,
        // });
     }
     else{
        await connection.query(`UPDATE recharge SET status = 2 WHERE utr = ?`, [utr]);
    
                    return res.status(200).json({
                        message: 'Transaction Cancelled',
                        status: true,
                        timeStamp: timeNow,
                    });
     }
        

    }

    if (type === 'submitauto') {
        try {
            const [utrcount] = await connection.query('SELECT * FROM recharge WHERE utr = ?', [utr]);
    
            if (utrcount.length === 0) {
                await connection.query('UPDATE recharge SET utr = ? WHERE phone = ? AND id_order = ? AND status = ?', [utr, userInfo.phone, typeid, 0]);
    
                const url = 'https://payments-tesseract.bharatpe.in/api/v1/merchant/transactions';
                const twoDaysAgo = Date.now() - (2 * 24 * 60 * 60 * 1000);
                const params = {
                    'module': 'PAYMENT_QR',
                    'merchantId': process.env.merchant, // your merchant key
                    'sDate': twoDaysAgo,
                    'eDate': Date.now(),
                };
    
                const headers = {
                    'accept': 'application/json, text/javascript, */*; q=0.01',
                    'accept-encoding': 'gzip, deflate, br',
                    'accept-language': 'en-US,en;q=0.9,it;q=0.8',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-site',
                    'token': process.env.secret_key, // your login token 
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.63',
                };
    
                const queryString = new URLSearchParams(params).toString();
                const url2 = url + '?' + queryString;
    
                const response = await fetch(url2, { headers });
                const data = await response.json();
                const [info] = await connection.query(`SELECT * FROM recharge WHERE id_order = ?`, [typeid]);
                const transaction = data.data.transactions.find((t) => t.bankReferenceNo === utr && t.amount === info[0].money);
    
                if (transaction) {
                    console.log('Transaction found:', transaction);
                    await connection.query(`UPDATE recharge SET status = 1 WHERE utr = ?`, [utr]);
                    console.log("money" + info[0].money + ",phone" + info[0].phone);
                    await connection.query('UPDATE users SET money = money + ?, total_money = total_money + ? WHERE phone = ?', [info[0].money, info[0].money, info[0].phone]);
    
                    return res.status(200).json({
                        message: 'Submit successful',
                        status: true,
                        timeStamp: timeNow,
                    });
                } else {
                    await connection.query(`UPDATE recharge SET status = 2 WHERE utr = ?`, [utr]);
    
                    return res.status(200).json({
                        message: 'Invalid utr',
                        status: true,
                        timeStamp: timeNow,
                    });
                }
            } else {
                return res.status(200).json({
                    message: 'UTR already submitted',
                    status: true,
                    timeStamp: timeNow,
                });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: 'Internal server error',
                status: false,
                timeStamp: timeNow,
            });
        }
    }
    

    let time = new Date().getTime();
    const date = new Date();
    function formateT(params) {
        let result = (params < 10) ? "0" + params : params;
        return result;
    }

    function timerJoin(params = '') {
        let date = '';
        if (params) {
            date = new Date(Number(params));
        } else {
            date = new Date();
        }
        let years = formateT(date.getFullYear());
        let months = formateT(date.getMonth() + 1);
        let days = formateT(date.getDate());
        return years + '-' + months + '-' + days;
    }
    let checkTime = timerJoin(time);
    let id_time = date.getUTCFullYear() + '' + date.getUTCMonth() + 1 + '' + date.getUTCDate();
    let id_order = Math.floor(Math.random() * (99999999999999 - 10000000000000 + 1)) + 10000000000000;
    // let vat = Math.floor(Math.random() * (2000 - 0 + 1) ) + 0;

    money = Number(money);
    let client_transaction_id = id_time + id_order;
    
    const sql = `INSERT INTO recharge SET
        id_order = ?,
        transaction_id = ?,
        phone = ?,
        money = ?,
        type = ?,
        status = ?,
        first_recharge = ?,
        today = ?,
        url = ?,
        time = ?`;
    const [userCount] = await connection.execute('SELECT * FROM recharge WHERE phone = ?', [userInfo.phone]);
    if(userCount.length == 0) {
        await connection.execute(sql, [client_transaction_id, '0', userInfo.phone, money, type, 0, 1 ,checkTime, '0', time]);
        res.redirect("http://localhost:5173/wallet")
        // return res.status(200).json({
        //     message: 'Order creation successful',
        //     pay: true,
        //     orderid: client_transaction_id,
        //     status: true,
        //     timeStamp: timeNow,
        // });       
    }
    else{
        await connection.execute(sql, [client_transaction_id, '0', userInfo.phone, money, type, 0, 0 ,checkTime, '0', time]);
        res.redirect("http://localhost:5173/recharge")
        // return res.status(200).json({
        //     message: 'Order creation successful',
        //     pay: true,
        //     orderid: client_transaction_id,
        //     status: true,
        //     timeStamp: timeNow,
        // });
    }


}

const addBank = async (req, res) => {
    let auth = 130;
    let bank_name = req.body.bankname;
    let user_name = req.body.username;
    let account = req.body.account;
    let ifsc = req.body.ifsc;
    let phone = req.body.phone;
    let time = new Date().getTime();

    if (!auth || !bank_name || !user_name || !account || !ifsc || !phone) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        })
    }
    const [user] = await connection.query('SELECT `phone`, `code`,`invite` FROM users WHERE `id` = ? ', [auth]);
    let userInfo = user[0];
    if (!user) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        });
    };
    const [user_bank] = await connection.query('SELECT * FROM user_bank WHERE account = ? ', [account]);
    const [user_bank2] = await connection.query('SELECT * FROM user_bank WHERE phone = ? ', [userInfo.phone]);
    if (user_bank.length == 0 && user_bank2.length == 0) {
        const sql = `INSERT INTO user_bank SET 
        bank_name = ?,
        user_name = ?,
        account = ?,
        tp = ?,
        ifsc = ?,
        phone = ?,
        sdk = ?,
        time = ?`;
        await connection.execute(sql, [bank_name, user_name, account, 0, ifsc, phone, userInfo.phone, time]);
        return res.status(200).json({
            message: 'Successfully added bank',
            status: true,
            timeStamp: timeNow,
        });
    } else if (user_bank.length > 0) {
        await connection.query('UPDATE user_bank SET account = ? WHERE sdk = ? ', [account, userInfo.phone]);
        return res.status(200).json({
            message: 'Account number updated in the system',
            status: false,
            timeStamp: timeNow,
        });
    } else if (user_bank2.length > 0) {
        await connection.query('UPDATE user_bank SET bank_name = ?, user_name = ?, account = ?, ifsc = ?, phone = ?, time = ? WHERE sdk = ?', [bank_name, user_name, account, ifsc, phone, time, userInfo.phone]);
        return res.status(200).json({
            message: 'your account is updated',
            status: false,
            timeStamp: timeNow,
        });
    }

}

const UserBankInfo = async (req, res) => {
    let auth = req.cookies.auth;
    if (!auth) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        })
    }
    const [user] = await connection.query('SELECT `phone`, `code`,`invite`, `money` FROM users WHERE `token` = ? ', [auth]);
    let userInfo = user[0];
    if (!user) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        });
    };
    function formateT(params) {
        let result = (params < 10) ? "0" + params : params;
        return result;
    }

    function timerJoin(params = '', addHours = 0) {
        let date = '';
        if (params) {
            date = new Date(Number(params));
        } else {
            date = new Date();
        }

        date.setHours(date.getHours() + addHours);

        let years = formateT(date.getFullYear());
        let months = formateT(date.getMonth() + 1);
        let days = formateT(date.getDate());

        let hours = date.getHours() % 12;
        hours = hours === 0 ? 12 : hours;
        let ampm = date.getHours() < 12 ? "AM" : "PM";

        let minutes = formateT(date.getMinutes());
        let seconds = formateT(date.getSeconds());

        return years + '-' + months + '-' + days + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    }
    let date = new Date().getTime();
    let checkTime = timerJoin(date);
    const [recharge] = await connection.query('SELECT * FROM recharge WHERE phone = ? AND status = 1', [userInfo.phone]);
    const [minutes_1] = await connection.query('SELECT * FROM minutes_1 WHERE phone = ?', [userInfo.phone]);
    let total = 0;
     recharge.forEach((data) => {
        total += parseFloat(data.money);
    });
    let total2 = 0;
    minutes_1.forEach((data) => {
        total2 += parseFloat(data.money);
    });
    let fee = 0;
    minutes_1.forEach((data) => {
        fee += parseFloat(data.fee);
    });

    result = Math.max(result, 0);
    let result = 0;
    if (total - total2 > 0) result = total - total2 - fee;

    const [userBank] = await connection.query('SELECT * FROM user_bank WHERE phone = ? ', [userInfo.phone]);
    return res.status(200).json({
        message: 'Received successfully',
        datas: userBank,
        userInfo: user,
        result: result,
        status: true,
        timeStamp: timeNow,
    });
}



module.exports = {
    userInfo,
    recharge,
    addBank,
    UserBankInfo
}