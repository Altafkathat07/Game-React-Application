import express from 'express';
import accountController from '../controllers/accountController';
import adminController from '../controllers/adminController';
import wingoController from '../controllers/wingoController';
import userController from '../controllers/userController';
import middlewareController from '../middleware/auth';
let router = express.Router();

const initWebRouter = (app) => {

    router.post('/api/webapi/register', accountController.register);
    // router.post('/api/webapi/register/otp', accountController.otpVerify);
    router.post('/api/webapi/login', accountController.login);
    router.get('/api/webapi/GetUserInfo', middlewareController, userController.userInfo);

    router.get('/api/webapi/admin/privacy-fetching', middlewareController, adminController.termsFetching);
    router.get('/api/webapi/admin/notification-fetching',middlewareController, adminController.noticeFetching);
    router.get('/api/webapi/admin/user-details',middlewareController, accountController.UserDetails);

    router.get('/api/webapi/admin/recharge-detail', adminController.rechargeDetails);
    router.post('/api/webapi/admin/recharge-confirm/:id/:money', adminController.rechargeConfirm);
    router.post('/api/webapi/admin/recharge-cancel/:id', adminController.rechargeCancel);
    router.get('/api/webapi/admin/recharge-approve', adminController.rechargeApproveDetail);
    
    router.get('/api/webapi/admin/withdraw-detail', adminController.withdraDetails);
    router.get('/api/webapi/admin/withdraw-approve', adminController.withdrawApproveDetail);
    
    router.post('/api/webapi/admin/user-delete/:id',middlewareController, adminController.DeleteUser);
    router.post('/api/webapi/admin/update-user-status/:id',middlewareController, adminController.UserStatus);

    router.post('/api/webapi/admin/terms',middlewareController, adminController.termsAndCondition);
    router.post('/api/webapi/admin/notice',middlewareController,   adminController.notice);
    router.post('/api/webapi/admin/pop-up',middlewareController,   adminController.Popup);
    router.post('/api/webapi/admin/upload-banner',middlewareController, adminController.uploadBanner);

    router.post('/api/webapi/wingo/bet',middlewareController, middlewareController, wingoController.betWinGo); 
    router.post('/api/webapi/GetNoaverageEmerdList',middlewareController, wingoController.listOrderOld);
    router.post('/api/webapi/GetMyEmerdList',middlewareController, wingoController.GetMyEmerdList);

    router.post('/api/webapi/recharge', userController.recharge);

    router.post('/api/webapi/add-bank' , userController.addBank);
    router.post('/api/webapi/user-bank-info' , userController.UserBankInfo);
    router.post('/api/webapi/withdrawal', userController.withdrawal); 



   
   
    return app.use('/', router); 
}

module.exports = {
    initWebRouter,
};