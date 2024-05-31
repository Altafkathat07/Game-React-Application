import Header from "../Home/Header"
import Footer from "../Home/Footer"
import '../../assets/home/css/index.css'
import UserDetail from "./UserDetail"

function UserProfileMain() {
  return (
    <>
     <div data-v-8cd483ca="" className="home mian game">
            <div data-v-8cd483ca="" className="menu-box">
              <Header />
              <UserDetail />
              <Footer />
            </div>
          </div>
      
    </>
  )
}

export default UserProfileMain
