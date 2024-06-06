import Header from '../Home/Header'
import Footer from '../Home/Footer'
import '../../assets/home/css/index.css'
import '../../assets/home/css/login.css'
import '../../assets/home/css/wingo.css'
import '../../assets/home/css/5d.css'
import WinGoInfo from "../WinGo/WinGoInfo"
import Time5D from "./Time5D"
import GameContent from './GameContent'
import List_5D from './List_5D'
import Join_5D from './Join_5D'

function Main_5D() {
  return (
    <>
         <div id="app">
		<div data-v-432e6ed0="" className="home mian game" id="application">
            <Header />
            <WinGoInfo />
            <div data-v-a9660e98="" className="game-betting">
                <div data-v-a9660e98="" className="tab">
                    <Time5D />
                </div>
            </div>
            <GameContent />
            <div data-v-a9660e98="" className="game-list p-b-20 pb-4 mt-4 px-2">
           <List_5D />
           <Join_5D />
            </div>
            <Footer />
        </div>
    </div>
    </>
  )
}

export default Main_5D
