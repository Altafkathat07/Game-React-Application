import Main from "./Home/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginMain from "./Login/LoginMain";
import RegisterMain from "./Register/RegisterMain";
import ForgotMain from "./ForgotPass/ForgotMain";


function AllPages() {
  return (
    <>
   
    <BrowserRouter >
    
    <Routes>
        <Route path="/"  exact element={ <Main />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/register" element={<RegisterMain />} />
        <Route path="/forgot" element={<ForgotMain />} />
        
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default AllPages
