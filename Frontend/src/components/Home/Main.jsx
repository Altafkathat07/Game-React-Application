import Banner from "./Banner"
import Footer from "./Footer"
import GameSection from "./GameSection"
import Header from "./Header"
// import HomeCom from "./HomeCom"
import NoticeBar from "./NoticeBar"
import '../../assets/home/css/index.css'
import '../../assets/home/css/login.css'
import '../../assets/home/css/gamescreen.css'
import GameScreens from "./GameScreens"
import OrignalGameSection from "./OrignalGameSection"
import PlatformSection from "./PlatformSection"
import SlotGameSection from "./SlotGameSection"
import SportGameSection from "./SportGameSection"

function Main() {
  return (
    <div id="app">
		<div data-v-432e6ed0="" className="home mian game" id="application">
            <Header />
            <Banner />
            <NoticeBar />
            <GameScreens />
            {/* <HomeCom /> */}
            <GameSection />
            <OrignalGameSection />
            <PlatformSection />
            <SlotGameSection />
            <SportGameSection />
            <Footer />
        </div>
    </div>
  )
}

export default Main
