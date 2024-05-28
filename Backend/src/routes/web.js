import express from 'express';
import accountController from '../controllers/accountController';
import adminController from '../controllers/adminController';
import middlewareController from '../middleware/auth';
let router = express.Router();

const initWebRouter = (app) => {

    router.post('/api/webapi/register', accountController.register);
    router.post('/api/webapi/login', accountController.login);

    router.get('/api/webapi/admin/privacy-fetching', adminController.termsFetching);
    router.get('/api/webapi/admin/notification-fetching', adminController.noticeFetching);

    router.post('/api/webapi/admin/terms', middlewareController,adminController.termsAndCondition);
    router.post('/api/webapi/admin/notice', middlewareController,adminController.notice);
    router.post('/api/webapi/admin/upload-banner', middlewareController, adminController.uploadBanner);


   
   
    return app.use('/', router); 
}

module.exports = {
    initWebRouter,
};