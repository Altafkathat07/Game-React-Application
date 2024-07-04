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
        
        const [users] = await connection.query('SELECT `phone`, `code`, `invite`, `user_level`, `total_money` FROM users WHERE phone = ? AND veri = 1 LIMIT 1 ', [auth]);
        
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
                            // console.log(`Update successful. ${queryRef.affectedRows} row(s) updated.`);
                        } else {
                            // console.log('No rows were updated.');
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
const betWinGo = async (req, res) => {
    let { typeid, join, x, money } = req.body;
    // let auth = req.user.user.phone;
    let auth = 7878979705;

    if (typeid != 1 && typeid != 3 && typeid != 5 && typeid != 10) {
        return res.status(200).json({
            message: 'Error!',
            status: true
        });
    }


    let gameJoin = '';
    if (typeid == 1) gameJoin = 'wingo';
    if (typeid == 3) gameJoin = 'wingo3';
    if (typeid == 5) gameJoin = 'wingo5';
    if (typeid == 10) gameJoin = 'wingo10';
    const [winGoNow] = await connection.query(`SELECT period FROM wingo WHERE status = 0 AND game = '${gameJoin}' ORDER BY id DESC LIMIT 1 `);
    const [user] = await connection.query('SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE phone = ? AND veri = 1  LIMIT 1 ', [auth]);
    if (!winGoNow[0] || !user[0] || !isNumber(x) || !isNumber(money)) {
        return res.status(200).json({
            message: 'Error!',
            status: true
        });
    }

    let userInfo = user[0];
    let period = winGoNow[0].period;
    let fee = (x * money) * 0.02;
    let total = (x * money) - fee;
    let timeNow = Date.now();
    let check = userInfo.money - total;

    let date = new Date();
    let years = formateT(date.getFullYear());
    let months = formateT(date.getMonth() + 1);
    let days = formateT(date.getDate());
    let id_product = years + months + days + Math.floor(Math.random() * 1000000000000000);

    let formatTime = timerJoin();

    let color = '';
    if (join == 'l') {
        color = 'big';
    } else if (join == 'n') {
        color = 'small';
    } else if (join == 't') {
        color = 'violet';
    } else if (join == 'd') {
        color = 'red';
    } else if (join == 'x') {
        color = 'green';
    } else if (join == '0') {
        color = 'red-violet';
    } else if (join == '5') {
        color = 'green-violet';
    } else if (join % 2 == 0) {
        color = 'red';
    } else if (join % 2 != 0) {
        color = 'green';
    }

    let checkJoin = '';

    if (!isNumber(join) && join == 'l' || join == 'n') {
        checkJoin = `
        <div data-v-a9660e98="" class="van-image" style="width: 30px; height: 30px;">
            <img src="/images/${(join == 'n') ? 'small' : 'big'}.png" class="van-image__img">
        </div>
        `
    } else {
        checkJoin =
            `
        <span data-v-a9660e98="">${(isNumber(join)) ? join : ''}</span>
        `
    }


    let result = `
    <div data-v-a9660e98="" issuenumber="${period}" addtime="${formatTime}" rowid="1" class="hb">
        <div data-v-a9660e98="" class="item c-row">
            <div data-v-a9660e98="" class="result">
                <div data-v-a9660e98="" class="select select-${(color)}">
                    ${checkJoin}
                </div>
            </div>
            <div data-v-a9660e98="" class="c-row c-row-between info">
                <div data-v-a9660e98="">
                    <div data-v-a9660e98="" class="issueName">
                        ${period}
                    </div>
                    <div data-v-a9660e98="" class="tiem">${formatTime}</div>
                </div>
            </div>
        </div>
        <!---->
    </div>
    `;

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
    let checkTime = timerJoin(date.getTime());

    if (check >= 0) {
        const sql = `INSERT INTO minutes_1 SET 
        id_product = ?,
        phone = ?,
        code = ?,
        invite = ?,
        stage = ?,
        level = ?,
        money = ?,
        amount = ?,
        fee = ?,
        get = ?,
        game = ?,
        bet = ?,
        status = ?,
        today = ?,
        time = ?`;
        await connection.execute(sql, [id_product, userInfo.phone, userInfo.code, userInfo.invite, period, userInfo.level, total, x, fee, 0, gameJoin, join, 0, checkTime, timeNow]);
        await connection.execute('UPDATE `users` SET `money` = `money` - ? WHERE `phone` = ? ', [money * x, auth]);
        const [users] = await connection.query('SELECT `money`, `level`, `code`, `invite` FROM users WHERE phone = ? AND veri = 1  LIMIT 1 ', [auth]);
        // await rosesPlus(auth, money * x);
        console.log("this is user in wingo :" + users[0]);
        // const user = users[0];
        let currentInviteCode = userInfo.invite;
        console.log("this is user invite code in wingo :" + currentInviteCode);
        const getUserInfo = async (userId) => {
            const [userInfo] = await connection.query('SELECT * FROM users WHERE code = ?', [userId]);
            return userInfo[0];
        };
        let levelLenght = '';
        const getLevels = async () => {
            const [levels] = await connection.query('SELECT * FROM level WHERE status = 1');
             levelLenght = levels.length;
            console.log(levelLenght);
            console.log(levels);
            return levels;
            
        };

        const levelsDetail = await getLevels();

        const calculateBonus = (money, level) => {
            const levelInfo = levelsDetail.find(l => l.level === level);
            if (!levelInfo) {
                throw new Error(`Level ${level} not found`);
            }
            const bonusPercentage = parseFloat(levelInfo.f2); 
            const bonus = money * (bonusPercentage / 100);
            return bonus;
        };
        const updateUserMoney = async (userId, bonus, level) => {
            if (level === 1) {
                await connection.query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ?, roses_f1 = roses_f1 + ? WHERE phone = ?', [bonus, bonus, bonus, bonus, userId]);
            } else {
                await connection.query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ?, team = team + ? WHERE phone = ?', [bonus, bonus, bonus, bonus, userId]);
            }
        };

        await updateUserMoney(userInfo.phone, 0, parseInt(money));

        for (let level = 1; level <= levelLenght; level++) {
            console.log(levelLenght)
            if (!currentInviteCode) break;

            const nextUser = await getUserInfo(currentInviteCode);
            if (!nextUser) break;

            const levelBonus = calculateBonus(parseInt(money), level);

            await updateUserMoney(nextUser.phone, levelBonus, level);

            currentInviteCode = nextUser.invite;
        }
        
        return res.status(200).json({
            message: 'Successful bet',
            status: true,
            data: result,
            change: users[0].level,
            money: users[0].money,
        });
    } else {
        return res.status(200).json({
            message: 'The amount is not enough',
            status: false
        });
    }
}

const listOrderOld = async (req, res) => {
    let { typeid, pageno, pageto } = req.body;

    if (typeid != 1 && typeid != 3 && typeid != 5 && typeid != 10) {
        return res.status(200).json({
            message: 'Error!',
            status: true
        });
    }
    if (pageno < 0 || pageto < 0) {
        return res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
                gameslist: [],
            },
            status: false
        });
    }
    // let auth = req.cookies.authToken;
    // let auth = 7878979700;
    let auth = req.user.user.phone;
    const [user] = await connection.query('SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE phone = ? AND veri = 1  LIMIT 1 ', [auth]);

    let game = '';
    if (typeid == 1) game = 'wingo';
    if (typeid == 3) game = 'wingo3';
    if (typeid == 5) game = 'wingo5';
    if (typeid == 10) game = 'wingo10';

    const [wingo] = await connection.query(`SELECT * FROM wingo WHERE status != 0 AND game = '${game}' ORDER BY id DESC LIMIT ${pageno}, ${pageto} `);
    const [wingoAll] = await connection.query(`SELECT * FROM wingo WHERE status != 0 AND game = '${game}' `);
    const [period] = await connection.query(`SELECT period FROM wingo WHERE status = 0 AND game = '${game}' ORDER BY id DESC LIMIT 1 `);
    if (!wingo[0]) {
        return res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
                gameslist: [],
            },
            status: false
        });
    }
    if (!pageno || !user[0] || !pageto  || !wingo[0] || !period[0]) {
        return res.status(200).json({
            message: 'Error!',
            status: true
        });
    }
    let page = Math.ceil(wingoAll.length / 10);
    return res.status(200).json({
        code: 0,
        msg: "Receive success",
        data: {
            gameslist: wingo,
        },
        period: period[0].period,
        page: page,
        status: true
    });
}

const GetMyEmerdList = async (req, res) => {
    let { typeid, pageno, pageto } = req.body;

    // if (!pageno || !pageto) {
    //     pageno = 0;
    //     pageto = 10;
    // }

    if (typeid != 1 && typeid != 3 && typeid != 5 && typeid != 10) {
        return res.status(200).json({
            message: 'Error!',
            status: true
        });
    }

    if (pageno < 0 || pageto < 0) {
        return res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
                gameslist: [],
            },
            status: false
        });
    }
    // let auth = req.cookies.authToken;
    let auth = req.user.user.phone;

    let game = '';
    if (typeid == 1) game = 'wingo';
    if (typeid == 3) game = 'wingo3';
    if (typeid == 5) game = 'wingo5';
    if (typeid == 10) game = 'wingo10';

    const [user] = await connection.query('SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE phone = ? AND veri = 1 LIMIT 1 ', [auth]);
    const [minutes_1] = await connection.query(`SELECT * FROM minutes_1 WHERE phone = ? AND game = '${game}' ORDER BY id DESC LIMIT ${Number(pageno) + ',' + Number(pageto)}`, [user[0].phone]);
    const [minutes_1All] = await connection.query(`SELECT * FROM minutes_1 WHERE phone = ? AND game = '${game}' ORDER BY id DESC `, [user[0].phone]);

    if (!minutes_1[0]) {
        return res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
                gameslist: [],
            },
            status: false
        });
    }
    if (!pageno || !pageto || !user[0] || !minutes_1[0]) {
        return res.status(200).json({
            message: 'Error!',
            status: true
        });
    }
    let page = Math.ceil(minutes_1All.length / 10);

    let datas = minutes_1.map((data) => {
        let { id, phone, code, invite, level, game, ...others } = data;
        return others;
    });

    return res.status(200).json({
        code: 0,
        msg: "Receive success",
        data: {
            gameslist: datas,
        },
        page: page,
        status: true
    });
}

const addWinGo = async (game) => {
    try {
        let join = '';
        if (game == 1) join = 'wingo';
        if (game == 3) join = 'wingo3';
        if (game == 5) join = 'wingo5';
        if (game == 10) join = 'wingo10';

        const [winGoNow] = await connection.query(`SELECT period FROM wingo WHERE status = 0 AND game = "${join}" ORDER BY id DESC LIMIT 1 `);
        const [setting] = await connection.query('SELECT * FROM `admin` ');
        let period = winGoNow[0].period; 
        let amount = Math.floor(Math.random() * 10);
        const [minPlayers] = await connection.query(`SELECT * FROM minutes_1 WHERE status = 0 AND game = "${join}"`);
        if (minPlayers.length >= 2) {
            const betColumns = [
                // red_small 
                { name: 'red_0', bets: ['0', 't', 'd', 'n'] },
                { name: 'red_2', bets: ['2', 'd', 'n'] },
                { name: 'red_4', bets: ['4', 'd', 'n'] },
                // green small 
                { name: 'green_1', bets: ['1', 'x', 'n'] },
                { name: 'green_3', bets: ['3', 'x', 'n'] },
                // green big 
                { name: 'green_5', bets: ['5', 'x', 't', 'l'] },
                { name: 'green_7', bets: ['7', 'x', 'l'] },
                { name: 'green_9', bets: ['9', 'x', 'l'] },
                // red big 
                { name: 'red_6', bets: ['6', 'd', 'l'] },
                { name: 'red_8', bets: ['8', 'd', 'l'] }
            ];

            const totalMoneyPromises = betColumns.map(async column => {
                const [result] = await connection.query(`
                SELECT SUM(money) AS total_money
                FROM minutes_1
                WHERE game = "${join}" AND status = 0 AND bet IN (${column.bets.map(bet => `"${bet}"`).join(',')})
            `);
                return { name: column.name, total_money: result[0].total_money ? parseInt(result[0].total_money) : 0 };
            });
            console.log("1 minute row :" + totalMoneyPromises);
            
            const categories = await Promise.all(totalMoneyPromises);
            console.log("1 minute row category:" + categories);
            let smallestCategory = categories.reduce((smallest, category) =>
                (smallest === null || category.total_money < smallest.total_money) ? category : smallest
                , null);
            const colorBets = {
                red_6: [6],
                red_8: [8],
                red_2: [2], //0 removed 
                red_4: [4],
                green_3: [3],
                green_7: [7], //5 removed
                green_9: [9], //
                green_1: [1],
                green_5: [5],
                red_0: [0],
            };

            const betsForCategory = colorBets[smallestCategory.name] || [];
            const availableBets = betsForCategory.filter(bet =>
                !categories.find(category => category.name === smallestCategory.name && category.total_money < smallestCategory.total_money)
            );
            let lowestBet;
            if (availableBets.length > 0) {
                lowestBet = availableBets[0];
            } else {
                lowestBet = betsForCategory.reduce((lowest, bet) =>
                    (bet < lowest) ? bet : lowest
                );
            }

            amount = lowestBet;
        } else if (minPlayers.length === 1 && parseFloat(minPlayers[0].money) >= 20) {
            const betColumns = [
                { name: 'red_small', bets: ['0', '2', '4', 'd', 'n'] },
                { name: 'red_big', bets: ['6', '8', 'd', 'l'] },
                { name: 'green_big', bets: ['5', '7', '9', 'x', 'l'] },
                { name: 'green_small', bets: ['1', '3', 'x', 'n'] },
                { name: 'violet_small', bets: ['0', 't', 'n'] },
                { name: 'violet_big', bets: ['5', 't', 'l'] }
            ];

            const categories = await Promise.all(betColumns.map(async column => {
                const [result] = await connection.query(`
                    SELECT SUM(money) AS total_money
                    FROM minutes_1
                    WHERE game = "${join}" AND status = 0 AND bet IN (${column.bets.map(bet => `"${bet}"`).join(',')})
                `);
                return { name: column.name, total_money: parseInt(result[0]?.total_money) || 0 };
            }));

            const colorBets = {
                red_big: [6, 8],
                red_small: [2, 4], //0 removed 
                green_big: [7, 9], //5 removed
                green_small: [1, 3],
                violet_big: [5],
                violet_small: [0],
            };

            const smallestCategory = categories.reduce((smallest, category) =>
                (!smallest || category.total_money < smallest.total_money) ? category : smallest
            );

            const betsForCategory = colorBets[smallestCategory.name] || [];
            const availableBets = betsForCategory.filter(bet =>
                !categories.find(category => category.name === smallestCategory.name && category.total_money < smallestCategory.total_money)
            );

            const lowestBet = availableBets.length > 0 ? availableBets[0] : Math.min(...betsForCategory);
            amount = lowestBet;
        }

        // xanh đỏ tím
        let timeNow = Date.now();

        let nextResult = '';
        if (game == 1) nextResult = setting[0].wingo1;
        if (game == 3) nextResult = setting[0].wingo3;
        if (game == 5) nextResult = setting[0].wingo5;
        if (game == 10) nextResult = setting[0].wingo10;

        let newArr = '';
        if (nextResult == '-1') {
            await connection.execute(`UPDATE wingo SET amount = ?,status = ? WHERE period = ? AND game = "${join}"`, [amount, 1, period]);
            newArr = '-1';
        } else {
            let result = '';
            let arr = nextResult.split('|');
            let check = arr.length;
            if (check == 1) {
                newArr = '-1';
            } else {
                for (let i = 1; i < arr.length; i++) {
                    newArr += arr[i] + '|';
                }
                newArr = newArr.slice(0, -1);
            }
            result = arr[0];
            await connection.execute(`UPDATE wingo SET amount = ?,status = ? WHERE period = ? AND game = "${join}"`, [result, 1, period]);
        }
        const sql = `INSERT INTO wingo SET 
        period = ?,
        amount = ?,
        game = ?,
        status = ?,
        time = ?`;
        await connection.execute(sql, [Number(period) + 1, 0, join, 0, timeNow]);

        if (game == 1) join = 'wingo1';
        if (game == 3) join = 'wingo3';
        if (game == 5) join = 'wingo5';
        if (game == 10) join = 'wingo10';

        await connection.execute(`UPDATE admin SET ${join} = ?`, [newArr]);
    } catch (error) {
        if (error) {
            console.log(error);
        }
    }
}



const handlingWinGo1P = async (typeid) => {

    let game = '';
    if (typeid == 1) game = 'wingo';
    if (typeid == 3) game = 'wingo3';
    if (typeid == 5) game = 'wingo5';
    if (typeid == 10) game = 'wingo10';

    const [winGoNow] = await connection.query(`SELECT * FROM wingo WHERE status != 0 AND game = '${game}' ORDER BY id DESC LIMIT 1 `);

    // update ket qua
    await connection.execute(`UPDATE minutes_1 SET result = ? WHERE status = 0 AND game = '${game}'`, [winGoNow[0].amount]);
    let result = Number(winGoNow[0].amount);
    switch (result) {
        case 0:
            await connection.execute(`UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = "${game}" AND bet != "l" AND bet != "n" AND bet != "d" AND bet != "0" AND bet != "t" `, []);
            break;
        case 1:
            await connection.execute(`UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = "${game}" AND bet != "l" AND bet != "n" AND bet != "x" AND bet != "1" `, []);
            break;
        case 2:
            await connection.execute(`UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = "${game}" AND bet != "l" AND bet != "n" AND bet != "d" AND bet != "2" `, []);
            break;
        case 3:
            await connection.execute(`UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = "${game}" AND bet != "l" AND bet != "n" AND bet != "x" AND bet != "3" `, []);
            break;
        case 4:
            await connection.execute(`UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = "${game}" AND bet != "l" AND bet != "n" AND bet != "d" AND bet != "4" `, []);
            break;
        case 5:
            await connection.execute(`UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = "${game}" AND bet != "l" AND bet != "n" AND bet != "x" AND bet != "5" AND bet != "t" `, []);
            break;
        case 6:
            await connection.execute(`UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = "${game}" AND bet != "l" AND bet != "n" AND bet != "d" AND bet != "6" `, []);
            break;
        case 7:
            await connection.execute(`UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = "${game}" AND bet != "l" AND bet != "n" AND bet != "x" AND bet != "7" `, []);
            break;
        case 8:
            await connection.execute(`UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = "${game}" AND bet != "l" AND bet != "n" AND bet != "d" AND bet != "8" `, []);
            break;
        case 9:
            await connection.execute(`UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = "${game}" AND bet != "l" AND bet != "n" AND bet != "x" AND bet != "9" `, []);
            break;
        default:
            break;
    }

    if (result < 5) {
        await connection.execute(`UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = "${game}" AND bet = "l" `, []);
    } else {
        await connection.execute(`UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = "${game}" AND bet = "n" `, []);
    }

    // lấy ra danh sách đặt cược chưa xử lý
    const [order] = await connection.execute(`SELECT * FROM minutes_1 WHERE status = 0 AND game = '${game}' `);
    for (let i = 0; i < order.length; i++) {
        let orders = order[i];
        let result = orders.result;
        let bet = orders.bet;
        let total = orders.money;
        let id = orders.id;
        let phone = orders.phone;
        var nhan_duoc = 0;
        // x - green
        // t - Violet
        // d - red 

        // Sirf 1-4 aur 6-9 tk hi *9 aana chahiye
        // Aur 0 aur 5 pe *4.5
        // Aur red aur green pe *2
        // 1,2,3,4,6,7,8,9


        if (bet == 'l' || bet == 'n') {
            nhan_duoc = total * 2;
        } else {
            if (result == 0 || result == 5) {
                if (bet == 'd' || bet == 'x') {
                    nhan_duoc = total * 1.5;
                } else if (bet == 't') {
                    nhan_duoc = total * 4.5;
                } else if (bet == "0" || bet == "5") {
                    nhan_duoc = total * 4.5;
                }
            } else {
                if (result == 1 && bet == "1") {
                    nhan_duoc = total * 9;
                } else {
                    if (result == 1 && bet == 'x') {
                        nhan_duoc = total * 2;
                    }
                }
                if (result == 2 && bet == "2") {
                    nhan_duoc = total * 9;
                } else {
                    if (result == 2 && bet == 'd') {
                        nhan_duoc = total * 2;
                    }
                }
                if (result == 3 && bet == "3") {
                    nhan_duoc = total * 9;
                } else {
                    if (result == 3 && bet == 'x') {
                        nhan_duoc = total * 2;
                    }
                }
                if (result == 4 && bet == "4") {
                    nhan_duoc = total * 9;
                } else {
                    if (result == 4 && bet == 'd') {
                        nhan_duoc = total * 2;
                    }
                }
                if (result == 6 && bet == "6") {
                    nhan_duoc = total * 9;
                } else {
                    if (result == 6 && bet == 'd') {
                        nhan_duoc = total * 2;
                    }
                }
                if (result == 7 && bet == "7") {
                    nhan_duoc = total * 9;
                } else {
                    if (result == 7 && bet == 'x') {
                        nhan_duoc = total * 2;
                    }
                }
                if (result == 8 && bet == "8") {
                    nhan_duoc = total * 9;
                } else {
                    if (result == 8 && bet == 'd') {
                        nhan_duoc = total * 2;
                    }
                }
                if (result == 9 && bet == "9") {
                    nhan_duoc = total * 9;
                } else {
                    if (result == 9 && bet == 'x') {
                        nhan_duoc = total * 2;
                    }
                }
            }
        }
        const [users] = await connection.execute('SELECT `money` FROM `users` WHERE `phone` = ?', [phone]);
        let totals = parseFloat(users[0].money) + parseFloat(nhan_duoc);
        await connection.execute('UPDATE `minutes_1` SET `get` = ?, `status` = 1 WHERE `id` = ? ', [parseFloat(nhan_duoc), id]);
        await connection.execute('UPDATE `withdrawl_money` SET `amount` = `amount` + ? WHERE `phone` = ? ', [parseFloat(nhan_duoc), phone]);
        const sql = 'UPDATE `users` SET `money` = ? WHERE `phone` = ? ';
        await connection.execute(sql, [totals, phone]);
    }
}


module.exports = {
    betWinGo,
    listOrderOld,
    GetMyEmerdList,
    handlingWinGo1P,
    addWinGo,
}