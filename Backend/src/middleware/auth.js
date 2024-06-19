import jwt from 'jsonwebtoken';

const middlewareController = async(req, res, next) => {
    const auth = req.cookies.authToken;
    console.log("this is middleware token :" + auth);

    if (auth) {
        const token = auth;
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(401).json({
                    message: 'Failed',
                    status: false,
                });
            }
            req.user = user;
            console.log("this is user : " + user);
            next(); 
        });
    } else {
        return res.status(401).json({
            message: 'Failed',
            status: false,
        }); 
    }
};

export default middlewareController;