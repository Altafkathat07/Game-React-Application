import "../../assets/home/css/daily.css"
import img1 from "../../assets/images/language.webp";
import img2 from "../../assets/images/noti.webp";
import img3 from "../../assets/images/service.webp";
import img4 from "../../assets/images/guide.webp";
import img5 from "../../assets/images/about.webp";
import img6 from "../../assets/images/downloadIcon.webp";

function SettingPanelSection() {
  return (
    <>
      <div data-v-0341cbde="" className="settingPanel__container panel-daman mb-3">
                <div data-v-0341cbde="" className="settingPanel__container-items">
                    <div data-v-0341cbde="" className="settingPanel__container-items__item ar-1px-b">
                       <div data-v-0341cbde="" className="settingPanel__container-items__title"><img data-v-0341cbde=""
                                src={img1} /><span data-v-0341cbde="">Language</span>
                        </div>
                        <div data-v-0341cbde="" className="settingPanel__container-items-right">
                            <h5 data-v-0341cbde="" style={{display: "none"}}></h5><span data-v-0341cbde="" style={{display: "none"}}>English</span><i
                                data-v-0341cbde="" className="van-badge__wrapper van-icon van-icon-arrow"
                                style={{color: "rgb(211, 211, 211)"}}></i>
                        </div> 
                    </div>
                    <div data-v-0341cbde="" className="settingPanel__container-items__item ar-1px-b">
                        <div data-v-0341cbde="" className="settingPanel__container-items__title"><img data-v-0341cbde=""
                                src={img2} /><span
                                data-v-0341cbde="">Notification</span></div>
                        <div data-v-0341cbde="" className="settingPanel__container-items-right">
                            <h5 data-v-0341cbde="" style={{display: "none"}}></h5><span data-v-0341cbde=""
                                style={{display: "none"}}>English</span><i data-v-0341cbde=""
                                className="van-badge__wrapper van-icon van-icon-arrow"
                                style={{color: "rgb(211, 211, 211)"}}></i>
                        </div>
                    </div>
                    <div data-v-0341cbde="" className="settingPanel__container-items__item ar-1px-b">
                        <div data-v-0341cbde="" className="settingPanel__container-items__title"><img data-v-0341cbde=""
                                src={img3} /><span data-v-0341cbde="">24/7 Customer
                                service</span></div>
                        <div data-v-0341cbde="" className="settingPanel__container-items-right">
                            <h5 data-v-0341cbde="" style={{display: "none"}}></h5><span data-v-0341cbde=""
                                style={{display: "none"}}>English</span><i data-v-0341cbde=""
                                className="van-badge__wrapper van-icon van-icon-arrow"
                                style={{color: "rgb(211, 211, 211)"}}></i>
                        </div>
                    </div>
                    <div data-v-0341cbde="" className="settingPanel__container-items__item ar-1px-b">
                        <div data-v-0341cbde="" className="settingPanel__container-items__title"><img data-v-0341cbde=""
                                src={img4} /><span data-v-0341cbde="">Beginners Guide</span>
                        </div>
                        <div data-v-0341cbde="" className="settingPanel__container-items-right">
                            <h5 data-v-0341cbde="" style={{display: "none"}}></h5><span data-v-0341cbde=""
                                style={{display: "none"}}>English</span><i data-v-0341cbde=""
                                className="van-badge__wrapper van-icon van-icon-arrow"
                                style={{color: "rgb(211, 211, 211)"}}></i>
                        </div>
                    </div>
                    <div data-v-0341cbde="" className="settingPanel__container-items__item ar-1px-b">
                        <div data-v-0341cbde="" className="settingPanel__container-items__title"><img data-v-0341cbde=""
                                src={img5} /><span data-v-0341cbde="">About us</span></div>
                        <div data-v-0341cbde="" className="settingPanel__container-items-right">
                            <h5 data-v-0341cbde="" style={{display: "none"}}></h5><span data-v-0341cbde=""
                                style={{display: "none"}}>English</span><i data-v-0341cbde=""
                                className="van-badge__wrapper van-icon van-icon-arrow"
                                style={{color: "rgb(211, 211, 211)"}}></i>
                        </div>
                    </div>
                    <div data-v-0341cbde="" className="settingPanel__container-items__item ar-1px-b" 
                        onClick="window.location.href='https://century100club.com/century100club.apk'"> 
                        <div data-v-0341cbde="" className="settingPanel__container-items__title">
                            <img data-v-0341cbde="" src={img6} />
                            <span data-v-0341cbde="">Download APP</span>
                        </div>
                        <div data-v-0341cbde="" className="settingPanel__container-items-right">
                            <h5 data-v-0341cbde="" style={{display: "none"}}></h5>
                            <span data-v-0341cbde="" style={{display: "none"}}>English</span>
                            <i data-v-0341cbde="" className="van-badge__wrapper van-icon van-icon-arrow" style={{color: "rgb(211, 211, 211)"}}></i>
                        </div>
                    </div>

                </div>
            </div>
    </>
  )
}

export default SettingPanelSection
