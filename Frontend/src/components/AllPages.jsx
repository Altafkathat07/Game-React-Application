import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthContext from './Auth/AuthContext';
import Main from "./Home/Main";
import LoginMain from "./Login/LoginMain";
import RegisterMain from "./Register/RegisterMain";
import ForgotMain from "./ForgotPass/ForgotMain";
import ProfileMain from "./Profile/ProfileMain";
import IndexMain from "./Admin/IndexPage/AdminMain";
import UiMain from "./Admin/UiManagment/UiMain";
import PrivacyMain from "./PrivacyAgreement/PrivacyMain";
import UserMain from "./Admin/UserDetails/UserMain";
import SettingMain from "./Admin/Setting/SettingMain";
import UserProfileMain from "./UserProfile/UserProfileMain";
import BankMain from "./UserBankDetail/BankMain";
import WalletMain from "./Wallet/WalletMain";
import PromotionMain from "./Promotion/PromotionMain";
import MyTeamPage from "./Promotion/MyTeamPage";
import HistoryPage from "./Promotion/HistoryPage";
import TutorialPage from "./Promotion/TutorialPage";
import ActivityPage from "./Activity/ActivityPage";
import RulePage from "./Activity/RulePage";
import ResetPasswordMain from "./ResetPassword/ResetPasswordMain";
import RedeemMain from "./RedeemCode/RedeemMain";
import GuideMain from "./BegginerGuide/GuideMain";
import AboutMain from "./AboutPage/AboutMain";
import RiskMain from "./RiskAgreement/RiskMain";
import SupportMain from "./SupportPage/SupportMain";
import SalaryRecord from "./SalaryRecord/SalaryRecord";
import WinGoMain from "./WinGo/WinGoMain";
import Main_5D from "./5D/Main_5D";
import Main_K3 from "./K3/Main_K3";
import TrxMain from "./Trx/TrxMain";
import WalletProfileMain from "./Wallet/WalletProfileMain";
import RechargeMain from "./Recharge/RechargeMain";
import BrowseRecharge from "./Admin/Recharge/BrowseRecharge";
import RechargeApprove from "./Admin/RechargeApprove/RechargeApprove";
import UserBank from "./Wallet/UserBank";
import BrowseWithdrawa from "./Admin/Withdrawal/BrowseWithdrawa";
import WithdrawApprove from "./Admin/WithdrawApprove/WithdrawApprove";
import GiftCodeMain from "./Admin/CreateGiftCode/GiftCodeMain";
import RechargeHistory from "./Recharge/RechargeHistory";
import WithdrawalHistrory from "./Wallet/WithdrawalHistrory";

function AllPages() {
  const { isAuthenticated, loadingUserInfo } = useContext(AuthContext);
  console.log(isAuthenticated);

  if (loadingUserInfo) {
    return <p>Loading user info...</p>;
  }

  const isAuth = isAuthenticated ?? false;

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" exact element={<Main />} />
          <Route path="/login" element={<LoginMain />} />
          <Route path="/register" element={<RegisterMain />} />

          {/* Private Routes - Require Authentication */}
          {isAuth && (
            <>
              <Route path="/main" element={<ProfileMain />} />
              <Route path="/forgot" element={<ForgotMain />} />
              <Route path="/promotion" element={<PromotionMain />} />
              <Route path="/promotion/myteam" element={<MyTeamPage />} />
              <Route path="/promotion/history" element={<HistoryPage />} />
              <Route path="/promotion/tutorial" element={<TutorialPage />} />
              <Route path="/about-us" element={<AboutMain />} />
              <Route path="/privacy-agreement" element={<PrivacyMain />} />
              <Route path="/risk-disclosure-agreement" element={<RiskMain />} />
              <Route path="/support" element={<SupportMain />} />
              <Route path="/beginner-guide" element={<GuideMain />} />
              <Route path="/wallet" element={<WalletMain />} />
              <Route path="/withdraw" element={<WalletProfileMain />} />
              <Route path="/withdraw/history" element={<WithdrawalHistrory />} />
              <Route path="/recharge" element={<RechargeMain />} />
              <Route path="/recharge/history" element={<RechargeHistory />} />
              <Route path="/profile" element={<UserProfileMain />} />
              <Route path="/activity" element={<ActivityPage />} />
              <Route path="/activity/rule" element={<RulePage />} />
              <Route path="/profile/bank-details" element={<BankMain />} />
              <Route path="/wallet/user-bank" element={<UserBank />} />
              <Route path="/admin" element={<IndexMain />} />
              <Route path="/reset-password" element={<ResetPasswordMain />} />
              <Route path="/redeem-code" element={<RedeemMain />} />
              <Route path="/admin/uimanagemnt" element={<UiMain />} />
              <Route path="/admin/user-details" element={<UserMain />} />
              <Route path="/admin/recharge" element={<BrowseRecharge />} />
              <Route path="/admin/withdraw" element={<BrowseWithdrawa />} />
              <Route path="/admin/recharge-approve" element={<RechargeApprove />} />
              <Route path="/admin/withdraw-approve" element={<WithdrawApprove />} />
              <Route path="/admin/settings" element={<SettingMain />} />
              <Route path="/admin/giftcode" element={<GiftCodeMain />} />
              <Route path="/salary-record" element={<SalaryRecord />} />
              <Route path="/wingo" element={<WinGoMain />} />
              <Route path="/5d" element={<Main_5D />} />
              <Route path="/k3" element={<Main_K3 />} />
              <Route path="/trx" element={<TrxMain />} />
            </>
          )}

          {/* Redirect to login if not authenticated */}
          {!isAuth && (
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AllPages;
