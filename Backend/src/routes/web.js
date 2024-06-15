import express from 'express';
import accountController from '../controllers/accountController';
import adminController from '../controllers/adminController';
import wingoController from '../controllers/wingoController';
import userController from '../controllers/userController';
import homeController from '../controllers/homeController';
import middlewareController from '../middleware/auth';
let router = express.Router();

const initWebRouter = (app) => {

    router.post('/api/webapi/register', accountController.register);
    // router.post('/api/webapi/register/otp', accountController.otpVerify);
    router.post('/api/webapi/login', accountController.login);
    router.post('/api/webapi/GetUserInfo', userController.userInfo);

    router.get('/api/webapi/recharge-list', userController.listRecharge);
    router.get('/api/webapi/withdraw-list', userController.listWithdraw);

    router.post('/api/webapi/promotion', userController.promotion);
    router.post('/api/webapi/activity_check', userController.activityCheck); 


    router.get('/api/webapi/admin/privacy-fetching',  adminController.termsFetching);
    router.get('/api/webapi/admin/notification-fetching', adminController.noticeFetching);
    router.get('/api/webapi/admin/user-details', accountController.UserDetails);

    router.get('/api/webapi/admin/recharge-detail', adminController.rechargeDetails);
    router.post('/api/webapi/admin/recharge-confirm/:id/:money', adminController.rechargeConfirm);
    router.post('/api/webapi/admin/recharge-cancel/:id', adminController.rechargeCancel);
    router.get('/api/webapi/admin/recharge-approve', adminController.rechargeApproveDetail);
    
    router.get('/api/webapi/admin/withdraw-detail', adminController.withdraDetails);
    router.post('/api/webapi/admin/withdraw-confirm/:id', adminController.withdrawConfirm);
    router.post('/api/webapi/admin/withdraw-cancel/:id/:money', adminController.withdrawCancel);
    router.get('/api/webapi/admin/withdraw-approve', adminController.withdrawApproveDetail);
    
    router.get('/api/webapi/admin/bonus-details', adminController.bonusDetails);

    router.post('/api/webapi/admin/user-delete/:id', adminController.DeleteUser);
    router.post('/api/webapi/admin/update-user-status/:id', adminController.UserStatus);

    router.post('/api/webapi/admin/terms', adminController.termsAndCondition);
    router.post('/api/webapi/admin/notice',   adminController.notice);
    router.post('/api/webapi/admin/pop-up',   adminController.Popup);
    router.post('/api/webapi/admin/upload-banner', adminController.uploadBanner);
    router.post('/api/webapi/admin/createBonus', adminController.createBonus); 

    router.post('/api/webapi/wingo/bet',  wingoController.betWinGo); 
    router.post('/api/webapi/GetNoaverageEmerdList', wingoController.listOrderOld);
    router.post('/api/webapi/GetMyEmerdList', wingoController.GetMyEmerdList);

    router.post('/api/webapi/recharge', userController.recharge);

    router.post('/api/webapi/add-bank' , userController.addBank);
    router.post('/api/webapi/user-bank-info' , userController.UserBankInfo);
    router.post('/api/webapi/withdrawal', userController.withdrawal); 


    router.post('/api/webapi/salary_record', homeController.getSalaryRecord); 
    
    router.post('/api/webapi/claim-code', userController.useRedenvelope); 


   
   
    return app.use('/', router); 
}

module.exports = {
    initWebRouter,
};