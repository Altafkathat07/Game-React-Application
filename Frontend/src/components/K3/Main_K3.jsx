
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import '../../assets/home/css/index.css'
import '../../assets/home/css/login.css'
import '../../assets/home/css/wingo.css'
import '../../assets/home/css/5d.css'
import '../../assets/home/css/k3.css'
import WinGoInfo from "../WinGo/WinGoInfo"
import GameContent from '../K3/GameContent'
import Time_K3 from './Time_K3'
import List_K3 from './List_K3'
import Join_K3 from './Join_K3'


function Main_K3() {
  return (
    <>
    <div id="app">
		<div data-v-432e6ed0="" className="home mian game" id="application">
            <Header />
            <WinGoInfo />
            <div data-v-a9660e98="" className="game-betting">
                <div data-v-a9660e98="" className="tab">
                    <Time_K3 />
                </div>
            </div>
            <GameContent />
            <div data-v-a9660e98="" className="game-list p-b-20 pb-4 mt-4 px-2">
           <List_K3 />
           <Join_K3 />
            </div>
            <Footer />
        </div>
    </div>
    </>
  )
}

export default Main_K3
