import { useState, useEffect } from "react";
import axios from "axios";
import face from "../../../assets/images/win1.png"
import logo from "../../../assets/images/logo.svg"
import logoMini from "../../../assets/images/logo-mini.svg"

function AdminNav() {
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.post('/api/webapi/GetUserInfo')
            .then(response => {
                const userInfo = response.data.data;
                // console.log("this is res: " + JSON.stringify(userInfo));
                setUser(userInfo);
            })
            .catch(error => console.log(error));
    }, []);

    const navHandler = () =>{
        console.log("click")
    }
  return (
    <>
     <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row" id="adminNav">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a className="navbar-brand brand-logo" ><img src={logo} alt="logo" /></a>
                <a  className="navbar-brand brand-logo-mini" onClick={navHandler}><img src={logoMini} alt="logo" /></a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-stretch">
                <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
           
            <i className="bi bi-list"></i>
          </button>
                <div className="search-field d-none d-md-block">
                    <form className="d-flex align-items-center h-100" action="#">
                        <div className="input-group">
                            <div className="input-group-prepend bg-transparent">
                                {/* <i className="input-group-text border-0 mdi mdi-magnify"></i> */}
                                <i className="bi bi-search"></i>
                            </div>
                            <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects" />
                        </div>
                    </form>
                </div>
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item nav-profile dropdown">
                        <a className="nav-link dropdown-toggle" id="profileDropdown" data-toggle="dropdown" aria-expanded="false">
                            <div className="nav-profile-img">
                                <img src={face} alt="image" />
                                <span className="availability-status online"></span>
                            </div>
                            <div className="nav-profile-text">
                                <p className="mb-1 text-black">{user.name_user}</p>
                            </div>
                        </a>
                       
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span className="bi bi-list"></span>

          </button>
            </div>
        </nav>
    </>
  )
}

export default AdminNav
