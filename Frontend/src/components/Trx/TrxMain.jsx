import Footer from "../Home/Footer"
import Header from "../Home/Header"
import '../../assets/home/css/index.css'
import '../../assets/home/css/login.css'
import '../../assets/home/css/wingo.css'
import WinGoInfo from "../WinGo/WinGoInfo"
import TrxTime from "./TrxTime"
import TrxPeriod from "./TrxPeriod"
import TrxList from "./TrxList"
import TrxJoin from "./TrxJoin"

function TrxMain() {
  return (
    <>
         <div id="app">
		<div data-v-432e6ed0="" className="home mian game" id="application">
            <Header />
            <WinGoInfo />
            <div data-v-a9660e98="" className="game-betting">
                <div data-v-a9660e98="" className="tab">
                    <TrxTime />
                </div>
            </div>
            <TrxPeriod />
            <div data-v-a9660e98="" className="game-list p-b-20 pb-4">
            <TrxList />
            <TrxJoin />
            </div>
            <Footer />
        </div>
    </div>
    </>
  )
}

export default TrxMain
