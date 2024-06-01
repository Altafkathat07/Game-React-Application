
import '../../assets/home/css/index.css'
import '../../assets/home/css/login.css'
import '../../assets/admin/css/admin.css'
import Header from "../Home/Header"
import Footer from "../Home/Footer"
import WalletContent from './WalletContent'

function WalletMain() {
    
  return (
    <>
      <div data-v-8cd483ca="" className="home mian game" style={{background:"#fca552"}}>
            <div data-v-8cd483ca="" className="menu-box">
              <Header />
              <WalletContent />
              <Footer />
            </div>
          </div>
    </>
  )
}

export default WalletMain
