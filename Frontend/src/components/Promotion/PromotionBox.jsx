import qrScanner from "../../assets/images/qrscan.jpg"

function PromotionBox() {
  return (
    <>
    <div data-v-7c8bbbf4="" className="box">
                    <div data-v-7c8bbbf4="" className="tit">My Reward</div>
                    <div data-v-7c8bbbf4="" className="info">
                        <div data-v-7c8bbbf4="" className="info-data c-row c-row-between m-b-20">
                            <div data-v-7c8bbbf4="" className="left">
                                <h5 data-v-7c8bbbf4="" className="all" > Todays Total Commission</h5>
                                <p data-v-7c8bbbf4="" className="num" id="roses_today">0</p>
                                <p data-v-7c8bbbf4="" className="txt" id="roses_f1">Direct Commission: 0</p> 
                                <p data-v-7c8bbbf4="" className="txt" id="roses_f">Team Commission: 0</p>
                            </div>
                            <div data-v-7c8bbbf4="" className="right">
                                <p data-v-7c8bbbf4="" className="txt">Total Referrals: <span data-v-7c8bbbf4=""
                                        className="num" id="f1">0</span></p>
                                <p data-v-7c8bbbf4="" className="txt">Total Members: <span data-v-7c8bbbf4=""
                                        className="num" id="f_total">0</span></p>
                                <p data-v-7c8bbbf4="" className="txt">New Members Today: <span data-v-7c8bbbf4=""
                                        className="num" id="f1_today">0</span></p>
                                <p data-v-7c8bbbf4="" className="txt">New Total Members For The Day: <span data-v-7c8bbbf4=""
                                        className="num" id="f_all_today">0</span></p>
                             {/* <!--    <p data-v-7c8bbbf4="" className="txt">Total Commission For The Week: <span data-v-7c8bbbf4=""
                                        className="num">0</span></p> --> */}
                                <p data-v-7c8bbbf4="" className="txt" >Total Commission: <span data-v-7c8bbbf4=""
                                        className="num" id="roses_all">0</span></p> 
                            </div> 
                        </div>
                        <div data-v-7c8bbbf4="" className="info-img c-row c-row-between">
                            <div data-v-7c8bbbf4="" className="img" id="img" >
                                <div data-v-7c8bbbf4="" id="qrcode"
                                    title="">
                                    <img src={qrScanner} alt=""  width="100%" height="100%"/>
                                </div>
                                <div data-v-7c8bbbf4="" className="c-tc save">Long Press To Save QR Code</div>
                            </div>
                            <div data-v-7c8bbbf4="" className="btn-list c-row c-row-middle-center">
                                <div data-v-7c8bbbf4="" className="btn-box">
                                    <div data-v-7c8bbbf4="" className="btn m-b-10 c-row c-row-middle-center tag-read"
                                        data-clipboard-text="">Copy Invitation Code</div>
                                    <div data-v-7c8bbbf4=""
                                        data-clipboard-text=""
                                        className="btn m-b-10 c-row c-row-middle-center tag-read">Copy Link</div>
                                </div>
                            </div>
                        </div>
                        <div data-v-7c8bbbf6="" className="inviteLink"><center >Invite Link:</center> <span id='invite_code'></span><center><button  >Copy</button></center></div>
                    </div>
                </div>
      
    </>
  )
}

export default PromotionBox
