import wallet from "../../assets/images/wal_icon.webp";
import icon from "../../assets/images/refresh.png";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function WinGoInfo() {
    const [user, setUser] = useState({});
    const [notice, setNotice] = useState('');
    useEffect(() => {
        fetch('/api/webapi/admin/notification-fetching')
          .then((res) => {
            if (!res.ok) {
              throw new Error('Network response was not ok ' + res.statusText);
            }
            return res.json();
          })
          .then((data) => {
            // console.log("Data fetched:", data.data[0].notice);
            const result = data.data[0].notice;
            setNotice(result);
          })
          .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
          });
      }, []);

    useEffect(() => {
        axios.post('/api/webapi/GetUserInfo')
            .then(response => {
                const userInfo = response.data.data;
                console.log("this is res: " + JSON.stringify(userInfo));
                setUser(userInfo);
            })
            .catch(error => console.log(error));
    }, []);

    const calculateDuration = (text) => {
        const speed = 60; // pixels per second
        const textLength = text.length * 10; // approximate width of text in pixels
        return textLength / speed;
      };
      const duration = calculateDuration(notice);
      const styles = {
        notice: {
          overflow: "hidden"
        },
        content: {
          display: 'inline-block',
          whiteSpace: 'nowrap',
          animation: `scroll ${duration}s linear infinite`
        }
      };
 
  return (
    <>
    <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
    </style>
      <div data-v-a9660e98="" className="game-head">
    <div data-v-a9660e98="" className="total-box">
        <div data-v-a9660e98="" className="c-row c-row-between c-row-middle info">
            <div data-v-a9660e98="" className="c-row c-row-middle">
                <div data-v-a9660e98="" className="m-r-10">
                    <div data-v-a9660e98="" className="van-image" >
                        <img src={wallet}  className="wal" width="50px" height="50px" />
                    </div>
                </div>
                <div data-v-a9660e98="" className="total">
                    <h3 data-v-a9660e98="" className="total m-b-2">Total</h3>
                    <span data-v-a9660e98="" className="wallet">Balance</span>
                </div>
            </div>
            <div data-v-a9660e98="" className="c-row c-row-middle">
                <div data-v-a9660e98="" className="num d-flex">
                    <span data-v-a9660e98="" className="d-flex">₹ {user.money_user ?? "loading..."} </span>
                </div>
                <div data-v-a9660e9899="" className="van-image  m-l-10 reload_money" >
                    <img src={icon}  className="ref" />
                </div>
            </div>
        </div>
        <div data-v-a9660e98="" className="total-btn c-row c-row-between">
            <div data-v-a9660e98="" className="item" >
                <Link to="/withdraw">
                <button data-v-a9660e98=""
                    className="btn van-button van-button--default van-button--normal van-button--block van-button--round"
                    >
                    <div data-v-a9660e98="" className="van-button__content">
                        <span data-v-a9660e98="" className="van-button__text">
                            Withdraw
                        </span>
                    </div>
                </button>
                </Link>
            </div>
            <div data-v-a9660e98="" className="item">
               <Link to="/recharge"> 
               <button data-v-a9660e98=""
                    className="btn van-button van-button--default van-button--normal van-button--block van-button--round"
                    >
                    <div data-v-a9660e98="" className="van-button__content">
                        <span data-v-a9660e98="" className="van-button__text">
                            Recharge
                        </span>
                    </div>
                </button>
                </Link>
            </div>
        </div>
    </div>
    <div data-v-a9660e98="" className="m-t-15 notice">
        <div data-v-a9660e98="" role="alert" className="van-notice-bar not">
            <i className="van-icon van-icon-volume-o van-notice-bar__left-icon">
                
            </i>
            <div role="marquee" className="van-notice-bar__wrap" style={{fontSize: "0.9rem"}}>
				<div className="van-notice-bar__content" id="notice"  style={styles.content}>{notice}</div>
			</div>
        </div>
    </div>
</div>
    </>
  )
}

export default WinGoInfo
