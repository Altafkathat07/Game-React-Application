import express from 'express';
import accountController from '../controllers/accountController';
let router = express.Router();

const initWebRouter = (app) => {

    router.post('/api/webapi/register', accountController.register);
    router.post('/api/webapi/login', accountController.login);
   
   
    return app.use('/', router); 
}

module.exports = {
    initWebRouter,
};