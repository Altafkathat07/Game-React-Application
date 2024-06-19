import connection from "../config/connectDB";
import jwt from 'jsonwebtoken'
import md5 from "md5";
import request from 'request';
import e, { response } from "express";
import fast2sms from  "fast-two-sms";
import axios from "axios";
import multer from "multer";





require('dotenv').config();


let timeNow = Date.now();

const randomString = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}


const randomNumber = (min, max) => {
    return String(Math.floor(Math.random() * (max - min + 1)) + min);
}

const isNumber = (params) => {
    let pattern = /^[0-9]*\d$/;
    return pattern.test(params);
}

const ipAddress = (req) => {
    let ip = '';
    if (req.headers['x-forwarded-for']) {
        ip = req.headers['x-forwarded-for'].split(",")[0];
    } else if (req.connection && req.connection.remoteAddress) {
        ip = req.connection.remoteAddress;
    } else {
        ip = req.ip;
    }
    return ip;
}

const timeCreate = () => {
    const d = new Date();
    const time = d.getTime();
    return time;
}
// const otpVerify = async (req, res) =>{

//     let { username} = req.body;
//     let otp = randomNumber(100000, 999999);
//     if (!username ) {
//         return res.status(200).json({
//             message: 'ERROR!!!',
//             status: false
//         });
//     }

//     if (username.length < 9 || username.length > 10 || !isNumber(username)) {
//         return res.status(200).json({
//             message: 'phone error',
//             status: false
//         });
//     }
//     const option = {
//         authorization: "gT1GIrhD4UNvpOQdBWAutKm38nfVPZqwxYkF6e79yElMjoSCbzz01dLDEKxYM28gt9a3XTkOB4ifeyHc",
//         message: `your otp is : ` +  otp,
//         numbers: `${username}`
    
//     }
//     console.log(username, option)
    
    
//     fast2sms.sendMessage(option).then((response)=>{
//         console.log(response)
//         return res.status(200).json({
//             message: 'otp send successfully',
//             status: true
//         });
//     }).catch((error) =>{
//         console.log("in catch" + option)
//         console.log(error)
//         return res.status(200).json({
//             message: 'something went wrong while sending otp',
//             status: false
//         });
//     })
// }


// const otpVerify = async (req, res) =>{

//     const apiKey = "gT1GIrhD4UNvpOQdBWAutKm38nfVPZqwxYkF6e79yElMjoSCbzz01dLDEKxYM28gt9a3XTkOB4ifeyHc"
//     const otp = randomNumber(100000, 999999);

//     const msg = `Your Otp is :${otp}` ;
//     const number = '7878972516';

//     const smsData = {
//         // sender_id : "FSTSMS", 
//         message: msg,
//         // language: "english",
//         route: "q",
//         numbers: number
//     }

//     axios.post("https://www.fast2sms.com/dev/bulkV2", smsData, {
//         headers: {
//             Authorization: apiKey
//         }
//     }).then(response =>{
//         console.log("SMS send successfully" + response.data);
//     }).catch(err => {
//         console.log("something went wrong in opt sending" + err)
//     })
// }


const register = async(req, res) => {
    
    let now = new Date().getTime();
    let { username, pwd, invitecode } = req.body;
    let id_user = randomNumber(10000, 99999);
    let otp2 = randomNumber(100000, 999999);
    let name_user = "Member" + randomNumber(10000, 99999);
    let code = randomString(5) + randomNumber(10000, 99999);
    let ip = ipAddress(req);
    let time = timeCreate();
    // console.log(username, pwd, invitecode)
    if (!username || !pwd || !invitecode) {
        // console.log(username, pwd, invitecode )
        return res.status(200).json({
            message: 'ERROR!!!',
            status: false
        });
    }

    if (username.length < 9 || username.length > 10 || !isNumber(username)) {
        return res.status(200).json({
            message: 'phone error',
            status: false
        });
    }



    try {
        const [check_u] = await connection.query('SELECT * FROM users WHERE phone = ?', [username]);
        const [check_i] = await connection.query('SELECT * FROM users WHERE code = ? ', [invitecode]);
        const [check_ip] = await connection.query('SELECT * FROM users WHERE ip_address = ? ', [ip]);
        const [welcome_bonus] = await connection.query('SELECT * FROM bonus');
        // console.log(welcome_bonus[0].welcome_bonus);
        const wel_bonus = welcome_bonus[0].welcome_bonus ?? 0;

        if (check_u.length == 1 && check_u[0].veri == 1) {
            return res.status(200).json({
                message: 'Phone number has been registered',
                status: false
            });
        } else {
            if (check_i.length == 1) {
                if (check_ip.length <= 3) {
                    // let ctv = '';
                    // if (check_i[0] == 2) {
                    //     ctv = check_i[0].phone;
                    // } else {
                    //     ctv = check_i[0].ctv;
                    // }
                    const sql = "INSERT INTO users SET id_user = ?,phone = ?,name_user = ?,password = ?,money = ?,code = ?,invite = ?,ctv = ?,veri = ?,otp = ?,ip_address = ?,status = ?,time = ?";
                    await connection.execute(sql, [id_user, username, name_user, md5(pwd), wel_bonus, code, invitecode, "ctv", 1, otp2, ip, 1, time]);
                    // await connection.execute('INSERT INTO point_list SET phone = ?', [username]);
                    res.redirect('http://localhost:5173/login')
                    // return res.status(200).json({
                    //     message: 'Register Success',
                    //     status: true
                    // });
                } else {
                    return res.status(200).json({
                        message: 'IP address has been registered',
                        status: false
                    });
                }
            } else {
                return res.status(200).json({
                    message: 'Invite code does not exist',
                    status: false
                });
            }
        }
    } catch (error) {
        if (error){
        } console.log(error);
            return res.status(200).json({
                message: 'something went wrong while user register',
                status: false
            });
    }

}

const login = async(req, res) => {
    let { username, pwd } = req.body;

    if (!username || !pwd) {
        return res.status(401).json({
            message: 'ERROR!!!'
        });
    }

    try {

        const [rows] = await connection.query('SELECT * FROM users WHERE phone = ? AND password = ? ', [username, md5(pwd)]);
      
        if (rows.length == 1) {
            if (rows[0].status == 1) {
                const { password, money, ip, veri, ip_address, status, time, ...others } = rows[0];
                const accessToken = jwt.sign({
                    user: {...others },
                    timeNow: timeNow
                }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });

                const [popupRows] = await connection.query('SELECT * FROM popup LIMIT 1');
                const pop = popupRows[0].message;
                if(!pop){
                    return res.status(208).json({
                        message: 'Error Popup',
                        status: false,
                    })
                }
                await connection.execute('UPDATE `users` SET `token` = ? WHERE `phone` = ? ', [md5(accessToken), username]);
                
                 res.cookie('authToken', accessToken, { httpOnly: true, secure: false }); 
                 console.log(accessToken);

                // res.redirect("http://localhost:5173/")
                return res.status(200).json({
                    message: 'Login Success',
                    status: true,
                    token: accessToken,
                    value: md5(accessToken),
                    popup: pop,
                }); 
            } else {
                return res.status(410).json({
                    message: 'Account has been locked',
                    status: false
                });
            }
        } else {
            return res.status(200).json({
                message: 'Account or Password is incorrect',
                status: false
            });
        }
    } catch (error) {
        return res.status(400).json({
            message: 'something went wrong while login the user',
            status: false
        })
    }

}

const UserDetails = async(req, res) =>{
    const [rows] = await connection.query('SELECT * FROM users');
    // console.log(rows);
    if(!rows || rows.length === 0){
        return res.status(200).json({
            message: 'something went wrong while user fetching user details',
            status: false
        });
    }
    const data = rows;
    console.log(data);
    return res.status(200).json({
        message: 'user Details fetch success',
        status: true,
        data: data
    });
}

module.exports = {
    register,
    login,
    // otpVerify,
    UserDetails,
    // loginPage,
    // registerPage,
    // forgotPage,
    // verifyCodePass,
    // forGotPassword
}       