import face from "../../../assets/images/face1.jpg"
import face2 from "../../../assets/images/face2.jpg"
import face3 from "../../../assets/images/face3.jpg"
import face4 from "../../../assets/images/face4.jpg"
import logo from "../../../assets/images/logo.svg"
import logoMini from "../../../assets/images/logo-mini.svg"

function AdminNav() {
  return (
    <>
     <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row" id="adminNav">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a className="navbar-brand brand-logo" ><img src={logo} alt="logo" /></a>
                <a className="navbar-brand brand-logo-mini" ><img src={logoMini} alt="logo" /></a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-stretch">
                <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            {/* <span className="mdi mdi-menu"></span> */}
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
                                <p className="mb-1 text-black">David Greymaax</p>
                            </div>
                        </a>
                        {/* <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                            <a className="dropdown-item" href="#">
                  <i className="mdi mdi-cached mr-2 text-success"></i> Activity Log </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                  <i className="mdi mdi-logout mr-2 text-primary"></i> Signout </a>
                        </div> */}
                    </li>
                    <li className="nav-item d-none d-lg-block full-screen-link">
                        <a className="nav-link">
                {/* <i className="mdi mdi-fullscreen" id="fullscreen-button"></i> */}
                <i className="bi bi-fullscreen"></i>
              </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                {/* <i className="mdi mdi-email-outline"></i> */}
                <i className="bi bi-envelope"></i>
                <span className="count-symbol bg-warning"></span>
              </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                            <h6 className="p-3 mb-0">Messages</h6>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <img src={face4} alt="image" className="profile-pic" />
                                </div>
                                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                                    <p className="text-gray mb-0"> 1 Minutes ago </p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <img src={face2} alt="image" className="profile-pic" />
                                </div>
                                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                                    <p className="text-gray mb-0"> 15 Minutes ago </p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <img src={face3} alt="image" className="profile-pic" />
                                </div>
                                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
                                    <p className="text-gray mb-0"> 18 Minutes ago </p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <h6 className="p-3 mb-0 text-center">4 new messages</h6>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                {/* <i className="mdi mdi-bell-outline"></i> */}
                <i className="bi bi-bell"></i>
                <span className="count-symbol bg-danger"></span>
              </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                            <h6 className="p-3 mb-0">Notifications</h6>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-success">
                                        <i className="mdi mdi-calendar"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
                                    <p className="text-gray ellipsis mb-0"> Just a reminder that you have an event today </p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-warning">
                                        <i className="mdi mdi-settings"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="preview-subject font-weight-normal mb-1">Settings</h6>
                                    <p className="text-gray ellipsis mb-0"> Update dashboard </p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-info">
                                        <i className="mdi mdi-link-variant"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                                    <p className="text-gray ellipsis mb-0"> New admin wow! </p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <h6 className="p-3 mb-0 text-center">See all notifications</h6>
                        </div>
                    </li>
                    <li className="nav-item nav-logout d-none d-lg-block">
                        <a className="nav-link" href="#">
                        <i className="bi bi-power"></i>
                {/* <i className="mdi mdi-power"></i> */}
              </a>
                    </li>
                    <li className="nav-item nav-settings d-none d-lg-block">
                        <a className="nav-link" href="#">
                {/* <i className="mdi mdi-format-line-spacing"></i>
                 */}
                 <i className="bi bi-three-dots-vertical"></i>
              </a>
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span className="mdi mdi-menu"></span>

          </button>
            </div>
        </nav>
    </>
  )
}

export default AdminNav
