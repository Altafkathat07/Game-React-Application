// import jwt from 'jsonwebtoken';

// const middlewareController = async(req, res, next) => {
//     const auth = req.cookies.authToken;
//     // console.log("this is middleware token :" + auth);

//     if (auth) {
//         const token = auth;
//         jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//             if (err) {
//                 return res.status(401).json({
//                     message: 'Failed',
//                     status: false,
//                 });
//             }
//             req.user = user;
//             // console.log("this is user : " + user);
//             next(); 
//         });
//     } else {
//         return res.status(401).json({
//             message: 'Failed',
//             status: false,
//         }); 
//     }
// };

// export default middlewareController;

import connection from '../config/connectDB';
import jwt from 'jsonwebtoken';
import md5 from "md5";

const middlewareController = async (req, res, next) => {
  const auth = req.cookies.authToken;
  if (!auth) {
    return res.redirect("http://localhost:5173/login");
  }
   const authToken = md5(auth);
  console.log("this is auth from middleware :" + authToken)
  const token =  process.env.ACCESS_TOKEN_SECRET
  console.log(token);
  try {
    jwt.verify(auth, token, async (err, user) => {
      if (err) {
        console.log("error 1 : " + err)
        res.clearCookie("authToken");
        return res.redirect("http://localhost:5173/login");
      }
      const [rows] = await connection.execute(
        'SELECT `token`, `status`, `phone` FROM `users` WHERE `token` = ? AND `veri` = 1',
        [authToken]
      );
      // console.log("output 1 : " + rows[0].token )
      // console.log("output 1 : " + rows[0].status)
      
      if (!rows.length) {
        console.log(true)
        res.clearCookie("authToken");
        return res.end();
      }
      if (authToken == rows[0].token && rows[0].status == '1') {
        console.log("output 2 : " + authToken)
        req.user = user; 
        console.log("this is auth :" + user.user)
        next();
      } else {
        console.log("this is else part ")
        return res.redirect("http://localhost:5173/login");
      }
    });
  } catch (error) {
    // If an error occurs, redirect to login
    return res.redirect("http://localhost:5173/login");
  }
};

export default middlewareController;
