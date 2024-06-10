import '../../assets/home/css/index.css'
import '../../assets/home/css/login.css'
import '../../assets/admin/css/admin.css'
import '../../assets/home/css/withdraw.css'
import Header from "../Home/Header"
import Footer from "../Home/Footer"
import WalletProfile from './WalletProfile'


function WalletProfileMain() {
  return (
    <>
            <div data-v-8cd483ca="" className="home mian game" style={{background:"#fca552"}}>
            <div data-v-8cd483ca="" className="menu-box">
              <Header />
              <WalletProfile />
              <Footer />
            </div>
          </div>
    </>
  )
}

export default WalletProfileMain
