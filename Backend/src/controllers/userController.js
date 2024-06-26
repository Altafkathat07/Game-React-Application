import connection from "../config/connectDB";
import jwt from 'jsonwebtoken'
import md5 from "md5";
import request from 'request';
require('dotenv').config();
const axios = require('axios');
let timeNow = Date.now();

const userInfo = async (req, res) => {
    // let auth = req.user.user.phone
    let auth = req.user.user.phone
    console.log("this is user info" + auth)

    if (!auth) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        });
    }
    const [rows] = await connection.query('SELECT * FROM users WHERE `phone` = ? ', [auth]);

    console.log(rows[0])
    
    
//    console.log(rows[0].phone);
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
            invite: others.invite,
            id_user: others.id_user,
            name_user: others.name_user,
            phone_user: others.phone,
            money_user: others.money,
            level: others.user_level,
            direct_bonus: others.roses_f1,
            today_bonus: others.roses_today,
            total_bonus: others.roses_f,
            team_bonus: others.team,
            totalRecharge: totalRecharge,
            totalWithdraw: totalWithdraw,
        },
        totalRecharge: totalRecharge,
        totalWithdraw: totalWithdraw,
        timeStamp: timeNow,
    });

}

const TotalReferrals = async (req, res) => {
    let auth = req.user.user.phone
    console.log("this is user info" + auth)

    if (!auth) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        });
    }
    const [rows] = await connection.query('SELECT * FROM users WHERE `phone` = ? ', [auth]);
    if (!rows) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        });
    }
    console.log("this is user code" + rows[0].code)

    const [total_ref] = await  connection.query('SELECT * FROM users  WHERE `invite` = ? ', [rows[0].code])
    console.log(total_ref.length)
    if (!total_ref) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        });
    }
    const total = total_ref.length
    return res.status(200).json({
        message: 'Success',
        status: true,
        data: {
            total: total,  
        },
        timeStamp: timeNow,
    });

}

const TotalUser = async (req, res) => {
    const [rows] = await connection.query('SELECT * FROM users');
    const [admins] = await connection.query('SELECT * FROM users WHERE `user_level` = 1');
    const total_admin = admins.length
    if (!rows) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        });
    }
    console.log(rows.length)

    const total = rows.length
    return res.status(200).json({
        message: 'Success',
        status: true,
        data: {
            total: total,  
            admin: total_admin,  
        },
        timeStamp: timeNow,
    });

}

const ResetPassword = async (req, res) => {
    // let auth = 7878979700;
    let auth = req.user.user.phone;
    let password = req.body.pwd;
    let newPass = req.body.npwd;
    let confirmPass = req.body.cpwd;
    

    if (!auth || !password || !newPass || !confirmPass) {
        return res.status(200).json({
            message: 'Failed: Please fill the required fields',
            status: false,
            timeStamp: timeNow,
        });
    }

    if(confirmPass !== newPass){
        return res.status(200).json({
            message: 'Failed: New password and confirm password does not match',
            status: false,
            timeStamp: timeNow,
        });
    }
    const [rows] = await connection.query('SELECT `password`, `phone` FROM users WHERE `phone` = ? ', [auth]);
    if (!rows) {
        return res.status(200).json({
            message: 'Failed : user not found',
            status: false,
            timeStamp: timeNow,
        });
    }

    const hashPass = md5(password)
     const result = rows[0].password;
    console.log(hashPass, result)

    if(hashPass !== result){
        return res.status(200).json({
            message: 'Failed : Old Password does not match',
            status: false,
            timeStamp: timeNow,
        }); 
    }

    const row_data = await connection.query('UPDATE users SET password = ? WHERE phone = ?', [md5(newPass), rows[0].phone])
    



    return res.status(200).json({
        message: 'success: password reset successfully',
        status: true,
        data: row_data,
        timeStamp: timeNow,
    });

}

const recharge = async (req, res) => {
    // let auth = req.user.user.phone
    let auth = req.user.user.phone;
    let rechid = req.cookies.orderid;
    let money = req.body.money;
    let type = "bank";
    let typeid = req.body.typeid;
    let utr = req.body.utr;
    let status = req.body.status
    let txnId = req.body.clientTxnId

    const [user] = await connection.query('SELECT `phone`, `code`,`invite` FROM users WHERE `phone` = ?', [auth]);
    let userInfo = user[0];
    // console.log(userInfo);
    const [bonus] = await connection.execute('SELECT * FROM bonus');
    const FirstRecharge = bonus[0].first_reacharge_bonus;
    const first = Number(FirstRecharge);
    // console.log(FirstRecharge);
    // const [first_recharge_bonus] = await connection.execute('SELECT * FROM recharge WHERE phone = ? ORDER BY id DESC LIMIT 1', [userInfo.phone]);
    // console.log(first_recharge_bonus)
    // if (first_recharge_bonus && first_recharge_bonus[0].first_recharge === 1) {
    //     const bonusAmount = FirstRecharge; 
    //     first_recharge_bonus.money += bonusAmount;
    // }
    
    // console.log(first_recharge_bonus);
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
            // console.log(info , '.............+++++++')
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
                    // console.log('Transaction found:', transaction);
                    await connection.query(`UPDATE recharge SET status = 1 WHERE utr = ?`, [utr]);
                    // console.log("money" + info[0].money + ",phone" + info[0].phone);
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
    let new_money = eval(money+first);
    // console.log(new_money);
    
    
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
    await connection.query('UPDATE users SET roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ?', [ first, first, userInfo.phone])
    if(userCount.length == 0) {
        await connection.execute(sql, [client_transaction_id, '0', userInfo.phone, new_money, type, 0, 1 ,checkTime, '0', time]);
        
        return res.status(200).json({
            message: 'Order creation successful',
            pay: true,
            orderid: client_transaction_id,
            status: true,
            timeStamp: timeNow,
        });       
    }
    else{
        await connection.execute(sql, [client_transaction_id, '0', userInfo.phone, money, type, 0, 0 ,checkTime, '0', time]);
        // res.redirect("http://localhost:5173/recharge")
        return res.status(200).json({
            message: 'Order creation successful',
            pay: true,
            orderid: client_transaction_id,
            status: true,
            timeStamp: timeNow,
        });
    }


}

const addBank = async (req, res) => {
    // let auth = req.user.user.phone
    let auth = req.user.user.phone;
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
    const [user] = await connection.query('SELECT `phone`, `code`,`invite` FROM users WHERE `phone` = ? ', [auth]);
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
            status: true,
            timeStamp: timeNow,
        });
    } else if (user_bank2.length > 0) {
        await connection.query('UPDATE user_bank SET bank_name = ?, user_name = ?, account = ?, ifsc = ?, phone = ?, time = ? WHERE sdk = ?', [bank_name, user_name, account, ifsc, phone, time, userInfo.phone]);
        return res.status(200).json({
            message: 'your account is updated',
            status: true,
            timeStamp: timeNow,
        });
    }

}

const UserBankInfo = async (req, res) => {
    // let auth = req.user.user.phone
    let auth = req.user.user.phone;
    if (!auth) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        })
    }
    const [user] = await connection.query('SELECT `phone`, `code`,`invite`, `money` FROM users WHERE `phone` = ? ', [auth]);
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

    const [userBank] = await connection.query('SELECT * FROM user_bank WHERE sdk = ? ', [userInfo.phone]);
    return res.status(200).json({
        message: 'Received successfully',
        datas: userBank,
        userInfo: user,
        result: result,
        status: true,
        timeStamp: timeNow,
    });
}

const withdrawal = async (req, res) => {
    // let auth = req.user.user.phone
    let auth = req.user.user.phone;
    let money = req.body.money;
    let password = req.body.password;
    if (!auth || !money || !password || money < 109) {
        return res.status(200).json({
            message: 'Please fill the field and withdrawal amount is at least ₹110.',
            status: false,
            timeStamp: timeNow,
        })
    }
    const [user] = await connection.query('SELECT `phone`, `code`,`invite`, `money` FROM users WHERE `phone` = ? AND password = ?', [auth, md5(password)]);

    if (user.length == 0) {
        return res.status(200).json({
            message: 'incorrect password',
            status: false,
            timeStamp: timeNow,
        });
    };
    let userInfo = user[0];
    const date = new Date();
    let id_time = date.getUTCFullYear() + '' + date.getUTCMonth() + 1 + '' + date.getUTCDate();
    let id_order = Math.floor(Math.random() * (99999999999999 - 10000000000000 + 1)) + 10000000000000;

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
    let dates = new Date().getTime();
    let checkTime = timerJoin(dates);
    // console.log(checkTime)
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
    let result = 0;
    if (total - total2 > 0) result = total - total2;
    result = Math.max(result, 0);
    // console.log("total result :" + result)
    const [user_bank] = await connection.query('SELECT * FROM user_bank WHERE `sdk` = ?', [userInfo.phone]);
    const [withdraw] = await connection.query('SELECT * FROM withdraw WHERE `phone` = ? AND today = ?', [userInfo.phone, checkTime]);
    if (user_bank.length != 0) {
        if (withdraw.length < 3) {
            if (userInfo.money - money >= 0) {
                if (result == 0) {
                    if (total - total2 >= 0) {
                        if (result == 0) {
                            return res.status(200).json({
                                message: 'The total bet is not enough to fulfill the request 1',
                                status: false,
                                timeStamp: timeNow,
                            });
                        }
                    } else {
                        let infoBank = user_bank[0];
                        const sql = `INSERT INTO withdraw SET 
                    id_order = ?,
                    phone = ?,
                    money = ?,
                    stk = ?,
                    name_bank = ?,
                    ifsc = ?,
                    name_user = ?,
                    status = ?,
                    today = ?,
                    time = ?`;
                        await connection.execute(sql, [id_time + '' + id_order, userInfo.phone, money, infoBank.account, infoBank.bank_name, infoBank.ifsc, infoBank.user_name, 0, checkTime, dates]);
                        await connection.query('UPDATE users SET money = money - ? WHERE phone = ? ', [money, userInfo.phone]);
                        return res.status(200).json({
                            message: 'Withdrawal successful',
                            status: true,
                            money: userInfo.money - money,
                            timeStamp: timeNow,
                        });
                    }
                } else {
                    return res.status(200).json({
                        message: 'The total bet is not enough to fulfill the request 2',
                        status: false,
                        timeStamp: timeNow,
                    });
                }
            } else {
                return res.status(200).json({
                    message: 'The balance is not enough to fulfill the request 3',
                    status: false,
                    timeStamp: timeNow,
                });
            }
        } else {
            return res.status(200).json({
                message: 'You can only make 3 withdrawals per day',
                status: false,
                timeStamp: timeNow,
            });
        }
    } else {
        return res.status(200).json({
            message: 'Please link your bank first',
            status: false,
            timeStamp: timeNow,
        });
    }

}

const useRedenvelope = async(req, res) => {
    // let auth = req.user.user.phone
    let auth = req.user.user.phone;
    let code = req.body.code;
    // let claim = req.body.claim;
    if(!auth || !code ) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        })
    }
    const [user] = await connection.query('SELECT `phone`, `code`,`invite` FROM users WHERE `phone` = ? ', [auth]);
    let userInfo = user[0];
    if(!user) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        });
    };
    const [redenvelopes] = await connection.query(
        'SELECT * FROM redenvelopes WHERE id_redenvelope = ?', [code]);
        
    if (redenvelopes.length == 0) {
        return res.status(200).json({
            message: 'Redemption code error',
            status: false,
            timeStamp: timeNow,
        });
    }else {
        let infoRe = redenvelopes[0];
        const d = new Date();
        const time = d.getTime();
        // 
        if (infoRe.status == 0 && infoRe.max_count < infoRe.max_claims) {
            await connection.query('UPDATE redenvelopes SET used = ?, status = ? WHERE `id_redenvelope` = ?', [1, 1, infoRe.id_redenvelope]);
           
            if (infoRe.max_count == infoRe.max_claims ) {
               
                await connection.query('UPDATE redenvelopes SET used = ?, status = ? WHERE `id_redenvelope` = ?', [1, 1, infoRe.id_redenvelope]);
            } else {

                const userClaimed = await connection.query('SELECT * FROM redenvelopes_used');
                const data = userClaimed[0];
                const filteredData = data.filter(item => {
                
                   const  userDataCheck =  item.phone_used ===  userInfo.phone && item.id_redenvelops === infoRe.id_redenvelope;
                    if (userDataCheck === true) {
                        return true;
                    }else{
                        return false
                    }
                    
                  });
                
                  if(filteredData.length !== 0){
                    return res.status(200).json({
                        message: 'User already claimed a gift code',
                        status: false,
                        timeStamp: timeNow,
                    });
                  }
                

               
                await connection.query('UPDATE redenvelopes SET used = ?, max_count = ? WHERE `id_redenvelope` = ?', [0, infoRe.max_count+1,  infoRe.id_redenvelope]);
                
            }
        

           
            await connection.query('UPDATE users SET money = money + ?, roses_f = roses_f + ?,  roses_today = roses_today + ? WHERE `phone` = ?', [infoRe.money, infoRe.money, infoRe.money, userInfo.phone]);
        
            
            let sql = 'INSERT INTO redenvelopes_used SET phone = ?, phone_used = ?, id_redenvelops = ?, money = ?, `time` = ? ';
            await connection.query(sql, [infoRe.phone, userInfo.phone, infoRe.id_redenvelope, infoRe.money, time]);
        
            return res.status(200).json({
                message: `success : Received successfully +${infoRe.money}`,
                status: true,
                timeStamp: timeNow,
            });
        } else {
            return res.status(200).json({
                message: 'Failed : Gift code already used',
                status: false,
                timeStamp: timeNow,
            });
        }
    }
}

const listRecharge = async (req, res) => {
    // let auth = req.user.user.phone
    let auth = req.user.user.phone;
    if (!auth) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        })
    }
    const [user] = await connection.query('SELECT `phone`, `code`,`invite` FROM users WHERE `phone` = ? ', [auth]);
    let userInfo = user[0];
    if (!user) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        });
    };
    const [recharge] = await connection.query('SELECT * FROM recharge WHERE phone = ? ORDER BY id DESC ', [userInfo.phone]);
    return res.status(200).json({
        message: 'Receive success',
        datas: recharge,
        status: true,
        timeStamp: timeNow,
    });
}
const listWithdraw= async (req, res) => {
    // let auth = req.user.user.phone
    let auth = req.user.user.phone
    if (!auth) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        })
    }
    const [user] = await connection.query('SELECT `phone`, `code`,`invite` FROM users WHERE `phone` = ? ', [auth]);
    let userInfo = user[0];
    if (!user) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        });
    };
    const [withdraw] = await connection.query('SELECT * FROM withdraw WHERE phone = ? ORDER BY id DESC ', [userInfo.phone]);
    return res.status(200).json({
        message: 'Receive success',
        datas: withdraw,
        status: true,
        timeStamp: timeNow,
    });
}

const promotion = async (req, res) => {
    // let auth = req.user.user.phone
    let auth = req.user.user.phone
    if (!auth) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        });
    }
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

    const [user] = await connection.query('SELECT `phone`, `code`,`invite`, `roses_f`, `roses_f1`, `roses_today` FROM users WHERE `phone` = ? ', [auth]);
    const [level] = await connection.query('SELECT * FROM level');

    if (!user) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        });
    }

    let userInfo = user[0];

    // Directly referred level-1 users
    const [f1s] = await connection.query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [userInfo.code]);

    // Directly referred users today
    let f1_today = 0;
    for (let i = 0; i < f1s.length; i++) {
        const f1_time = f1s[i].time;
        let check = (timerJoin(f1_time) == timerJoin()) ? true : false;
        if (check) {
            f1_today += 1;
        }
    }

    // All direct referrals today
    let f_all_today = 0;
    for (let i = 0; i < f1s.length; i++) {
        const f1_code = f1s[i].code;
        const f1_time = f1s[i].time;
        let check_f1 = (timerJoin(f1_time) == timerJoin()) ? true : false;
        if (check_f1) f_all_today += 1;

        // Total level-2 referrals today
        const [f2s] = await connection.query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f1_code]);
        for (let i = 0; i < f2s.length; i++) {
            const f2_code = f2s[i].code;
            const f2_time = f2s[i].time;
            let check_f2 = (timerJoin(f2_time) == timerJoin()) ? true : false;
            if (check_f2) f_all_today += 1;

            // Total level-3 referrals today
            const [f3s] = await connection.query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f2_code]);
            for (let i = 0; i < f3s.length; i++) {
                const f3_code = f3s[i].code;
                const f3_time = f3s[i].time;
                let check_f3 = (timerJoin(f3_time) == timerJoin()) ? true : false;
                if (check_f3) f_all_today += 1;

                // Total level-4 referrals today
                const [f4s] = await connection.query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f3_code]);
                for (let i = 0; i < f4s.length; i++) {
                    const f4_code = f4s[i].code;
                    const f4_time = f4s[i].time;
                    let check_f4 = (timerJoin(f4_time) == timerJoin()) ? true : false;
                    if (check_f4) f_all_today += 1;
                }
            }
        }
    }

    // Total level-2 referrals
    let f2 = 0;
    for (let i = 0; i < f1s.length; i++) {
        const f1_code = f1s[i].code;
        const [f2s] = await connection.query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [f1_code]);
        f2 += f2s.length;
    }

    // Total level-3 referrals
    let f3 = 0;
    for (let i = 0; i < f1s.length; i++) {
        const f1_code = f1s[i].code;
        const [f2s] = await connection.query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [f1_code]);
        for (let i = 0; i < f2s.length; i++) {
            const f2_code = f2s[i].code;
            const [f3s] = await connection.query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [f2_code]);
            if (f3s.length > 0) f3 += f3s.length;
        }
    }

    // Total level-4 referrals
    let f4 = 0;
    for (let i = 0; i < f1s.length; i++) {
        const f1_code = f1s[i].code;
        const [f2s] = await connection.query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [f1_code]);
        for (let i = 0; i < f2s.length; i++) {
            const f2_code = f2s[i].code;
            const [f3s] = await connection.query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [f2_code]);
            for (let i = 0; i < f3s.length; i++) {
                const f3_code = f3s[i].code;
                const [f4s] = await connection.query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [f3_code]);
                if (f4s.length > 0) f4 += f4s.length;
            }
        }
    }

    let selectedData = [];

    async function fetchInvitesByCode(code, depth = 1) {
        if (depth > 6) {
            return;
        }

        const [inviteData] = await connection.query('SELECT `id_user`,`name_user`,`phone`, `code`, `invite`, `rank`, `user_level`, `total_money` FROM users WHERE `invite` = ?', [code]);
        
        if (inviteData.length > 0) {
            for (const invite of inviteData) {
                selectedData.push(invite);
                await fetchInvitesByCode(invite.code, depth + 1);
            }
        }
    }

    if (f1s.length > 0) {
        for (const initialInfoF1 of f1s) {
            selectedData.push(initialInfoF1);
            await fetchInvitesByCode(initialInfoF1.code);
        }
    }

    const rosesF1 = parseFloat(userInfo.roses_f);
    const rosesAll = parseFloat(userInfo.roses_f1);
    let rosesAdd = rosesF1 + rosesAll;

    return res.status(200).json({
        message: 'Receive success',
        level: level,
        info: user,
        status: true,
        invite: {
            f1: f1s.length,
            total_f: selectedData.length,
            f1_today: f1_today,
            f_all_today: f_all_today,
            roses_f1: userInfo.roses_f1,
            roses_f: userInfo.roses_f,
            roses_all: rosesAdd,
            roses_today: userInfo.roses_today,
        },
        timeStamp: timeNow,
    });

}

const activityCheck = async (req, res) => {
    // let auth = req.user.user.phone
    let auth = req.user.user.phone
    let data = req.body.data;

    if (!auth) return res.status(200).json({
        message: 'Failed',
        status: false,
        timeStamp: timeNow,
    });;
    const [rows] = await connection.query('SELECT * FROM users WHERE `phone` = ? ', [auth]);
    if (!rows) return res.status(200).json({
        message: 'Failed',
        status: false,
        timeStamp: timeNow,
    });;
    if (!data) {
        const [point_list] = await connection.query('SELECT * FROM point_list WHERE `phone` = ? ', [rows[0].phone]);
        return res.status(200).json({
            message: 'No More Data',
            datas: point_list,
            status: true,
            timeStamp: timeNow,
        });
    }
    if (data) {
        if (data == 1) {
            const [point_lists] = await connection.query('SELECT * FROM point_list WHERE `phone` = ? ', [rows[0].phone]);
            let check = rows[0].money;
            let point_list = point_lists[0];
            // console.log(point_list);
            let get = 300;
            if (check >= data && point_list.total1 != 0) {
                await connection.query('UPDATE users SET money = money + ? WHERE phone = ? ', [point_list.total1, rows[0].phone]);
                await connection.query('UPDATE point_list SET total1 = ? WHERE phone = ? ', [0, rows[0].phone]);
                return res.status(200).json({
                    message: `You just received ₹ ${point_list.total1}.00`,
                    status: true,
                    timeStamp: timeNow,
                });
            } else if (check < get && point_list.total1 != 0) {
                return res.status(200).json({
                    message: 'Please Recharge ₹ 300 to claim gift.',
                    status: false,
                    timeStamp: timeNow,
                });
            } else if (point_list.total1 == 0) {
                return res.status(200).json({
                    message: 'You have already received this gift',
                    status: false,
                    timeStamp: timeNow,
                });
            }
        };
        if (data == 2) {
            const [point_lists] = await connection.query('SELECT * FROM point_list WHERE `phone` = ? ', [rows[0].phone]);
            let check = rows[0].money;
            let point_list = point_lists[0];
            let get = 3000;
            if (check >= get && point_list.total2 != 0) {
                await connection.query('UPDATE users SET money = money + ? WHERE phone = ? ', [point_list.total2, rows[0].phone]);
                await connection.query('UPDATE point_list SET total2 = ? WHERE phone = ? ', [0, rows[0].phone]);
                return res.status(200).json({
                    message: `You just received ₹ ${point_list.total2}.00`,
                    status: true,
                    timeStamp: timeNow,
                });
            } else if (check < get && point_list.total2 != 0) {
                return res.status(200).json({
                    message: 'Please Recharge ₹ 3000 to claim gift.',
                    status: false,
                    timeStamp: timeNow,
                });
            } else if (point_list.total2 == 0) {
                return res.status(200).json({
                    message: 'You have already received this gift',
                    status: false,
                    timeStamp: timeNow,
                });
            }
        };
        if (data == 3) {
            const [point_lists] = await connection.query('SELECT * FROM point_list WHERE `phone` = ? ', [rows[0].phone]);
            let check = rows[0].money;
            let point_list = point_lists[0];
            let get = 6000;
            if (check >= get && point_list.total3 != 0) {
                await connection.query('UPDATE users SET money = money + ? WHERE phone = ? ', [point_list.total3, rows[0].phone]);
                await connection.query('UPDATE point_list SET total3 = ? WHERE phone = ? ', [0, rows[0].phone]);
                return res.status(200).json({
                    message: `You just received ₹ ${point_list.total3}.00`,
                    status: true,
                    timeStamp: timeNow,
                });
            } else if (check < get && point_list.total3 != 0) {
                return res.status(200).json({
                    message: 'Please Recharge ₹ 6000 to claim gift.',
                    status: false,
                    timeStamp: timeNow,
                });
            } else if (point_list.total3 == 0) {
                return res.status(200).json({
                    message: 'You have already received this gift',
                    status: false,
                    timeStamp: timeNow,
                });
            }
        };
        if (data == 4) {
            const [point_lists] = await connection.query('SELECT * FROM point_list WHERE `phone` = ? ', [rows[0].phone]);
            let check = rows[0].money;
            let point_list = point_lists[0];
            let get = 12000;
            if (check >= get && point_list.total4 != 0) {
                await connection.query('UPDATE users SET money = money + ? WHERE phone = ? ', [point_list.total4, rows[0].phone]);
                await connection.query('UPDATE point_list SET total4 = ? WHERE phone = ? ', [0, rows[0].phone]);
                return res.status(200).json({
                    message: `You just received ₹ ${point_list.total4}.00`,
                    status: true,
                    timeStamp: timeNow,
                });
            } else if (check < get && point_list.total4 != 0) {
                return res.status(200).json({
                    message: 'Please Recharge ₹ 12000 to claim gift.',
                    status: false,
                    timeStamp: timeNow,
                });
            } else if (point_list.total4 == 0) {
                return res.status(200).json({
                    message: 'You have already received this gift',
                    status: false,
                    timeStamp: timeNow,
                });
            }
        };
        if (data == 5) {
            const [point_lists] = await connection.query('SELECT * FROM point_list WHERE `phone` = ? ', [rows[0].phone]);
            let check = rows[0].money;
            let point_list = point_lists[0];
            let get = 28000;
            if (check >= get && point_list.total5 != 0) {
                await connection.query('UPDATE users SET money = money + ? WHERE phone = ? ', [point_list.total5, rows[0].phone]);
                await connection.query('UPDATE point_list SET total5 = ? WHERE phone = ? ', [0, rows[0].phone]);
                return res.status(200).json({
                    message: `You just received ₹ ${point_list.total5}.00`,
                    status: true,
                    timeStamp: timeNow,
                });
            } else if (check < get && point_list.total5 != 0) {
                return res.status(200).json({
                    message: 'Please Recharge ₹ 28000 to claim gift.',
                    status: false,
                    timeStamp: timeNow,
                });
            } else if (point_list.total5 == 0) {
                return res.status(200).json({
                    message: 'You have already received this gift',
                    status: false,
                    timeStamp: timeNow,
                });
            }
        };
        if (data == 6) {
            const [point_lists] = await connection.query('SELECT * FROM point_list WHERE `phone` = ? ', [rows[0].phone]);
            let check = rows[0].money;
            let point_list = point_lists[0];
            let get = 100000;
            if (check >= get && point_list.total6 != 0) {
                await connection.query('UPDATE users SET money = money + ? WHERE phone = ? ', [point_list.total6, rows[0].phone]);
                await connection.query('UPDATE point_list SET total6 = ? WHERE phone = ? ', [0, rows[0].phone]);
                return res.status(200).json({
                    message: `You just received ₹ ${point_list.total6}.00`,
                    status: true,
                    timeStamp: timeNow,
                });
            } else if (check < get && point_list.total6 != 0) {
                return res.status(200).json({
                    message: 'Please Recharge ₹ 100000 to claim gift.',
                    status: false,
                    timeStamp: timeNow,
                });
            } else if (point_list.total6 == 0) {
                return res.status(200).json({
                    message: 'You have already received this gift',
                    status: false,
                    timeStamp: timeNow,
                });
            }
        };
        if (data == 7) {
            const [point_lists] = await connection.query('SELECT * FROM point_list WHERE `phone` = ? ', [rows[0].phone]);
            let check = rows[0].money;
            let point_list = point_lists[0];
            let get = 200000;
            if (check >= get && point_list.total7 != 0) {
                await connection.query('UPDATE users SET money = money + ? WHERE phone = ? ', [point_list.total7, rows[0].phone]);
                await connection.query('UPDATE point_list SET total7 = ? WHERE phone = ? ', [0, rows[0].phone]);
                return res.status(200).json({
                    message: `You just received ₹ ${point_list.total7}.00`,
                    status: true,
                    timeStamp: timeNow,
                });
                
            } else if (check < get && point_list.total7 != 0) {
                return res.status(200).json({
                    message: 'Please Recharge ₹200000 to claim gift.',
                    status: false,
                    timeStamp: timeNow,
                });
            } else if (point_list.total7 == 0) {
                return res.status(200).json({
                    message: 'You have already received this gift',
                    status: false,
                    timeStamp: timeNow,
                });
            }
        };
    }

}




module.exports = {
    userInfo,
    recharge,
    addBank,
    UserBankInfo,
    withdrawal,
    useRedenvelope,
    listRecharge,
    listWithdraw,
    promotion,
    activityCheck,
    TotalReferrals,
    ResetPassword,
    TotalUser
}