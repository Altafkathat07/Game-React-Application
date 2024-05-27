import Banner from "./Banner"
import Footer from "./Footer"
import GameSection from "./GameSection"
import Header from "./Header"
import HomeCom from "./HomeCom"
import NoticeBar from "./NoticeBar"
import '../../App.css'
import '../../assets/home/css/login.css'

function Main() {
  return (
    <div id="app">
		<div data-v-432e6ed0="" className="home mian game">
            <Header />
            <Banner />
            <NoticeBar />
            <HomeCom />
            <GameSection />
            <Footer />
        </div>
    </div>
  )
}

export default Main
