import connection from "../config/connectDB";
import jwt from 'jsonwebtoken'
import md5 from "md5";
import e from "express";
const fs = require('fs');
const path = require('path');
require('dotenv').config();



const getSalaryRecord = async(req, res)=>{
    // const auth = req.cookies.authToken;
    const auth = 130;

    const [rows] = await connection.query(`SELECT * FROM users WHERE id = ?`, [auth]);
    if (!rows) {
      return res.status(200).json({
          message: 'Failed',
          status: false,

      });
  }
    let user = rows[0];
    const [getPhone] = await connection.query(
    `SELECT * FROM salary WHERE phone = ? ORDER BY time DESC`,
    [user.phone]
    );


  console.log("asdasdasd : " +[ rows.phone])
  return res.status(200).json({
      message: 'Success',
      status: true,
      data: {

      },
      rows: getPhone,
})
}



module.exports = {
    getSalaryRecord,
}