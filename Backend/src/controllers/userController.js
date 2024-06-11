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

module.exports = {
    userInfo,
}