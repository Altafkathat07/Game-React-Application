const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//     host: '192.185.129.69',
//     user: 'develope_nodegame',
//     password: 'Ram@hub2',
//     database: 'develope_nodegame'
// });

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'reactgame'
});

export default connection;