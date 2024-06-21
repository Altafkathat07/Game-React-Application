import popular1 from "../../assets/images/popular_icon-6977543a.png"
import popular2 from "../../assets/images/popular-044514e1.png"
import lottery1 from "../../assets/images/lottery_icon-7f9c3132.png"
import lottery2 from "../../assets/images/popular-044514e1.png"
import casino1 from "../../assets/images/gamecategory_20240205194815cx69.png"
import casino2 from "../../assets/images/video-c9dce622.png"
import slot1 from "../../assets/images/slot_icon-ffc91891.png"
import slot2 from "../../assets/images/slot-bf07af03.png"
import sport1 from "../../assets/images/sport_icon-314ece36.png"
import sport2 from "../../assets/images/sport-ac79bf87.png"
import rummy1 from "../../assets/images/chess_icon-6930b633.png"
import rummy2 from "../../assets/images/chess-9c4d1dff.png"
import Fishing1 from "../../assets/images/fish_icon-bee0f4fe.png"
import Fishing2 from "../../assets/images/fish-a70df76d.png"
import original1 from "../../assets/images/flash_icon-4db9e3b4.png"
import original2 from "../../assets/images/flash-eac62fa4.png"

function GameScreens() {
  return (
    <>
      <div data-v-a900648a="" className="game-menu">
                    <div data-v-a900648a="" className="row1 space d-flex">
                        <div data-v-a900648a="" className="row-item"><img data-v-a900648a="" className="game_image2" alt=""
                                data-src={popular1}
                                src={popular1}  /><img data-v-a900648a=""
                                className="game_bg" alt="" data-src={popular2}
                                src={popular2}  />
                            <div data-v-a900648a="" className="game_text2">Popular</div>
                        </div>
                        <div data-v-a900648a="" className="row-item"><img data-v-a900648a="" className="game_image2" alt=""
                                data-src={lottery1}
                                src={lottery1}  /><img data-v-a900648a=""
                                className="game_bg" alt="" data-src={lottery2}
                                src={lottery2}  />
                            <div data-v-a900648a="" className="game_text2">Lottery</div>
                        </div>
                    </div>
                    <div data-v-a900648a="" className="row1 wrap d-flex justify-content-between flex-wrap">
                        <div data-v-a900648a="" className="row-item row-small game_video" style={{flex: "0 0 calc(33.333% - 10px)",}}><img data-v-a900648a=""
                                className="game_image" alt="" data-src={casino1}
                                src={casino1}  /><img
                                data-v-a900648a="" className="game_bg" alt="" data-src={casino2}
                                src={casino2}  />
                            <div data-v-a900648a="" className="game_text">Casino</div>
                        </div>
                        <div data-v-a900648a="" className="row-item row-small game_slot" style={{flex: "0 0 calc(33.333% - 10px)",}}><img data-v-a900648a=""
                                className="game_image" alt="" data-src={slot1}
                                src={slot1}  /><img data-v-a900648a=""
                                className="game_bg" alt="" data-src={slot2}
                                src={slot2}  />
                            <div data-v-a900648a="" className="game_text">Slots</div>
                        </div>
                        <div data-v-a900648a="" className="row-item row-small game_sport" style={{flex: "0 0 calc(33.333% - 10px)",}}><img data-v-a900648a=""
                                className="game_image" alt="" data-src={sport1}
                                src={sport1}  /><img data-v-a900648a=""
                                className="game_bg" alt="" data-src={sport2}
                                src={sport2}  />
                            <div data-v-a900648a="" className="game_text">Sports</div>
                        </div>
                        <div data-v-a900648a="" className="row-item row-small game_chess" style={{flex: "0 0 calc(33.333% - 10px)",}}><img data-v-a900648a=""
                                className="game_image" alt="" data-src={rummy1}
                                src={rummy1}  /><img data-v-a900648a=""
                                className="game_bg" alt="" data-src={rummy2}
                                src={rummy2}  />
                            <div data-v-a900648a="" className="game_text">Rummy</div>
                        </div>
                        <div data-v-a900648a="" className="row-item row-small game_fish" style={{flex: "0 0 calc(33.333% - 10px)",}}><img data-v-a900648a=""
                                className="game_image" alt="" data-src={Fishing1}
                                src={Fishing1}  /><img data-v-a900648a=""
                                className="game_bg" alt="" data-src={Fishing2}
                                src={Fishing2}  />
                            <div data-v-a900648a="" className="game_text">Fishing</div>
                        </div>
                        <div data-v-a900648a="" className="row-item row-small game_flash" style={{flex: "0 0 calc(33.333% - 10px)",}}><img data-v-a900648a=""
                                className="game_image" alt="" data-src={original1}
                                src={original1}  /><img data-v-a900648a=""
                                className="game_bg" alt="" data-src={original2}
                                src={original2}  />
                            <div data-v-a900648a="" className="game_text">Original</div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default GameScreens
