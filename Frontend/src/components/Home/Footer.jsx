// import home from "../../assets/images/home1.png";
// import check from "../../assets/images/checked.png";
// import invite from "../../assets/images/promotionBg-d4b9ecd6.png";
// import wallet from "../../assets/images/wallet.png";
// import account from "../../assets/images/my.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* <div data-v-432e6ed0="" className="nav c-pr" id="nav_checkUrl" data-url="" >
    <div className="van-hairline--top-bottom van-tabbar van-tabbar--fixed" >
        
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
</div> */}


<div data-v-c4b9aaee="" className="tabbar__container" >
            <Link to="/">
                <div  data-v-c4b9aaee="" className="tabbar__container-item active">
                    <svg data-v-c4b9aaee=""
                    xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 46 44" className="">
                    <path fill="url(#a)" fillRule="evenodd"
                        d="M5 19.843a6 6 0 0 1 2.664-4.987l13.5-9.03a6 6 0 0 1 6.672 0l13.5 9.03A6 6 0 0 1 44 19.843v21.185a2 2 0 0 1-2 2H27.526a2 2 0 0 1-2-2V31.19a2 2 0 0 0-2-2h-6.263a2 2 0 0 0-2 2v9.837a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm27.507 4.317a2 2 0 0 0 2-2v-1.031a2 2 0 0 0-2-2h-4.98a2 2 0 0 0-2 2v1.03a2 2 0 0 0 2 2z"
                        clipRule="evenodd"></path>
                    <defs>
                        <linearGradient id="a" x1="5" x2="47.278" y1="13" y2="26.218" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3687FF"></stop>
                            <stop offset="1" stopColor="#52F5FF"></stop>
                        </linearGradient>
                    </defs>
                    </svg>
                    <span data-v-c4b9aaee="">Home</span>
                </div>
            </Link>
            <Link to="/activity">
                <div  data-v-c4b9aaee="" className="tabbar__container-item">
                    <svg data-v-c4b9aaee=""
                        xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 46 44" className="">
                        <path stroke="#789DD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M38 30H10a6 6 0 0 0 0 12h28a6 6 0 0 0 0-12M36 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16M5.414 15.414a2 2 0 0 1 0-2.828l6.172-6.172a2 2 0 0 1 2.828 0l6.172 6.172a2 2 0 0 1 0 2.828l-6.172 6.172a2 2 0 0 1-2.828 0z">
                        </path>
                    </svg>
                    <span data-v-c4b9aaee="">Activity</span>
                </div>
            </Link>
            <Link to="/promotion">
                <div data-v-c4b9aaee="" className="tabbar__container-item" >
                    <svg className="prosvg" data-v-c4b9aaee=""
                        xmlns="http://www.w3.org/2000/svg" width="57" height="49" fill="none" viewBox="0 0 57 49" style={{zIndex: "3", width: "2rem", height: "2rem", position: "absolute", top: "-5px"}}>
                        <path fill="#fff" fillRule="evenodd"
                            d="M8.939 1.501A4 4 0 0 1 12.062 0h32.155a4 4 0 0 1 3.124 1.501l7.738 9.673c.427.533.749 1.12.968 1.735H.233a6 6 0 0 1 .967-1.735zM0 16.091h56.28a6 6 0 0 1-1.277 2.673l-23.79 28.549a4 4 0 0 1-6.146 0l-23.79-28.55A6 6 0 0 1 0 16.092m20.556 5.936 7.195 10.102a.5.5 0 0 0 .816-.002l7.118-10.093a2.44 2.44 0 0 1 4.435 1.406v.2h-.223c-.326 0-.782.248-1.304.93-.506.663-6.466 8.724-9.651 13.035a.975.975 0 0 1-1.563.007L17.32 24.26s-.394-.62-1.06-.62h-.14v-.195a2.445 2.445 0 0 1 4.436-1.418"
                            clipRule="evenodd"></path>
                    </svg>
                    <div data-v-c4b9aaee="" className="promotionBg"></div>
                    <span data-v-c4b9aaee="">Promotion</span>
                </div>
            </Link>
            <Link to="/wallet">
                <div  data-v-c4b9aaee="" className="tabbar__container-item">
                    <svg data-v-c4b9aaee=""
                        xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 46 44"
                        className="wallet">
                        <path stroke="#789DD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M17.982 11.969 31.785 4l4.612 7.989z" clipRule="evenodd"></path>
                        <path stroke="#789DD4" strokeLinejoin="round" strokeWidth="2"
                            d="M4 14a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path>
                        <path stroke="#789DD4" strokeLinejoin="round" strokeWidth="2"
                            d="M35.25 33H44V23h-8.75c-2.9 0-5.25 2.239-5.25 5s2.35 5 5.25 5Z"></path>
                        <path stroke="#789DD4" strokeLinecap="round" strokeWidth="2" d="M44 16.5v24"></path>
                    </svg>
                    <span data-v-c4b9aaee="">Wallet</span>
                </div>
            </Link>
            <Link to="/main">
                <div  data-v-c4b9aaee="" className="tabbar__container-item">
                    <svg data-v-c4b9aaee=""
                        xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 46 44" className="">
                        <path stroke="#789DD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M24 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18"></path>
                        <path stroke="#789DD4" strokeWidth="2" d="M7 35a9 9 0 0 1 9-9h16a9 9 0 1 1 0 18H16a9 9 0 0 1-9-9Z">
                        </path>
                    </svg>
                    <span data-v-c4b9aaee="">Account</span>
                </div>
            </Link>
        </div>

    </>
  )
}

export default Footer
