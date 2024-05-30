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
        <Route path="/admin" element={<IndexMain />} />
        <Route path="/admin/uimanagemnt" element={<UiMain />} />
        <Route path="/admin/user-details" element={<UserMain />} />
        <Route path="/privacy-agreement" element={<PrivacyMain />} />
        
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default AllPages
