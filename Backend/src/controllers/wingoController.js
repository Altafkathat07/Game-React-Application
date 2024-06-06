import connection from "../config/connectDB";
require('dotenv').config();

const isNumber = (params) => {
    let pattern = /^[0-9]*\d$/;
    return pattern.test(params);
}

function formateT(params) {
    let result = (params < 10) ? "0" + params : params;
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

const rosesPlus = async (auth, money) => {
    try {
        const [levels] = await connection.query('SELECT * FROM level');
        
        const [users] = await connection.query('SELECT `phone`, `code`, `invite`, `user_level`, `total_money` FROM users WHERE token = ? AND veri = 1 LIMIT 1 ', [auth]);
        
        // Check if user data exists
        if (users.length === 0) {
            throw new Error("User not found or not verified.");
        }
        
        const userInfo = users[0];

        const [referrers] = await connection.query('SELECT `phone`, `code`, `invite`, `rank`, `user_level`, `total_money` FROM users WHERE code = ? AND veri = 1 LIMIT 1 ', [userInfo.invite]);
        
        if (userInfo.total_money >= 100 && referrers.length > 0) {
            let infoF1 = referrers[0];
            for (let levelIndex = 1; levelIndex <= 6; levelIndex++) {
                if (infoF1.total_money >= 100) {
                    const rosesF = (money / 100) * levels[levelIndex - 1].f1;
                    if (rosesF > 0) {
                        const queryRef = await connection.query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF, rosesF, rosesF, infoF1.phone]);

                        if (queryRef.affectedRows > 0) {
                            console.log(`Update successful. ${queryRef.affectedRows} row(s) updated.`);
                        } else {
                            console.log('No rows were updated.');
                        }
                        const timeNow = Date.now();
                        const sql2 = `INSERT INTO roses SET phone = ?, code = ?, invite = ?, f1 = ?, time = ?`;
                        await connection.execute(sql2, [infoF1.phone, infoF1.code, infoF1.invite, rosesF, timeNow]);
                        
                        const sql3 = `
                            INSERT INTO turn_over (phone, code, invite, daily_turn_over, total_turn_over)
                            VALUES (?, ?, ?, ?, ?)
                            ON DUPLICATE KEY UPDATE
                            daily_turn_over = daily_turn_over + VALUES(daily_turn_over),
                            total_turn_over = total_turn_over + VALUES(total_turn_over)
                        `;
                        await connection.execute(sql3, [infoF1.phone, infoF1.code, infoF1.invite, money, money]);
                    }
                }

                // Fetch next referrer
                const [nextReferrer] = await connection.query('SELECT `phone`, `code`, `invite`, `rank`, `user_level`, `total_money` FROM users WHERE code = ? AND veri = 1 LIMIT 1 ', [infoF1.invite]);
                
                if (nextReferrer.length > 0) {
                    infoF1 = nextReferrer[0];
                } else {
                    break; 
                }
            }
        }
    } catch (error) {
        console.error("Error in rosesPlus:", error);
        throw error; // Re-throw error for handling at higher levels
    }
}
