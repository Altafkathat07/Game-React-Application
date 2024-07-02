import { useContext } from "react";
import AuthContext from "../Auth/AuthContext";
import {Link} from "react-router-dom"
import logo from "../../assets/images/headerimage.png"

// import down from "../../assets/images/down.png"
// import msg from "../../assets/images/msgimage.png"
function Header() {
	const { isAuthenticated, loadingUserInfo } = useContext(AuthContext);
    // console.log(isAuthenticated);
    if (loadingUserInfo) {
        return <p>Loading user info...</p>;
    }
    const isAuth = isAuthenticated ?? false;
  return (
    <>

            <div data-v-106b99c8="" data-v-432e6ed0=""className="navbar">
				<div data-v-106b99c8=""className="navbar-left">
				<div data-v-432e6ed0="" data-v-106b99c8=""className="c-row c-row-middle-center">
					<Link to="/"><img src={logo} alt="logo" className="logoImage" style={{width: "8rem", height: "2.5rem"}}/></Link>
					</div>
				</div>
				<div data-v-106b99c8=""className="navbar-title">
				</div>
				{!isAuth && (
					<div data-v-81ead1cb="" className="navbar__content-right ">
						<div className="content-daman__right d-flex justify-content-between">
						<Link to="/login"> <div className="nav-btn login-btn" id ="login-btn" >Log in</div> </Link> 
						<Link to="/register"> <div className="nav-btn register-btn" id = "register-btn">Register</div> </Link>
						</div>
					</div>
					)}
			</div>
       {/* <div data-v-106b99c8="" data-v-432e6ed0=""className="navbar">
				<div data-v-106b99c8=""className="navbar-left">
				<div data-v-432e6ed0="" data-v-106b99c8=""className="c-row c-row-middle-center">
					<Link to="/"><h3 style={{color: "#fff"}}>Game</h3></Link>
					</div>
				</div>
				<div data-v-106b99c8=""className="navbar-title">
					
				</div>
				<div data-v-106b99c8=""className="navbar-right" >
					<div data-v-432e6ed0="" data-v-106b99c8=""className="c-row c-row-middle-center msg">
						<img data-v-432e6ed0="" data-v-106b99c8="" height="40px" width="40px" src={msg}
							className="down" />
					</div>
					<div data-v-432e6ed0="" data-v-106b99c8=""className="c-row c-row-middle-center">
						<img data-v-432e6ed0="" data-v-106b99c8="" height="30px" width="30px" src={down}
							className="down" />
					</div>
				</div>
		  	</div> */}
			
	
    </>
  )
}

export default Header
