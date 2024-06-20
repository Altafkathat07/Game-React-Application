import { useState, useEffect } from 'react';
import axios from 'axios';
import qrScanner from "../../assets/images/qrscan.jpg"
import Swal from 'sweetalert2';

function PromotionBox() {
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.post('/api/webapi/GetUserInfo')
            .then(response => {
                const userInfo = response.data.data;
                console.log("this is pro: " + JSON.stringify(userInfo));
                setUser(userInfo);
            })
            .catch(error => console.log(error));
    }, []);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                Swal.fire('Copied to clipboard!');
                Swal.fire({
                    icon: 'success',
                    title: 'Copy Invite Code',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'failed',
                    title: 'Failed to copy text: ' + error,
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };
    const copuInviteLink = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Copy Link',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'failed',
                    title: 'Failed to copy text: ' + error,
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };
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
                                    {/* <input type="hidden" value={user.invite} />
                                    {console.log("this is invite : " + user.invite)} */}
                                    <div data-v-7c8bbbf4="" className="btn m-b-10 c-row c-row-middle-center tag-read"
                                        data-clipboard-text="" onClick={() => copyToClipboard(user.invite)}>Copy Invitation Code</div>
                                    <div data-v-7c8bbbf4=""
                                        data-clipboard-text=""
                                        className="btn m-b-10 c-row c-row-middle-center tag-read" 
                                        onClick={() => copuInviteLink(`http://localhost:5173/register?r_code=${user.invite}`)}
                                        >Copy Link</div>
                                </div>
                            </div>
                        </div>
                        <div data-v-7c8bbbf6="" className="inviteLink"><center >Invite Link:</center>
                        <input type="text" value={`http://localhost:5173/register?r_code=${user.invite}`} readOnly  style={{fontSize: "0.8rem", color: "#f58a01", padding: "5px 15px", borderRadius: "5px", border: "2px solid #f58a01", width: "100%", background: "transparent", textAlign: "center" }}/>
                         {/* <span id='invite_code'>{`http://localhost:5173/register?r_code=${user.invite}`}</span> */}
                         <center><button onClick={() => copuInviteLink(`http://localhost:5173/register?r_code=${user.invite}`)} >Copy</button></center></div>
                    </div>
                </div>
      
    </>
  )
}

export default PromotionBox
