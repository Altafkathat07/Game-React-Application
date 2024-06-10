import img from "../../assets/images/wal_img.png"
import key_img from "../../assets/images/key.png"
import fees from "../../assets/images/fees.png"
import bet from "../../assets/images/total_bet.png"
import time from "../../assets/images/withdraw_time.png"
import daily from "../../assets/images/daily.png"
import range from "../../assets/images/range.png"

function WalletProfile() {
  return (
    <>
     <div data-v-25d9c352="" className="selectBox p-b-20">
                <div data-v-25d9c352="" className="colorBox"></div>
                <div data-v-25d9c352="" className="txtBox">
                    <div data-v-25d9c352="" className="c-row align-items-center">
                        <div data-v-25d9c352="" className="txt"> Withdrawal Money </div>
                        <div data-v-25d9c352="" className="c-row c-row-middle">
                            <div data-v-25d9c352="" className="money">
                                
                                <div data-v-25d9c352="">₹<span data-v-25d9c352="" className="p-l-10">10</span></div>
                                
                            </div>
                            <div data-v-25d9c352="" className="van-image  m-l-15" ><img
                                    src={img} className="van-image__img" width="20px"  height="20px" style={{width: "25px"}}/></div>
                        </div>
                    </div>
                    <div data-v-25d9c352="" className="icon"></div>
                </div>
                <div data-v-25d9c352="" className="tab">
                    <div data-v-25d9c352="" className="box">
                        <ul data-v-25d9c352="" className="c-row c-flex-warp">
                            <li data-v-25d9c352="" className="item action">
                                <div data-v-25d9c352="" className="icon c-row c-row-middle-center">
                                    <i data-v-25d9c352=""
                                        className="size van-icon van-icon-pending-payment">
                                        
                                    </i>
                                </div>
                                <div data-v-25d9c352="" className="c-tc">Wallet</div>
                                <div data-v-25d9c352="" className="icons"><i data-v-25d9c352=""
                                        className="van-icon van-icon-success"
                                        >
                                        
                                    </i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div data-v-25d9c352="" className="number-box c-row">
                    <div data-v-25d9c352="" className="symbol c-row c-row-middle">₹</div>
                    <div data-v-25d9c352="" className="input c-row c-row-middle van-cell van-field">
                        <div className="van-cell__value van-cell__value--alone van-field__value">
                            <input type="number" inputMode="numeric" placeholder="Withdrawal Amount" className="van-field__control" id="amount"/>
                        </div>
                    </div>
                    
                </div>
                
                <div data-v-25d9c352="" className="conBox p-t-5">
                    <div data-v-25d9c352="" className="des">Payment Method</div>
                    <div data-v-25d9c352="" className="box m-b-10">
                        <div data-v-25d9c352="">
                            <div data-v-25d9c352="" className="list">
                                
                            </div>
                            <div data-v-25d9c352="" className="c-row c-row-center" >
                                <div data-v-25d9c352="" className="add c-row c-row-middle-center m-t-10 m-b-10" ><span
                                        data-v-25d9c352="" className="plus c-row c-row-middle-center">
                                       <i className="bi bi-plus"></i>
                                        </span> Add BankCard</div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div data-v-25d9c352="" className="requiredBox p-t-20">
                    <div data-v-25d9c352="" className="box c-row c-row-between c-row-middle p-l-10">
                        <img data-v-25d9c352="" height="13px" width="25px" src={key_img} />
                        <input data-v-d8986e5e="" data-v-25d9c352="" placeholder="Enter Password"  className="pw-input input" />
                    </div>
                </div>
                <div data-v-25d9c352="" className="c-row c-row-center  p-b-30 withdrawal-btn"><button
                        data-v-25d9c352=""
                        className="btn van-button van-button--default van-button--normal van-button--block van-button--round">
                        <div data-v-25d9c352="" className="van-button__content"><span data-v-25d9c352=""
                                className="van-button__text"> Withdraw Money </span></div>
                    </button></div>
                <div data-v-25d9c352="" className="bankBox m-b-15 m-t-5">
                    <div data-v-25d9c352="" className="box">
                        <div data-v-25d9c352="" className="item c-row c-row-middle">
                            <div data-v-25d9c352="" className="m-r-10 van-image with_des" ><img
                                    src={fees}
                                    className="van-image__img" /></div>
                            <div data-v-25d9c352="">1. Withdrawal Fees: 0%</div>
                        </div>
                        
                         <div data-v-25d9c352="" className="item c-row c-row-middle">
                            <div data-v-25d9c352="" className="m-r-10 van-image with_des" ><img
                                    src={bet}
                                    className="van-image__img" /></div>
                            <div data-v-25d9c352="">2. Total bet Amount
                            {/* <br />For Withdrawal: ₹ 0 */}
                            </div>
                        </div> 
                        <div data-v-25d9c352="" className="item c-row c-row-middle">
                            <div data-v-25d9c352="" className="m-r-10 van-image with_des" ><img
                                    src={time}
                                    className="van-image__img" /></div>
                            <div data-v-25d9c352="">3. Withdrawal Time: 08:00 AM-08:00 PM</div>
                        </div>
                        <div data-v-25d9c352="" className="item c-row c-row-middle">
                            <div data-v-25d9c352="" className="m-r-10 van-image with_des" ><img
                                    src={daily}
                                    className="van-image__img" /></div>
                            <div data-v-25d9c352="">4. Daily Withdrawal Limit: 3 Times</div>
                        </div>
                        <div data-v-25d9c352="" className="item c-row c-row-middle">
                            <div data-v-25d9c352="" className="m-r-10 van-image with_des" ><img
                                    src={range}
                                    className="van-image__img" /></div>
                            <div data-v-25d9c352="">5. Withdrawal Amount Range: 
                            {/* <br />110 - Unlimited */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default WalletProfile
