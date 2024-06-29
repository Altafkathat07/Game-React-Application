import '../../assets/home/css/index.css'
import '../../assets/home/css/login.css'
import '../../assets/home/css/recharge.css'
import '../../assets/admin/css/admin.css'
import Header from "../Home/Header"
import Footer from "../Home/Footer"
import RechargeContent from './RechargeContent'

function RechargeMain() {
  return (
    <>
      <div data-v-8cd483ca="" className="home mian game" style={{background:"#fff"}}>
            <div data-v-8cd483ca="" className="menu-box">
              <Header />
              <RechargeContent />
              <Footer />
            </div>
          </div>
    </>
  )
}

export default RechargeMain
