import express from 'express';
import accountController from '../controllers/accountController';
import adminController from '../controllers/adminController';
let router = express.Router();

const initWebRouter = (app) => {

    router.post('/api/webapi/register', accountController.register);
    router.post('/api/webapi/login', accountController.login);


    router.post('/api/webapi/admin/terms', adminController.termsAndCondition);
    router.post('/api/webapi/admin/uploadbanner', adminController.uploadBanner);


   
   
    return app.use('/', router); 
}

module.exports = {
    initWebRouter,
};