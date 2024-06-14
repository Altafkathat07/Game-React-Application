
import face from "../../../assets/images/face1.jpg"
import {Link} from "react-router-dom"
function AdminSidebar() {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul data-v-8cd483caa="" className="nav" >
                    <li className="nav-item nav-profile">
                        <a href="#" className="nav-link">
                            <div className="nav-profile-image">
                                <img src={face} alt="profile" />
                                <span className="login-status online"></span>
                            </div>
                            <div className="nav-profile-text d-flex flex-column">
                                <span className="font-weight-bold mb-2">David Grey. H</span>
                                <span className="text-secondary text-small">Project Manager</span>
                            </div>
                            <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link  to="/admin" className="nav-link">
                          <span className="menu-title">Dashboard</span>
                          <i className="mdi mdi-home menu-icon"></i>
                        </Link>
                    </li> 
                    <li className="nav-item">
                        <Link  to="/admin/uimanagemnt" className="nav-link">
                          <span className="menu-title">UI Managment</span>
                          <i className="mdi mdi-home menu-icon"></i>
                        </Link>
                    </li>  
                    <li className="nav-item">
                        <Link  to="/admin/user-details" className="nav-link">
                          <span className="menu-title">User Managment</span>
                          <i className="mdi mdi-home menu-icon"></i>
                        </Link>
                    </li> 
                    <li className="nav-item">
                        <Link  to="/admin/recharge" className="nav-link">
                          <span className="menu-title">Browse Recharge</span>
                          <i className="mdi mdi-home menu-icon"></i>
                        </Link>
                    </li>  
                    <li className="nav-item">
                        <Link  to="/admin/recharge-approve" className="nav-link">
                          <span className="menu-title">Recharge (Approve)</span>
                          <i className="mdi mdi-home menu-icon"></i>
                        </Link>
                    </li> 
                    <li className="nav-item">
                        <Link  to="/admin/withdraw" className="nav-link">
                          <span className="menu-title">Browse Withdraw</span>
                          <i className="mdi mdi-home menu-icon"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link  to="/admin/withdraw-approve" className="nav-link">
                          <span className="menu-title">Withdraw (Approve)</span>
                          <i className="mdi mdi-home menu-icon"></i>
                        </Link>
                    </li>  
                    <li className="nav-item">
                        <Link  to="/admin/settings" className="nav-link">
                          <span className="menu-title">Setting</span>
                          <i className="mdi mdi-home menu-icon"></i>
                        </Link>
                    </li> 
                    <li className="nav-item">
                        <Link  to="/admin/giftcode" className="nav-link">
                          <span className="menu-title">Create GiftCode</span>
                          <i className="mdi mdi-home menu-icon"></i>
                        </Link>
                    </li>  
                    <li className="nav-item">
                        <Link  to="/" className="nav-link">
                          <span className="menu-title">Go to Website</span>
                          <i className="mdi mdi-home menu-icon"></i>
                        </Link>
                    </li>
                    
                    
                
                </ul>
            </nav>
    </>
  )
}

export default AdminSidebar
