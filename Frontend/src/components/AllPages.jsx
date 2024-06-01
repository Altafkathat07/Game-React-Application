import Main from "./Home/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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


function AllPages() {
  return (
    <>
   
    <BrowserRouter >
    
    <Routes>
        <Route path="/"  exact element={ <Main />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/register" element={<RegisterMain />} />
        <Route path="/forgot" element={<ForgotMain />} />
        <Route path="/main" element={<ProfileMain />} />
        <Route path="/promotion" element={<PromotionMain />} />
        <Route path="/wallet" element={<WalletMain />} />
        <Route path="/profile" element={<UserProfileMain />} />
        <Route path="/profile/bank-details" element={<BankMain />} />
        <Route path="/admin" element={<IndexMain />} />
        <Route path="/admin/uimanagemnt" element={<UiMain />} />
        <Route path="/admin/user-details" element={<UserMain />} />
        <Route path="/admin/settings" element={<SettingMain />} />
        <Route path="/privacy-agreement" element={<PrivacyMain />} />
        
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default AllPages
