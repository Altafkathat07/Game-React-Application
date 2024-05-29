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
        return res.status(200).json({
            message: 'Successful Inserted',
            status: true
        })


    }else{
        await connection.query(`UPDATE terms SET term = ?`, [term]);
        res.redirect("http://localhost:5173/admin/uimanagemnt")
        return res.status(200).json({
            message: 'Successful change',
            status: true,
        });
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
        return res.status(200).json({
            message: 'Successful Inserted',
            status: true
        })


    }else{
        await connection.query(`UPDATE notification SET notice = ?`, [noti]);
        res.redirect("http://localhost:5173/admin/uimanagemnt");
        return res.status(200).json({
            message: 'Successful change',
            status: true,
        });
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

// Set up multer storage
const currentDirectory = process.cwd();

// Define the destination directory relative to the current directory
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

// const uploadBanner = async (req, res) => {
//     try {
//         // Handle file upload using multer
//         upload(req, res, async function (err) {
//             if (err instanceof multer.MulterError) {
//                 console.error('Multer error:', err);
//                 return res.status(400).json({ message: 'File upload error' });
//             } else if (err) {
//                 console.error('Error uploading files:', err);
//                 return res.status(500).json({ message: 'Internal server error111' });
//             }

//             // If files are successfully uploaded
//             const banners = req.files; // Access uploaded files
//             if (!banners || banners.length === 0) {
//                 return res.status(400).json({ message: 'No files uploaded' });
//             }

//             // Process and save the files to storage
//             // Assuming each uploaded banner corresponds to a separate record in the database
//             for (const banner of banners) {
//                 const filename = banner.filename;
//                 // Save file information to MySQL database
//                 await connection.query('INSERT INTO banners (filename) VALUES (?)', [filename]);
//             }

//             return res.status(200).json({ message: 'Files uploaded successfully', status: true, files: banners });
//         });
//     }catch (error) {
//         console.error('Error uploading files:', error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// };

const uploadBanner = async (req, res) => {
    try {
        // Handle file upload using multer
        upload(req, res, async function (err) {
            if (err) {
                console.error('Error uploading files:', err);
                if (err instanceof multer.MulterError) {
                    return res.status(400).json({ message: 'File upload error' });
                } else {
                    return res.status(500).json({ message: 'Internal server error' });
                }
            }

            // If files are successfully uploaded
            const banners = req.files; // Access uploaded files
            if (!banners || banners.length === 0) {
                return res.status(400).json({ message: 'No files uploaded' });
            }

            // Process and save the files to storage
            // Assuming each uploaded banner corresponds to a separate record in the database
            for (const banner of banners) {
                const filename = banner.filename;
                // Save file information to MySQL database
                await connection.query('INSERT INTO banners (filename) VALUES (?)', [filename]);
            }

            return res.status(200).json({ message: 'Files uploaded successfully', status: true, files: banners });
        });
    } catch (error) {
        console.error('Error uploading files:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};


// const getBanners = async (req, res) => {
//     try {
//         const [rows] = await connection.query('SELECT filename FROM banners');
//         return res.status(200).json({ message: 'Success', status: true, filename:rows });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// };

// const deleteBanner = async (req, res) => {
//     const filename = req.body.filename; // Access the filename from the request parameters
//     const currentDirectory = process.cwd();
//     const filePath = path.join(currentDirectory, 'src', 'public', 'uploads', 'banners', filename);
    
//     // Delete the file
//     fs.unlink(filePath, async (err) => {
//         if (err) {
//             console.error('Error deleting banner:', err);
//             return res.status(500).json({ error: 'Internal server error' });
//         }       
//         // If the file is deleted successfully, delete its record from the database
//         try {
//             await connection.query('DELETE FROM banners WHERE filename = ?', [filename]);
//             res.status(200).json({ message: 'Banner deleted successfully', status: true });
//         } catch (error) {
//             console.error('Error deleting banner from database:', error);
//             return res.status(500).json({ error: 'Internal server error' });
//         }
//     });
// };

module.exports = {
    termsAndCondition,
    uploadBanner,
    notice,
    termsFetching,
    noticeFetching

}