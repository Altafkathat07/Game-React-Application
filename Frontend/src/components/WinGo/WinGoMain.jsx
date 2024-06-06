import Footer from "../Home/Footer"
import Header from "../Home/Header"
import '../../assets/home/css/index.css'
import '../../assets/home/css/login.css'
import '../../assets/home/css/wingo.css'
import WinGoInfo from "./WinGoInfo"
import WingoTime from "./WingoTime"
import WinGoPeriod from "./WinGoPeriod"
import WinGoList from "./WinGoList"
import WingoJoin from "./WingoJoin"

function WinGoMain() {
  return (
    <>
       <div id="app">
		<div data-v-432e6ed0="" className="home mian game" id="application">
            <Header />
            <WinGoInfo />
            <div data-v-a9660e98="" className="game-betting">
                <div data-v-a9660e98="" className="tab">
                    <WingoTime />
                </div>
            </div>
            <WinGoPeriod />
            <div data-v-a9660e98="" className="game-list p-b-20 pb-4">
            <WinGoList/>
            <WingoJoin />
            </div>
            <Footer />
        </div>
    </div>
    </>
  )
}

export default WinGoMain
