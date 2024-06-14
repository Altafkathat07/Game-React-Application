import connection from "../config/connectDB";
import jwt from 'jsonwebtoken'
import md5 from "md5";
import multer from "multer";
require('dotenv').config();
import path from 'path';
import fs from 'fs';
let timeNow = Date.now();


const termsAndCondition = async(req, res) => {
    let auth = req.cookies.auth;
    let term = req.body.term;
    if ( !term ) {
        return res.status(200).json({
            message: 'Failed11',
            status: false,
            timeStamp: timeNow,
        });
    }
    const rows = await connection.query(`SELECT * FROM terms LIMIT 1`)
    console.log(rows);
    
    if(rows[0].length === 0){
        const sql = "INSERT INTO terms SET term = ?";
        await connection.execute(sql, [term]);
        res.redirect("http://localhost:5173/admin/uimanagemnt")
        // return res.status(200).json({
        //     message: 'Successful Inserted',
        //     status: true
        // })


    }else{
        await connection.query(`UPDATE terms SET term = ?`, [term]);
        res.redirect("http://localhost:5173/admin/uimanagemnt")
        // return res.status(200).json({
        //     message: 'Successful change',
        //     status: true,
        // });
    }
}

const termsFetching = async(req, res) => {
    const rows = await connection.query(`SELECT * FROM terms LIMIT 1`)
    console.log(rows);
    
    if(rows[0].length === 1){
        const data = rows[0]
        return res.status(200).json({
            message: 'Successful Fetching',
            status: true,
            data: data
        })
    }else{
        return res.status(202).json({
            message: 'something went wrong while fetching Privacy Agreement',
            status: false,
        })
    }
}


const notice = async(req, res) => {
    let auth = req.cookies.auth;
    let noti = req.body.notices;
    if ( !noti ) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        });
    }
    const rows = await connection.query(`SELECT * FROM notification LIMIT 1`)
    // console.log(rows);
    
    if(rows[0].length === 0){
        const sql = "INSERT INTO notification SET notice = ?";
        await connection.execute(sql, [noti]);
        res.redirect("http://localhost:5173/admin/uimanagemnt")
            // return res.status(200).json({
        //     message: 'Successful Inserted',
        //     status: true
        // })


    }else{
        await connection.query(`UPDATE notification SET notice = ?`, [noti]);
        res.redirect("http://localhost:5173/admin/uimanagemnt");
        // return res.status(200).json({
        //     message: 'Successful change',
        //     status: true,
        // });
    }
}

const Popup = async(req, res) => {
    let auth = req.cookies.auth;
    let msg = req.body.message;
    if ( !msg ) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        });
    }
    const rows = await connection.query(`SELECT * FROM popup LIMIT 1`)
    // console.log(rows);
    
    if(rows[0].length === 0){
        const sql = "INSERT INTO popup SET message = ?";
        await connection.execute(sql, [msg]);
        res.redirect("http://localhost:5173/admin/uimanagemnt")
        // return res.status(200).json({
        //     message: 'Successful Inserted',
        //     status: true
        // })


    }else{
        await connection.query(`UPDATE popup SET message = ?`, [msg]);
        res.redirect("http://localhost:5173/admin/uimanagemnt");
        // return res.status(200).json({
        //     message: 'Successful change',
        //     status: true,
        // });
    }
}

const noticeFetching = async(req, res) => {
    const rows = await connection.query(`SELECT * FROM notification LIMIT 1`)
    console.log(rows);
    
    if(rows[0].length === 1){
        const data = rows[0]
        return res.status(200).json({
            message: 'Successful Fetching',
            status: true,
            data: data
        })
    }else{
        return res.status(202).json({
            message: 'something went wrong while fetching Privacy Agreement',
            status: false,
        })
    }
}

const DeleteUser = async (req, res) => {
    const { id } =  req.params;
    console.log(id)
    if(!id){
        return res.status(202).json({
            message: 'something went wrong while id fetching',
            status: false,
        })
        
    }
    console.log(id)
    const [user] = await connection.query('SELECT * FROM users WHERE id = ? ', [id]) ;
   if (user.length === 0) {
    return res.status(202).json({
        message: 'user id not find',
        status: false,
    })
   } 

   await connection.query('DELETE FROM users WHERE id = ?', [id])
   res.redirect("http://localhost:5173/admin/user-details")

}

const UserStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
    if(!id || !status){
        return res.status(202).json({
            message: 'something went wrong while id fetching',
            status: false,
        })
        
    }
    try {
        const [user] = await connection.query('SELECT * FROM users WHERE id = ?', [id]);
        
        if (user.length === 0) {
          return res.status(404).json({
            message: 'User not found',
            status: false,
          });
        }
    
        await connection.query('UPDATE users SET status = ? WHERE id = ?', [status, id]);
    
        return res.status(200).json({
          message: 'User status updated successfully',
          status: true,
        });
      } catch (error) {
        console.error('Error updating user status:', error);
        return res.status(500).json({
          message: 'Server error',
          status: false,
        });
      }
   

}

const rechargeDetails = async (req, res) =>{
    const [rows] = await connection.query('SELECT * FROM recharge WHERE status = 0');
    console.log(rows);
    if(!rows || rows.length === 0){
        return res.status(200).json({
            message: 'something went wrong while user fetching recharge details',
            status: false
        });
    }
    const data = rows;
    console.log(data);
    return res.status(200).json({
        message: 'recharge Details fetch success',
        status: true,
        data: data
    });
}
const rechargeApproveDetail = async (req, res) =>{
    const [rows] = await connection.query('SELECT * FROM recharge WHERE status = 1');
    console.log(rows);
    if(!rows || rows.length === 0){
        return res.status(200).json({
            message: 'something went wrong while user fetching recharge details',
            status: false
        });
    }
    const data = rows;
    console.log(data);
    return res.status(200).json({
        message: 'recharge Details fetch success',
        status: true,
        data: data
    });
}

const rechargeConfirm = async (req, res) => {
    const { id } =  req.params;
    const { money } =  req.params;
    // console.log(id)
    // console.log(money)
    if(!id){
        return res.status(202).json({
            message: 'something went wrong while id fetching',
            status: false,
        })
        
    }
    // console.log(id)
    const [user] = await connection.query('SELECT * FROM recharge WHERE id = ? ', [id]) ;
   if (user.length === 0) {
    return res.status(202).json({
        message: 'user id not find',
        status: false,
    })
   } 
//    console.log(user[0]);
    const phone = user[0].phone
    // console.log(phone)
    const [rows] = await connection.query('SELECT * FROM users WHERE phone = ?', [phone])
    console.log(rows[0].id)
    if(!rows || rows.length === 0){
        return res.status(202).json({
            message: 'user not found',
            status: false,
        })
    }
    await connection.query('UPDATE users SET money = money + ?, total_money = total_money + ? WHERE phone = ?', [money, money, rows[0].phone]);


   await connection.query('UPDATE recharge SET status = ? WHERE id = ?', [1, id])
//    return res.status(202).json({
//     message: 'fetching success',
//     status: true,
//     data: user

// })
   res.redirect("http://localhost:5173/admin/recharge")

}

const rechargeCancel = async (req, res) => {
    const { id } =  req.params;
    if(!id){
        return res.status(202).json({
            message: 'something went wrong while id fetching',
            status: false,
        })
        
    }

   await connection.query('UPDATE recharge SET status = ? WHERE id = ?', [2, id])
   return res.status(202).json({
    message: 'Cancel success',
    status: true,

})
   res.redirect("http://localhost:5173/admin/recharge")

}

const withdraDetails = async (req, res) =>{
    const [rows] = await connection.query('SELECT * FROM withdraw WHERE status = 0');
    console.log(rows);
    if(!rows || rows.length === 0){
        return res.status(200).json({
            message: 'something went wrong while user fetching withdraw details',
            status: false
        });
    }
    const data = rows;
    console.log(data);
    return res.status(200).json({
        message: 'withdraw Details fetch success',
        status: true,
        data: data
    });
}


const withdrawApproveDetail = async (req, res) =>{
    const [rows] = await connection.query('SELECT * FROM withdraw WHERE status = 1');
    console.log(rows);
    if(!rows || rows.length === 0){
        return res.status(200).json({
            message: 'something went wrong while user fetching recharge details',
            status: false
        });
    }
    const data = rows;
    console.log(data);
    return res.status(200).json({
        message: 'recharge Details fetch success',
        status: true,
        data: data
    });
}

const withdrawConfirm = async (req, res) => {
    const { id } =  req.params;
    if(!id){
        return res.status(202).json({
            message: 'something went wrong while id fetching',
            status: false,
        })  
    }
    const [user] = await connection.query('SELECT * FROM withdraw WHERE id = ? ', [id]) ;
    if (user.length === 0) {
        return res.status(202).json({
            message: 'user id not find',
            status: false,
        })
    } 
   await connection.query('UPDATE withdraw SET status = ? WHERE id = ?', [1, id])
//    return res.status(202).json({
//     message: 'fetching success',
//     status: true,
//     data: user

// })
   res.redirect("http://localhost:5173/admin/withdraw")

}

const withdrawCancel = async (req, res) => {
    const { id } =  req.params;
    const { money } =  req.params;
    if(!id){
        return res.status(202).json({
            message: 'something went wrong while id fetching',
            status: false,
        })
        
    }
    const [user] = await connection.query('SELECT * FROM withdraw WHERE id = ? ', [id]) ;
    if (user.length === 0) {
     return res.status(202).json({
         message: 'user id not find',
         status: false,
     })
    } 

    const phone = user[0].phone
    // console.log(phone)
    const [rows] = await connection.query('SELECT * FROM users WHERE phone = ?', [phone])
    // console.log(rows[0].id)
    if(!rows || rows.length === 0){
        return res.status(202).json({
            message: 'user not found',
            status: false,
        })
    }
    await connection.query('UPDATE users SET money = money + ? WHERE phone = ?', [money, rows[0].phone]);


   await connection.query('UPDATE withdraw SET status = ? WHERE id = ?', [2, id])
   res.redirect("http://localhost:5173/admin/recharge")
//    return res.status(202).json({
//     message: 'Cancel success',
//     status: true,

// })

}

const createBonus = async (req, res) => {
    const randomString = (length) => {
        var result = '';
        var characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
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
    const d = new Date();
    const time = d.getTime();

    let auth = 130;
    let money = req.body.money;
    let claim = req.body.numberOfClaim;
    let type = req.body.type;


    if (!money || !claim) {
        return res.status(200).json({
            message: 'Failed 1',
            status: false,
            timeStamp: timeNow,
        });
    }
    const [user] = await connection.query('SELECT * FROM users WHERE id = ? ', [auth]);

    if (user.length == 0) {
        return res.status(200).json({
            message: 'Failed ',
            status: false,
            timeStamp: timeNow,
        });
    }
    let userInfo = user[0];

    if (type == 'all') {
        let select = req.body.select;
        if (select == '1') {
            await connection.query(`UPDATE point_list SET money = money + ? WHERE level = 2`, [money]);
        } else {
            await connection.query(`UPDATE point_list SET money = money - ? WHERE level = 2`, [money]);
        }
        return res.status(200).json({
            message: 'successful change',
            status: true,
        });
    }

    if (type == 'two') {
        let select = req.body.select;
        if (select == '1') {
            await connection.query(`UPDATE point_list SET money_us = money_us + ? WHERE level = 2`, [money]);
        } else {
            await connection.query(`UPDATE point_list SET money_us = money_us - ? WHERE level = 2`, [money]);
        }
        return res.status(200).json({
            message: 'successful change',
            status: true,
        });
    }

    if (type == 'one') {
        let select = req.body.select;
        let phone = req.body.phone;
        const [user] = await connection.query('SELECT * FROM point_list WHERE phone = ? ', [phone]);
        if (user.length == 0) {
            return res.status(200).json({
                message: 'Failed',
                status: false,
                timeStamp: timeNow,
            });
        }
        if (select == '1') {
            await connection.query(`UPDATE point_list SET money = money + ? WHERE level = 2 and phone = ?`, [money, phone]);
        } else {
            await connection.query(`UPDATE point_list SET money = money - ? WHERE level = 2 and phone = ?`, [money, phone]);
        }
        return res.status(200).json({
            message: 'successful change',
            status: true,
        });
    }

    if (type == 'three') {
        let select = req.body.select;
        let phone = req.body.phone;
        const [user] = await connection.query('SELECT * FROM point_list WHERE phone = ? ', [phone]);
        if (user.length == 0) {
            return res.status(200).json({
                message: 'account does not exist',
                status: false,
                timeStamp: timeNow,
            });
        }
        if (select == '1') {
            await connection.query(`UPDATE point_list SET money_us = money_us + ? WHERE level = 2 and phone = ?`, [money, phone]);
        } else {
            await connection.query(`UPDATE point_list SET money_us = money_us - ? WHERE level = 2 and phone = ?`, [money, phone]);
        }
        return res.status(200).json({
            message: 'successful change',
            status: true,
        });
    }

    if (!type) {
        let id_redenvelops = randomString(16);
        let sql = `INSERT INTO redenvelopes SET id_redenvelope = ?, phone = ?, money = ?, used = ?, max_claims = ?, max_count = ?, amount = ?, status = ?, time = ?`;
        await connection.query(sql, [id_redenvelops, userInfo.phone, money, 0, claim, 0, 1, 0, time]);
        return res.status(200).json({
            message: 'Successful change',
            status: true,
            id: id_redenvelops,
        });
    }
}

const bonusDetails = async (req, res) =>{
    const [rows] = await connection.query('SELECT * FROM redenvelopes WHERE status = 0');
    console.log(rows);
    if(!rows || rows.length === 0){
        return res.status(200).json({
            message: 'something went wrong while user fetching bonus details',
            status: false
        });
    }
    const data = rows;
    console.log(data);
    return res.status(200).json({
        message: 'bonus Details fetch success',
        status: true,
        data: data
    });
}

const currentDirectory = process.cwd();

const uploadDir = path.join(currentDirectory, 'src', 'public', 'uploads', 'banners');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); // Specify the destination folder for banner uploads
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Set the filename
    }
});

const upload = multer({ storage: storage }).array('banners');

const uploadBanner = async (req, res) => {
    try {
      
        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                console.error('Multer error:', err);
                return res.status(400).json({ message: 'File upload error' });
            } else if (err) {
                console.error('Error uploading files:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

        
            const banners = req.files;
            console.log(req.files) ;
            
            console.log(banners);
            if (!banners || banners.length === 0) {
                return res.status(400).json({ message: 'No files uploaded' });
            }

            for (const banner of banners) {
                const filename = banner.filename;
                await connection.query('INSERT INTO banners (filename) VALUES (?)', [filename]);
            }

            return res.status(200).json({ message: 'Files uploaded successfully', status: true, files: banners });
        });
    } catch (error) {
        console.error('Error uploading files:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = {
    termsAndCondition,
    uploadBanner,
    notice,
    termsFetching,
    noticeFetching,
    Popup,
    DeleteUser,
    UserStatus,
    rechargeDetails,
    rechargeConfirm,
    rechargeCancel,
    rechargeApproveDetail,
    withdraDetails,
    withdrawApproveDetail,
    withdrawConfirm,
    withdrawCancel,
    createBonus,
    bonusDetails

}