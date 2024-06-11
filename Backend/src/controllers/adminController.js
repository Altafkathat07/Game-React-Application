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

}