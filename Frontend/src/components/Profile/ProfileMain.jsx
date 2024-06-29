
import ProfileDetail from "./ProfileDetail"
import '../../assets/home/css/index.css'
import '../../assets/home/css/login.css'
import '../../assets/admin/css/admin.css'
import Header from "../Home/Header"
import Footer from "../Home/Footer"
import ProfileWallet from "./ProfileWallet"
import ProfileList from "./ProfileList"


function ProfileMain() {
  return (
    <>
          <div data-v-8cd483ca="" className="home mian game" >
            <div data-v-8cd483ca="" className="menu-box" style={{background: "#22275B", paddingBottom: "70px"}}>
              <Header />
              <ProfileDetail /> 
              <ProfileWallet />
              <ProfileList />
              <Footer />
            </div>
          </div>
        
    </>
  )
}

export default ProfileMain
