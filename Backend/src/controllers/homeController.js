import connection from "../config/connectDB";
import jwt from 'jsonwebtoken'
import md5 from "md5";
import e from "express";
const fs = require('fs');
const path = require('path');
require('dotenv').config();



const getSalaryRecord = async(req, res)=>{
    const auth = req.user.user.phone;
    // const auth = 130;

    const [rows] = await connection.query(`SELECT * FROM users WHERE phone = ?`, [auth]);
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


//   console.log("asdasdasd : " +[ rows.phone])
  return res.status(200).json({
      message: 'Success',
      status: true,
      data: {

      },
      rows: getPhone,
})
}

const LevelDetails = async(req, res)=>{

    const [levels] = await connection.query(`SELECT * FROM level WHERE status = 1 `);


//   console.log( levels)
  return res.status(200).json({
      message: 'Success',
      status: true,
      data: levels
})
}


module.exports = {
    getSalaryRecord,
    LevelDetails
}