import "../../assets/home/css/gamescreen.css"
import img1 from "../../assets/images/vendorlogo_20231026192554xfnm.png"

function RummyGameSection() {
  return (
    <>
      <div data-v-a900648a="" className="orignal">
                            <div data-v-a900648a1="" className="daman-title daman-line">
                                <div data-v-a900648a1="" className="daman-title-left"><span data-v-a900648a1="">Rummy</span></div>
                                <div data-v-a900648a1="" className="btn-all">
                                    <span data-v-a900648a1="">All</span><span data-v-a900648a1="">1</span><svg
                                        data-v-a900648a1="" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none">
                                        <path data-v-a900648a1="" fillRule="evenodd" clipRule="evenodd"
                                            d="M8.5064 19.541C7.99993 19.9904 7.2002 19.6308 7.2002 18.9537C7.2002 18.7288 7.29666 18.5147 7.46512 18.3657L14.6731 11.9896C14.7178 11.95 14.7181 11.8804 14.6738 11.8404L7.45763 5.33217C7.29374 5.18437 7.2002 4.97403 7.2002 4.75334C7.2002 4.078 8.00051 3.72221 8.50188 4.17465L15.8798 10.8325L16.2562 11.1964C16.6628 11.5895 16.6628 12.2412 16.2562 12.6343L15.8798 12.9982L8.5064 19.541Z"
                                            fill="#fff"></path>
                                    </svg>
                                </div>
                            </div>
                            <div data-v-03087118="" data-v-a900648a="" className="daman__container allGame position-relative">
                                <div data-v-03087118="" className="item"><img data-v-03087118="" className="gameImg"
                                        data-src={img1} src={img1}
                                        /></div>
                                        <div data-v-03087118="" className="game-type" style={{ position: "absolute", top: "1.54667rem", left: "16%", transform: "translate(-50%)", color: "#fff", fontSize: "0.6rem", fontWeight: "600",}}>Rummy</div>
                            </div>
      </div>
    </>
  )
}

export default RummyGameSection
