import connection from '../config/connectDB';

const middlewareController = async(req, res, next) => {
    const auth = req.cookies.auth;
    if (!auth) return res.redirect("http://localhost:5173/login");
    try {
        const [rows] = await connection.execute('SELECT `token`, `status` FROM `users` WHERE `token` = ? AND `veri` = 1', [auth]);
        if(!rows) {
            res.clearCookie("auth");
            return res.end();
        };
        if (auth == rows[0].token && rows[0].status == '1') {
            next();
        } else {
            return res.redirect("http://localhost:5173/login");
        }
    } catch (error) {
        return res.redirect("http://localhost:5173/login");
    }
}

export default middlewareController;