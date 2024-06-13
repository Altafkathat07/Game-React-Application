import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/refresh.png';
import img2 from '../../assets/images/myWithdrawHistoraay-8ddd0e20.png';

function ProfileWallet() {
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.post('/api/webapi/user-bank-info')
            .then(response => {
                // console.log("this is res: " + response.data.result);
                const userInfo = response.data.userInfo[0];
                setUser(userInfo);
            })
            .catch(error => console.log(error));
    }, []);
  return (
    <>
        <div data-v-8cd483ca="" className="total-box">
                    <div data-v-8cd483ca="" className="infoItem">
                        <div data-v-8cd483ca="" className="c-row c-row-middle"><img data-v-8cd483ca="" width="45px"
                                height="45px" src={img2} className="walletImg" />
                            <div data-v-8cd483ca="" className="p-l-15">
                                <div data-v-8cd483ca="" className="des u-m-b-15"> Balance </div>
                                <div data-v-8cd483ca="" className="c-row c-row-middle c-row-center p-t-5">
                                    <div data-v-8cd483ca="" className="money">
                                        <div data-v-8cd483ca="">
                                            <span data-v-8cd483ca="" className="txt"> INR {user.money}  </span>
                                        </div>
                                    </div>
                                    <div data-v-8cd483ca="">
                                        <img data-v-8cd483ca="" width="20px" height="20px"
                                            src={img1} className="img m-l-10 reload_money" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-v-8cd483ca="" className="c-row c-row-between m-t-10 infoBtn">
                            <Link to="/withdraw" style={{width: "100%"}}>
                                <div data-v-8cd483ca="" className="item c-row c-row-center">
                                    <div data-v-8cd483ca="" className="li"> Withdraw</div>
                                </div>
                            </Link>
                            <Link to="/recharge" style={{width: "100%"}}>
                            <div data-v-8cd483ca="" className="item c-row c-row-center" >
                                <div data-v-8cd483ca="" className="li"> Recharge </div>
                            </div>
                            </Link>
                        </div>
                    </div>
        </div>            
      
    </>
  )
}

export default ProfileWallet
