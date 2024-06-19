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

const middlewareController = async (req, res, next) => {
  const auth = req.cookies.authToken;
  if (!auth) {
    return res.redirect("http://localhost:5173/login");
  }

  try {
    jwt.verify(auth, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
      if (err) {
        res.clearCookie("authToken");
        return res.redirect("http://localhost:5173/login");
      }
      const [rows] = await connection.execute(
        'SELECT `token`, `status` FROM `users` WHERE `token` = ? AND `veri` = 1',
        [auth]
      );

      if (!rows.length) {
        res.clearCookie("authToken");
        return res.end();
      }
      if (auth === rows[0].token && rows[0].status === '1') {
        req.user = user; 
        next();
      } else {
        return res.redirect("http://localhost:5173/login");
      }
    });
  } catch (error) {
    // If an error occurs, redirect to login
    return res.redirect("http://localhost:5173/login");
  }
};

export default middlewareController;
