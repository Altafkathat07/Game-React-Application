import connection from "../config/connectDB";
import jwt from 'jsonwebtoken'
import md5 from "md5";
import multer from "multer";
require('dotenv').config();
import path from 'path';
import fs from 'fs';
let timeNow = Date.now();


const termsAndCondition = async(req, res) => {
    // let auth = req.cookies.authToken;
    let auth = req.user.user.phone;

    let term = req.body.term;
    if ( !auth || !term ) {
        return res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow,
        });
    }
    const rows = await connection.query(`SELECT * FROM terms LIMIT 1`)
    // console.log(rows);
    
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
    // console.log(rows);
    
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
    // let auth = req.cookies.authToken;
    let auth = req.user.user.phone;
    let noti = req.body.notices;
    if ( !auth || !noti  ) {
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
    // let auth = req.cookies.authToken;
    let auth = req.user.user.phone;
    let msg = req.body.message;
    if (!auth || !msg ) {
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
    let auth = req.user.user.phone;
    if(!auth){
        return res.status(202).json({
            message: 'Failed',
            status: false,
        }) 
    }
    // console.log("this is the notice: " + JSON.stringify(auth))
    
    const rows = await connection.query(`SELECT * FROM notification LIMIT 1`)
    // console.log(rows);
    
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
    // console.log(id)
    if(!id){
        return res.status(202).json({
            message: 'something went wrong while id fetching',
            status: false,
        })
        
    }
    // console.log(id)
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
    // console.log(rows);
    if(!rows || rows.length === 0){
        return res.status(200).json({
            message: 'something went wrong while user fetching recharge details',
            status: false
        });
    }
    const data = rows;
    // console.log(data);
    return res.status(200).json({
        message: 'recharge Details fetch success',
        status: true,
        data: data
    });
}
const rechargeApproveDetail = async (req, res) =>{
    const [rows] = await connection.query('SELECT * FROM recharge WHERE status = 1');
    // console.log(rows);
    if(!rows || rows.length === 0){
        return res.status(200).json({
            message: 'something went wrong while user fetching recharge details',
            status: false
        });
    }
    const data = rows;
    // console.log(data);
    return res.status(200).json({
        message: 'recharge Details fetch success',
        status: true,
        data: data
    });
}

// const rechargeConfirm = async (req, res) => {
//     const { id } =  req.params;
//     const { money } =  req.params;
//     if(!id){
//         return res.status(202).json({
//             message: 'something went wrong while id fetching',
//             status: false,
//         })
        
//     }
//     const [user] = await connection.query('SELECT * FROM recharge WHERE id = ? ', [id]) ;
//    if (user.length === 0) {
//     return res.status(202).json({
//         message: 'user id not find',
//         status: false,
//     })
//    } 
// //    console.log(user[0]);
//     const phone = user[0].phone
//     // console.log(phone)
//     const [rows] = await connection.query('SELECT * FROM users WHERE phone = ?', [phone])
//     // console.log(rows[0].id)
//     if(!rows || rows.length === 0){
//         return res.status(202).json({
//             message: 'user not found',
//             status: false,
//         })
//     }
//     const userInfo = rows[0];
//     const [bonus] = await connection.execute('SELECT * FROM bonus');
//     const invite_bonus = bonus[0].invite_bonus;
//     let bonus_money = (invite_bonus/100)*money
    
//     const invitecode = userInfo.invite;
//     console.log("this is invite code :" + invitecode)
//     const [check_i] = await connection.query('SELECT * FROM users WHERE code = ? ', [invitecode]);
//     console.log(check_i[0])
//     const ref = check_i[0].phone 
//     if(check_i){
//          const [refrral_money_add] = await connection.query('UPDATE `users` SET `money` = `money`+ ? WHERE `phone` = ? ', [bonus_money, ref]) 
//     }

  
//     await connection.query('UPDATE users SET money = money + ?, total_money = total_money + ? WHERE phone = ?', [money, money, rows[0].phone]);


//    await connection.query('UPDATE recharge SET status = ? WHERE id = ?', [1, id])
// //    return res.status(202).json({
// //     message: 'fetching success',
// //     status: true,
// //     data: user

// // })
//    res.redirect("http://localhost:5173/admin/recharge")

// }
// const rechargeConfirm = async (req, res) => {
//     const id = 111;
//     const money = 500;

//     // Validate id and money parameters
//     if (!id || !money) {
//         return res.status(400).json({
//             message: 'Missing parameters',
//             status: false,
//         });
//     }

//     try {
//         // Fetch recharge record by id
//         const [recharge] = await connection.query('SELECT * FROM recharge WHERE id = ?', [id]);
//         if (recharge.length === 0) {
//             return res.status(404).json({
//                 message: 'Recharge record not found',
//                 status: false,
//             });
//         }

//         const phone = recharge[0].phone;

//         // Fetch user by phone number
//         const [users] = await connection.query('SELECT * FROM users WHERE phone = ?', [phone]);
//         if (!users || users.length === 0) {
//             return res.status(404).json({
//                 message: 'User not found',
//                 status: false,
//             });
//         }

//         const user = users[0];
//         const invitecode = user.invite;

//         // Function to get user info by invite code
//         const getUserInfo = async (userId) => {
//             const [userInfo] = await connection.query('SELECT * FROM users WHERE code = ?', [userId]);
//             return userInfo[0];
//         };

//         // Get second user info by invite code
//         const secondUser = await getUserInfo(invitecode);
//         const secondInviteCode = secondUser.invite;

//         // Function to fetch levels
//         const getLevels = async () => {
//             const [levels] = await connection.query('SELECT * FROM level WHERE status = 1');
//             return levels;
//         };

//         // Get levels details
//         const levelsDetail = await getLevels();

//         // Function to calculate bonus based on money and level
//         const calculateBonus = (money, level) => {
//             const levelInfo = levelsDetail.find(l => l.level === level);
//             const bonusPercentage = parseFloat(levelInfo.f1); // Assuming f1 is the bonus percentage
//             const bonus = money * (bonusPercentage / 100);
//             return bonus;
//         };

//         // Calculate bonus for current user (level 1)
//         const money_bonus = calculateBonus(parseInt(money), 1);

//         // Update current user's money with bonus and reference user's money
//         const updateUserMoney = async (userId, refUserId, bonus, money) => {
//             await connection.query('UPDATE users SET money = money + ?, total_money = total_money + ? WHERE phone = ?', [money, money, userId]);
//             await connection.query('UPDATE users SET money = money + ? WHERE phone = ?', [bonus, refUserId]);
//         };

//         // Assuming you have a reference user to update their money, adjust accordingly
//         await updateUserMoney(user.phone, secondUser.phone, money_bonus, parseInt(money));

//         // Get next user info by second invite code
//         const nextUser = await getUserInfo(secondInviteCode);

//         // Calculate bonus for next user (level 2)
//         const nextUserBonus = calculateBonus(parseInt(money), 2);

//         // Update next user's money with bonus
//         const updateUserMoney2 = async (refUserId, bonus) => {
//             await connection.query('UPDATE users SET money = money + ? WHERE phone = ?', [bonus, refUserId]);
//         };

//         // Assuming you have a second reference user to update their money, adjust accordingly
//         await updateUserMoney2(nextUser.phone, nextUserBonus);

//         // Update recharge status to confirmed (status = 1)
//         await connection.query('UPDATE recharge SET status = ? WHERE id = ?', [1, id]);

//         // Return success response with recharge data
//         return res.status(200).json({
//             message: 'Recharge confirmed successfully',
//             status: true,
//             data: recharge,
//         });
//     } catch (error) {
//         console.error('Error in rechargeConfirm:', error);
//         return res.status(500).json({
//             message: 'Internal server error',
//             status: false,
//         });
//     }
// };


const rechargeConfirm = async (req, res) => {
    const id = 111;
    const money = 500;

    // Validate id and money parameters
    if (!id || !money) {
        return res.status(400).json({
            message: 'Missing parameters',
            status: false,
        });
    }

    try {
        // Fetch recharge record by id
        const [recharge] = await connection.query('SELECT * FROM recharge WHERE id = ?', [id]);
        if (recharge.length === 0) {
            return res.status(404).json({
                message: 'Recharge record not found',
                status: false,
            });
        }

        const phone = recharge[0].phone;

        // Fetch user by phone number
        const [users] = await connection.query('SELECT * FROM users WHERE phone = ?', [phone]);
        if (!users || users.length === 0) {
            return res.status(404).json({
                message: 'User not found',
                status: false,
            });
        }

        const user = users[0];
        let currentInviteCode = user.invite;

        // Function to get user info by invite code
        const getUserInfo = async (userId) => {
            const [userInfo] = await connection.query('SELECT * FROM users WHERE code = ?', [userId]);
            return userInfo[0];
        };

        // Function to fetch levels
        const getLevels = async () => {
            const [levels] = await connection.query('SELECT * FROM level WHERE status = 1');
            return levels;
        };

        // Get levels details
        const levelsDetail = await getLevels();

        // Function to calculate bonus based on money and level
        const calculateBonus = (money, level) => {
            const levelInfo = levelsDetail.find(l => l.level === level);
            if (!levelInfo) {
                throw new Error(`Level ${level} not found`);
            }
            const bonusPercentage = parseFloat(levelInfo.f1); // Assuming f1 is the bonus percentage
            const bonus = money * (bonusPercentage / 100);
            return bonus;
        };

        await connection.query('UPDATE users SET money = money + ?, total_money = total_money + ? WHERE phone = ?', [money, money, phone]);
        // Update user's money with bonus
        const updateUserMoney = async (userId, bonus) => {
            await connection.query('UPDATE users SET money = money + ? WHERE phone = ?', [bonus, userId]);
        };

        // Update the current user's money with the recharge amount
        await updateUserMoney(user.phone, 0, parseInt(money));

        // Loop through the levels and update the money for up to 7 levels
        for (let level = 1; level <= 7; level++) {
            if (!currentInviteCode) break;

            // Get the next user info by invite code
            const nextUser = await getUserInfo(currentInviteCode);
            if (!nextUser) break;

            // Calculate bonus for the current level
            const levelBonus = calculateBonus(parseInt(money), level);

            // Update the next user's money with the bonus
            await updateUserMoney(nextUser.phone, levelBonus, 0);

            // Update the invite code for the next iteration
            currentInviteCode = nextUser.invite;
        }

        // Update recharge status to confirmed (status = 1)
        await connection.query('UPDATE recharge SET status = ? WHERE id = ?', [1, id]);

        // Return success response with recharge data
        return res.status(200).json({
            message: 'Recharge confirmed successfully',
            status: true,
            data: recharge,
        });
    } catch (error) {
        console.error('Error in rechargeConfirm:', error);
        return res.status(500).json({
            message: 'Internal server error',
            status: false,
        });
    }
};




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
    // console.log(rows);
    if(!rows || rows.length === 0){
        return res.status(200).json({
            message: 'something went wrong while user fetching withdraw details',
            status: false
        });
    }
    const data = rows;
    // console.log(data);
    return res.status(200).json({
        message: 'withdraw Details fetch success',
        status: true,
        data: data
    });
}


const withdrawApproveDetail = async (req, res) =>{
    const [rows] = await connection.query('SELECT * FROM withdraw WHERE status = 1');
    // console.log(rows);
    if(!rows || rows.length === 0){
        return res.status(200).json({
            message: 'something went wrong while user fetching recharge details',
            status: false
        });
    }
    const data = rows;
    // console.log(data);
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

    let auth = req.user.user.phone;
    let money = req.body.money;
    let claim = req.body.numberOfClaim;
    let type = req.body.type;


    if (!auth || !money || !claim) {
        return res.status(200).json({
            message: 'Failed 1',
            status: false,
            timeStamp: timeNow,
        });
    }
    const [user] = await connection.query('SELECT * FROM users WHERE phone = ? ', [auth]);

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
    // console.log(rows);
    if(!rows || rows.length === 0){
        return res.status(200).json({
            message: 'something went wrong while user fetching bonus details',
            status: false
        });
    }
    const data = rows;
    // console.log(data);
    return res.status(200).json({
        message: 'bonus Details fetch success',
        status: true,
        data: data
    });
}


const Bonus = async (req, res) => {
    let auth = req.user.user.phone;
    let { bonus, fr, ib } = req.body;
    
    if (!auth || (!bonus && !fr && !ib)) {
        return res.status(400).json({
            message: 'Failed',
            status: false,
            timeStamp: new Date().toISOString(),
        });
    }

    try {
        const [rows] = await connection.query(`SELECT * FROM bonus LIMIT 1`);
        
        if (rows.length === 0) {
            const sql = "INSERT INTO bonus SET welcome_bonus = ?, first_reacharge_bonus = ?, invite_bonus = ?";
            await connection.execute(sql, [bonus || 0, fr || 0, ib || 0]);
            return res.status(200).json({
                message: 'Successfully Inserted',
                status: true
            });
        } else {
            let updates = [];
            let params = [];

            if (bonus !== undefined && bonus !== '') {
                updates.push("welcome_bonus = ?");
                params.push(bonus);
            }
            if (fr !== undefined && fr !== '') {
                updates.push("first_reacharge_bonus = ?");
                params.push(fr);
            }
            if (ib !== undefined && ib !== '') {
                updates.push("invite_bonus = ?");
                params.push(ib);
            }

            if (updates.length > 0) {
                const sql = `UPDATE bonus SET ${updates.join(', ')} WHERE id = ?`;
                params.push(rows[0].id); // Assuming the first row contains the id
                await connection.query(sql, params);
            }

            return res.status(200).json({
                message: 'Successfully Updated',
                status: true,
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Server error',
            status: false,
            error: error.message
        });
    }
};

const getLevelInfo = async (req, res) => {

    const [rows] = await connection.query('SELECT * FROM `level`');

    if (!rows) {
        return res.status(200).json({
            message: 'Failed',
            status: false,

        });
    }
    console.log("asdasdasd : " + rows)
    return res.status(200).json({
        message: 'Success',
        status: true,
        data: rows
    });
}
const updateLevel = async (req, res) => {
    const updatedLevels = req.body;
    try {
        for (const level of updatedLevels) {
            const { id, status, f1, f2 } = level;
            await connection.query(
                'UPDATE `level` SET `status` = ?, `f1` = ?, `f2` = ? WHERE `id` = ?',
                [status, f1, f2, id]
            );
        }
        res.status(200).json({
            message: 'Update successful',
            status: true,
        });
    } catch (error) {
        console.error('Error updating level:', error);

        // Send an error response to the client
        res.status(500).json({
            message: 'Update failed',
            status: false,
            error: error.message,
        });
    }
};

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
            // console.log(req.files) ;
            
            // console.log(banners);
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
    bonusDetails,
    Bonus,
    getLevelInfo,
    updateLevel
    // RegistrationBonus,
    // FirstRechargeBonus,
    // InviteBonus

}