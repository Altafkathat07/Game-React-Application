import express from "express";
import accountController from "../controllers/accountController";
import adminController from "../controllers/adminController";
import wingoController from "../controllers/wingoController";
import userController from "../controllers/userController";
import homeController from "../controllers/homeController";
import middlewareController from "../middleware/auth";
let router = express.Router();

const initWebRouter = (app) => {
  router.post("/api/webapi/register", accountController.register);
  // router.post('/api/webapi/register/otp', accountController.otpVerify);
  router.post("/api/webapi/login", accountController.login);
  router.post("/api/webapi/logout", middlewareController, accountController.Logout);
  router.post("/api/webapi/reset-password", middlewareController, userController.ResetPassword);
  router.post(
    "/api/webapi/GetUserInfo",
    middlewareController,
    userController.userInfo
  );  
  router.post(
    "/api/webapi/total_ref",
    // middlewareController,
    userController.TotalReferrals
  );  
  router.get(
    "/api/webapi/total_users",
    // middlewareController,
    userController.TotalUser
  );

  router.get(
    "/api/webapi/recharge-list",
    middlewareController,
    userController.listRecharge
  );
  router.get(
    "/api/webapi/withdraw-list",
    middlewareController,
    userController.listWithdraw
  );

  router.post(
    "/api/webapi/promotion",
    middlewareController,
    userController.promotion
  );
  router.post(
    "/api/webapi/activity_check",
    middlewareController,
    userController.activityCheck
  );

  router.get(
    "/api/webapi/admin/privacy-fetching",
    middlewareController,
    adminController.termsFetching
  );
  router.get(
    "/api/webapi/admin/notification-fetching",
    middlewareController,
    adminController.noticeFetching
  );
  router.get(
    "/api/webapi/admin/user-details",
    middlewareController,
    accountController.UserDetails
  );

  router.get(
    "/api/webapi/admin/recharge-detail",
    middlewareController,
    adminController.rechargeDetails
  );
  router.post(
    "/api/webapi/admin/recharge-confirm/:id/:money",
    middlewareController,
    adminController.rechargeConfirm
  );
  router.post(
    "/api/webapi/admin/recharge-cancel/:id",
    middlewareController,
    adminController.rechargeCancel
  );
  router.get(
    "/api/webapi/admin/recharge-approve",
    middlewareController,
    adminController.rechargeApproveDetail
  );

  router.get(
    "/api/webapi/admin/withdraw-detail",
    middlewareController,
    adminController.withdraDetails
  );
  router.post(
    "/api/webapi/admin/withdraw-confirm/:id",
    middlewareController,
    adminController.withdrawConfirm
  );
  router.post(
    "/api/webapi/admin/withdraw-cancel/:id/:money",
    middlewareController,
    adminController.withdrawCancel
  );
  router.get(
    "/api/webapi/admin/withdraw-approve",
    middlewareController,
    adminController.withdrawApproveDetail
  );

  router.get(
    "/api/webapi/admin/bonus-details",
    middlewareController,
    adminController.bonusDetails
  );

  router.delete(
    "/api/webapi/admin/user-delete/:id",
    middlewareController,
    adminController.DeleteUser
  );
  router.post(
    "/api/webapi/admin/update-user-status/:id",
    middlewareController,
    adminController.UserStatus
  );

  router.post(
    "/api/webapi/admin/terms",
    middlewareController,
    adminController.termsAndCondition
  );
  router.post(
    "/api/webapi/admin/notice",
    middlewareController,
    adminController.notice
  );
  router.post(
    "/api/webapi/admin/pop-up",
    middlewareController,
    adminController.Popup
  );
  router.post(
    "/api/webapi/admin/upload-banner",
    middlewareController,
    adminController.uploadBanner
  );
  router.post(
    "/api/webapi/admin/createBonus",
    middlewareController,
    adminController.createBonus
  );
  router.post(
    "/api/webapi/admin/setting/bonus",
    middlewareController,
    adminController.Bonus
  );
  // router.post('/api/webapi/admin/setting/welcome_bonus', adminController.RegistrationBonus);
  // router.post('/api/webapi/admin/setting/first_recharge_bonus', adminController.FirstRechargeBonus);
  // router.post('/api/webapi/admin/setting/invite_bonus', adminController.InviteBonus);

  router.post(
    "/api/webapi/wingo/bet",
    middlewareController,
    wingoController.betWinGo
  );
  router.post(
    "/api/webapi/GetNoaverageEmerdList",
    middlewareController,
    wingoController.listOrderOld
  );
  router.post(
    "/api/webapi/GetMyEmerdList",
    middlewareController,
    wingoController.GetMyEmerdList
  );  
  // router.post(
  //   "/api/webapi/wingo/bet",
  //   // middlewareController,
  //   wingoController.addWinGo
  // );

  router.post(
    "/api/webapi/recharge",
    middlewareController,
    userController.recharge
  );

  router.post(
    "/api/webapi/add-bank",
    middlewareController,
    userController.addBank
  );
  router.post(
    "/api/webapi/user-bank-info",
    middlewareController,
    userController.UserBankInfo
  ); 
  router.post(
    "/api/webapi/admin/update-levels",
    middlewareController,
    adminController.updateLevel
  );  
  router.get(
    "/api/webapi/admin/levels-data",
    // middlewareController,
    adminController.getLevelInfo
  );
  router.post(
    "/api/webapi/withdrawal",
    middlewareController,
    userController.withdrawal
  );

  router.post(
    "/api/webapi/salary_record",
    middlewareController,
    homeController.getSalaryRecord
  ); 
  router.get(
    "/api/webapi/level_record",
    homeController.LevelDetails
  );

  router.post(
    "/api/webapi/claim-code",
    middlewareController,
    userController.useRedenvelope
  );

  return app.use("/", router);
};

module.exports = {
  initWebRouter,
};
