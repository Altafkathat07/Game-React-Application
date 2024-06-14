import { useState, useEffect } from 'react';
import axios from 'axios';
import recharge from '../../assets/images/rechargeIconaa-a37f0b23.png';
import rechargeHistory from '../../assets/images/rechargeHistory-dbaa148953.png';
import withdraw from '../../assets/images/widthdrawBlueaa-52d9a5cc.png';
import widthdrawHistory from '../../assets/images/myWithdrawHistoraay-8ddd0e20.png';
import { Link } from 'react-router-dom';

function WalletContent() {
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.post('/api/webapi/GetUserInfo')
            .then(response => {
                const userInfo = response.data.data;
                console.log("this is res: " + JSON.stringify(userInfo));
                setUser(userInfo);
            })
            .catch(error => console.log(error));
    }, []);

  return (
    <>
       <div data-v-7b283485="" className="wallet">
                <div data-v-7b283485="" className="wallet-user c-tc">
                    <div data-v-7b283485="" className="c-row c-row-center img">
                        <div data-v-7b283485="" className="van-image" 
                            >
                            <i className="bi bi-wallet2"></i>
                        </div>
                    </div>
                  
                    <div data-v-7b283485="" className="title">Total Balance</div>
                </div>
                <div data-v-7b283485="" className="wallet-box">
                    <div data-v-7b283485="" className="box">
                        <div data-v-7b283485="" className="icon1"></div>
                       
                        <div data-v-7b283485="" className="balance m-t-10">
                           
                            <div data-v-7b283485="" className="c-row balanceMoney c-row-middle-center">
                                <div data-v-7b283485="" className="money">
                                    
                                    <div data-v-7b283485="">₹<span data-v-7b283485="" className="p-l-10">{user.money_user ?? "Loading..."}</span>
                                    </div>
                                </div>
                                <div data-v-7b283485="" id="reload">
                                    <div data-v-7b283485="" className="van-image img m-l-15"
                                        >
                                        <img src="/images/reload.png" className="van-image__img" />
                                    </div>
                                </div>
                            </div>
                            <div data-v-7b283485="" className="info c-row">
                                <div data-v-7b283485="" className="item">
                                    <div data-v-7b283485="">Total Recharge</div>
                                    
                                    <div data-v-7b283485="" className="moneyItem">₹ {user.totalRecharge ?? 0.00}</div>
                                </div>
                                <div data-v-7b283485="" className="item">
                                    <div data-v-7b283485="">Total Withdrawal</div>
                                    
                                    <div data-v-7b283485="" className="moneyItem">₹ {user.totalWithdraw ?? 0.00}</div>
                                </div>
                            </div>
                        </div>
                   {/* <!-- <div data-v-7b283485="" className="c-row c-row-between total-btn m-t-30">
                            <div data-v-7b283485="" className="item c-row c-row-center"
                                onclick="location.href='/wallet/transfer'">
                                <div data-v-7b283485="" className="li"> MAIN WALLET TRANSFER </div>
                            </div>
                        </div> --> */}
                        <div data-v-7b283485="" className="c-row c-row-between total-btn m-t-30" id="image_box">
                            <Link to="/recharge">
                                <div className="images_21">
                                    <img src={recharge} width="40px" height="40px" />
                                    <p>Recharge</p>
                                </div>
                            </Link>
                            <Link to="/withdraw">
                                <div className="images_21">
                                    <img src={withdraw} width="40px" height="40px"/>
                                    <p>Withdraw</p>
                                </div>
                            </Link>
                            <div className="images_21"> 
                                <img src={rechargeHistory} width="40px" height="40px" className='rec_mrg'/>
                                <p>Recharge History</p>
                            </div>
                            <div className="images_21">   
                                <img src={widthdrawHistory} width="40px" height="40px" className='rec_mrg' />
                                <p >Withdraw History</p>
                            </div>
                          
                        </div>

                    </div>
                    
                </div>
                    
        </div>
    </>
  )
}

export default WalletContent
