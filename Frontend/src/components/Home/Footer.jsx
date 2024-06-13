import home from "../../assets/images/home1.png";
import check from "../../assets/images/checked.png";
import invite from "../../assets/images/promotionBg-d4b9ecd6.png";
import wallet from "../../assets/images/wallet.png";
import account from "../../assets/images/my.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div data-v-432e6ed0="" className="nav c-pr" id="nav_checkUrl" data-url="">
    <div className="van-hairline--top-bottom van-tabbar van-tabbar--fixed">
        
        <div className="van-tabbar-item">
        <Link to="/">
            <div className="van-tabbar-item__icon">
                
            </div>
            <div className="van-tabbar-item__text">
                <div>
                    <img src={home} />
                </div>
                <span className="name">Home</span>
            </div>
            </Link>
        </div>
        <div className="van-tabbar-item" >
        <Link to="/activity">
            <div className="van-tabbar-item__icon">
                
            </div>
            <div className="van-tabbar-item__text">
                <div>
                    <img src={check} />
                </div>
                <span className="name">Activity</span>
            </div>
            </Link>
        </div>
        <div className="van-tabbar-item" >
        <Link to="/promotion">
            <div className="van-tabbar-item__icon">
                
            </div>
            <div className="van-tabbar-item__text">
                <div className="muan">
                    <img src={invite} className="img" />
                </div>
                <span className="name">Promotion</span>
            </div>
            </Link>
        </div>
        <div className="van-tabbar-item">
            <Link to="/wallet">
            <div className="van-tabbar-item__icon">
                
            </div>
            <div className="van-tabbar-item__text">
                <div>
                    <img src={wallet} />
                </div>
                <span className="name">wallet</span>
            </div>
            </Link>
        </div>
        
        <div className="van-tabbar-item"  >
        <Link to="/main">
            <div className="van-tabbar-item__icon">
                
            </div>
            <div className="van-tabbar-item__text">
                <div>
                    <img src={account} />
                </div>
                <span className="name">Account</span>
            </div>
            </Link>
        </div>
        
    </div>
</div>
    </>
  )
}

export default Footer
