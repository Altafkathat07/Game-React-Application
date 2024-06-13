import connection from '../config/connectDB';

const middlewareController = async(req, res, next) => {
    const authToken = req.cookies.authToken;

    if (!authToken) {
        return res.redirect("http://localhost:5173/login");
    }

    try {
        const [rows] = await connection.execute('SELECT `token`, `status` FROM `users` WHERE `token` = ? AND `veri` = 1', [authToken]);

        if (!rows || rows.length === 0) {
            res.clearCookie("authToken");
            return res.redirect("http://localhost:5173/login");
        }

        if (authToken === rows[0].token && rows[0].status === '1') {
            next();
        } else {
            res.clearCookie("authToken");
            return res.redirect("http://localhost:5173/login");
        }
    } catch (error) {
        console.error('Error verifying token:', error);
        res.clearCookie("authToken");
        return res.redirect("http://localhost:5173/login");
    }
};

export default middlewareController;