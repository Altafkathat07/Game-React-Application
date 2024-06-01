import express from 'express';
import accountController from '../controllers/accountController';
import adminController from '../controllers/adminController';
import middlewareController from '../middleware/auth';
let router = express.Router();

const initWebRouter = (app) => {

    router.post('/api/webapi/register', accountController.register);
    // router.post('/api/webapi/register/otp', accountController.otpVerify);
    router.post('/api/webapi/login', accountController.login);

    router.get('/api/webapi/admin/privacy-fetching', adminController.termsFetching);
    router.get('/api/webapi/admin/notification-fetching', adminController.noticeFetching);
    router.get('/api/webapi/admin/user-details', accountController.UserDetails);

    router.post('/api/webapi/admin/user-delete/:id', adminController.DeleteUser);
    router.post('/api/webapi/admin/update-user-status/:id', adminController.UserStatus);

    router.post('/api/webapi/admin/terms', adminController.termsAndCondition);
    router.post('/api/webapi/admin/notice',   adminController.notice);
    router.post('/api/webapi/admin/pop-up',   adminController.Popup);
    router.post('/api/webapi/admin/upload-banner', adminController.uploadBanner);


   
   
    return app.use('/', router); 
}

module.exports = {
    initWebRouter,
};