
import face from "../../../assets/images/face1.jpg"
import {Link} from "react-router-dom"
function AdminSidebar() {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
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
                        <a className="nav-link" href="index.html">
                          <span className="menu-title">Dashboard</span>
                          <i className="mdi mdi-home menu-icon"></i>
                        </a>
                    </li> 
                    <li className="nav-item">
                        <Link  to="/admin/uimanagemnt" className="nav-link">
                          <span className="menu-title">UI Managment</span>
                          <i className="mdi mdi-home menu-icon"></i>
                        </Link>
                    </li> 
                    
                    
                
                </ul>
            </nav>
    </>
  )
}

export default AdminSidebar
