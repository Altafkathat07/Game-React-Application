import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/home/css/index.css'
import '../../assets/home/css/login.css'
import '../../assets/home/css/recharge.css'
import '../../assets/home/css/rechargeHistory.css'
import '../../assets/admin/css/admin.css'
import Header from "../Home/Header"
import Footer from "../Home/Footer"
import img from "../../assets/images/copy.png"
import { showAlert } from '../AlertMassWrapper';
function RechargeHistory() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('/api/webapi/recharge-list')
            .then(response => {
                console.log("Recharge list response:", response.data);
                if (Array.isArray(response.data.datas)) { // Ensure response.data.datas is an array
                    setItems(response.data.datas);
                } else {
                    console.error("Unexpected data format:", response.data);
                    setItems([]); // Default to empty array if data format is unexpected
                }
            })
            .catch(error => console.log(error));
    }, []);
  

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                showAlert('Copy successful');
            })
            .catch(err => showAlert('Error copying text: ' + err));
    };
    function formateT(params) {
        let result = (params < 10) ? "0" + params : params;
        return result;
        }
        
        function timerJoin(params = '', addHours = 0) {
            let date = '';
            if (params) {
                date = new Date(Number(params));
            } else {
                date = new Date();
            }
        
            date.setHours(date.getHours() + addHours);
        
            let years = formateT(date.getFullYear());
            let months = formateT(date.getMonth() + 1);
            let days = formateT(date.getDate());
        
            let hours = date.getHours() % 12;
            hours = hours === 0 ? 12 : hours;
            let ampm = date.getHours() < 12 ? "AM" : "PM";
        
            let minutes = formateT(date.getMinutes());
            let seconds = formateT(date.getSeconds());
        
            return years + '-' + months + '-' + days + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        }
  return (
    <>
      <div data-v-8cd483ca="" className="home mian game" style={{background:"rgb(243 243 243)"}}>
            <div data-v-8cd483ca="" className="menu-box">
              <Header />
              <div data-v-3966082f="" className="box">
                <div data-v-3966082f="" className="list m-b-20">
                    <div data-v-3966082f="" role="feed" className="van-list">
                        <div className="lisys">
                        {items.map((data, index) => (
                            items ? (
                                <div key={index} className="item c-row c-row-between m-b-10">
                                    <div>
                                        <div className="number c-row" onClick={() => handleCopy(data.id_order)}>
                                            {data.id_order}
                                            <div className="m-l-10 tag-read van-image" style={{ width: '18px', height: '15px' }}>
                                                <img src={img} className="van-image__img" alt="copy" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="money action m-b-10 m-t-10">
                                                <span>{data.money}.00 ₹</span>
                                            </div>
                                        </div>
                                        <div className="time">{timerJoin(data.time)}</div>
                                    </div>
                                    <div>
                                        <div className="state m-b-5">
                                            <span style={{ color: data.status === 1 ? 'rgb(106, 190, 87)' : 'rgb(242, 65, 59)' }}>
                                                {data.status === 0 ? 'Waiting' : data.status === 1 ? 'Success' : 'Canceled'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                ) : `<div className="van-list__finished-text" style={{fontSize: "0.7rem"}}>Not available anymore</div>` 
                            ))}
                        </div>
                       
                        {/* <div className="van-list__placeholder"></div> */}
                    </div>
                </div>
            </div>
              <Footer />
            </div>
          </div>
    </>
  )
}

export default RechargeHistory
