import { useState, useEffect } from 'react'
import axios from 'axios'
import support from '../../assets/images/supicon.webp'
import secure from '../../assets/images/securityicon.webp'
import guide from '../../assets/images/guideicon.webp'
import about from '../../assets/images/abouticon.webp'
import redeem from '../../assets/images/redeem.webp'
import { useNavigate } from 'react-router-dom';
// import logout from '../../assets/images/logout_icon.png'
import {Link} from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

function ProfileList() {
    const [level, setLevel] = useState({});
    // const navigate = useNavigate();
    // const [isBalanceVisible, setIsBalanceVisible] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.post('/api/webapi/GetUserInfo')
            .then(response => {
                const userInfo = response.data.data;
                console.log("this is res: " + JSON.stringify(userInfo.level));
                setLevel(userInfo.level);
            })
            .catch(error => console.log(error));
    }, []);
     
    const handleLogoutClick = (e) => {
        e.preventDefault();
        MySwal.fire({
          title: 'Are you sure?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel!',
          reverseButtons: true,
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger',
          },
          buttonsStyling: false,
        }).then((result) => {
          if (result.isConfirmed) {
            axios.post('/api/webapi/logout') 
              .then(response => {
                console.log('Token updated in database:', response.data);
                MySwal.fire('Logged out!', 'You have been logged out.', 'success');
                navigate('/'); 
              })
              .catch(error => {
                console.error('Error updating token in database:', error);
                MySwal.fire('Error', 'An error occurred while logging out.', 'error');
              });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            MySwal.fire('Cancelled', 'You are still logged in :)', 'error');
          }
        });
      };
  
    // const handleLogoutClick = (e) => {
    //     e.preventDefault();
    //     MySwal.fire({
    //       title: 'Are you sure?',
    //       icon: 'warning',
    //       showCancelButton: true,
    //       confirmButtonText: 'Confirm',
    //       cancelButtonText: 'Cancel!',
    //       reverseButtons: true,
    //       customClass: {
    //         confirmButton: 'btn btn-success',
    //         cancelButton: 'btn btn-danger',
    //       },
    //       buttonsStyling: false,
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         unsetCookie();
    //         MySwal.fire('Logged out!', 'You have been logged out.', 'success');
    //       } else if (result.dismiss === Swal.DismissReason.cancel) {
    //         MySwal.fire('Cancelled', 'You are still logged in :)', 'error');
    //       }
    //     });
    //   };
    
   
     

//   const togglePasswordVisibility = () => {
//     let input = document.getElementById('pass_log_id');
//     input.type = input.type === 'password' ? 'text' : 'password';
//   };

//   const toggleBalanceVisibility = () => {
//     setIsBalanceVisible(!isBalanceVisible);
//   };

  return (
    <>
     <div data-v-21f3500a="" data-v-8cd483ca="" className="list">
                    
                    
                    { level === 1 &&(
                       <Link to="/admin"> <div data-v-21f3500a=""  className="item c-row c-row-between" >
                            <div data-v-21f3500a="" className="c-row c-row-middle">
                                <img data-v-21f3500a="" width="24px" height="24px" src={secure} className="img" />
                                <span data-v-21f3500a="" className="name">Administrator Area</span>
                            </div>
                            <div data-v-21f3500a="" className="c-row c-row-middle">
                                <i data-v-21f3500a=""
                                    className="van-icon van-icon-arrow" >
                                    
                                </i>
                            </div>
                        </div>
                        </Link>
                    )}
                    <Link to="/reset-password">
                    <div data-v-21f3500a="" className="item c-row c-row-between" >
                        <div data-v-21f3500a="" className="c-row c-row-middle"><img data-v-21f3500a="" width="24px"
                                height="24px" src={secure} className="img" /><span data-v-21f3500a="" className="name">Security and Safety</span></div>
                        <div data-v-21f3500a="" className="c-row c-row-middle"><i data-v-21f3500a=""
                                className="van-icon van-icon-arrow" >
                                
                            </i></div>
                    </div>
                    </Link>
                    <Link to="/redeem-code">
                    <div data-v-21f3500a="" className="item c-row c-row-between" >
                        <div data-v-21f3500a="" className="c-row c-row-middle"><img data-v-21f3500a="" width="24px"
                                height="24px" src={redeem} className="img" /><span data-v-21f3500a="" className="name">Redeem Code</span></div>
                        <div data-v-21f3500a="" className="c-row c-row-middle"><i data-v-21f3500a=""
                                className="van-icon van-icon-arrow" >
                                
                            </i></div>
                    </div>
                    </Link>
                    <Link to="/beginner-guide">
                    <div data-v-21f3500a="" className="item c-row c-row-between" >
                        <div data-v-21f3500a="" className="c-row c-row-middle"><img data-v-21f3500a="" width="24px"
                                height="24px" src={guide} className="img" /><span data-v-21f3500a=""
                                className="name">Guide for beginners</span>
                        </div>
                        <div data-v-21f3500a="" className="c-row c-row-middle"><i data-v-21f3500a=""
                                className="van-icon van-icon-arrow" >
                                
                            </i></div>
                    </div>
                    </Link>
                    <Link to="/about-us">
                    <div data-v-21f3500a="" className="item c-row c-row-between" >
                        <div data-v-21f3500a="" className="c-row c-row-middle"><img data-v-21f3500a="" width="24px"
                                height="24px" src={about} className="img" /><span data-v-21f3500a="" className="name">About Us</span></div>
                        <div data-v-21f3500a="" className="c-row c-row-middle">
                            <i data-v-21f3500a=""
                                className="van-icon van-icon-arrow" >
                                
                            </i></div>
                    </div>
                    </Link>                    
                    <Link to="/salary-record">
                    <div data-v-21f3500a="" className="item c-row c-row-between" >
                        <div data-v-21f3500a="" className="c-row c-row-middle"><i className="bi bi-cash mr-2"></i><span data-v-21f3500a="" className="name">Salary Record</span></div>
                        <div data-v-21f3500a="" className="c-row c-row-middle">
                            <i data-v-21f3500a=""
                                className="van-icon van-icon-arrow" >
                                
                            </i>
                        </div>
                    </div>
                    </Link>
                    <Link to="/support">
                    <div data-v-21f3500a="" className="item c-row c-row-between" >
                        <div data-v-21f3500a="" className="c-row c-row-middle"><img data-v-21f3500a="" width="24px"
                                height="24px" src={support} className="img" /><span data-v-21f3500a=""
                                className="name">Customer Support Online 24/7</span></div>
                        <div data-v-21f3500a="" className="c-row c-row-middle">
                            <i data-v-21f3500a=""
                                className="van-icon van-icon-arrow" >
                                
                            </i></div>
                    </div>
                    </Link>
                </div>
                <div data-v-8cd483ca="" className="logout-btn m-t-40" onClick={handleLogoutClick}>
                <div data-v-8cd483ca="" className="gradient">
                    <button data-v-8cd483ca=""
                        className="logout van-button van-button--default van-button--normal van-button--block van-button--round"
                        style={{background: "#f18301", color: "#fff",display: "flex",justifyContent: "center",alignItems: "center",borderRadius: "1rem",textAlign: "center",width: "100%",height: "1.8rem",lineHeight: "0.8rem" }}>
                        <div data-v-8cd483ca="" className="van-button__content">
                            <span data-v-8cd483ca="" className="van-button__text">
                                <span data-v-8cd483ca="" style={{fontSize: "1rem"}}>Logout</span>
                            </span>
                        </div>
                    </button>
                </div>
            </div>
            
            {/* {isDialogVisible && ( */}
               { 
                // <div role="dialog" className="van-dialog" style={{zIndex: "2002"}} aria-labelledby="">
                //     <div data-v-b9e16d43="" className="dialog__container-img"><img data-v-b9e16d43="" alt="" className="" data-origin="https://www.bigdaddygame2.com/assets/png/orderCancelWarn-93894f35.png" src={logout} style={{width: "2.13333rem", height: "2.13333rem",}} /></div>
                //     <div className="van-dialog__content">
                //         <div className="van-dialog__message van-dialog__message dialog__container-title" style={{font-size: ".48rem", fontWeight: "700", color: "#fff", }}><h1>Do you want to log out?</h1></div>
                //     </div>
                //     <div className="van--top van-dialog__footer van-dialog__footer--buttons">
                //         <button className="van-button van-button--default van-button--large van-dialog__cancel" style={{width: "3.12rem", height: "1.06667rem", color: "#fff", fontSize: ".42667rem", textAlign: "center", borderRadius: "9rem", border: "0.01333rem solid #2979F2",background: "transparent", }}>
                //             <div className="van-button__content">
                //                 <span className="van-button__text">Cancel</span>
                //             </div>
                //         </button>
                //         <button className="van-button van-button--default van-button--large van-dialog__confirm van-hairline--left" style={{ width: "4.34667rem", height: "1.06667rem", fontSize: ".42667rem", textAlign: "center", borderRadius: "9rem", border: "0.01333rem solid #2979F2", color: "#fff", fontWeight: "700", background: "linear-gradient(180deg,#2AAAF3 0%,#2979F2 100%)" }}>
                //             <div className="van-button__content">
                //                 <span className="van-button__text">Confirm</span>
                //             </div>
                //         </button>
                //     </div>
                // </div>   
            }
      
    </>
  )
}

export default ProfileList
