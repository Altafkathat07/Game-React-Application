import { useState } from 'react'
import support from '../../assets/images/supicon.webp'
import secure from '../../assets/images/securityicon.webp'
import guide from '../../assets/images/guideicon.webp'
import about from '../../assets/images/abouticon.webp'
import redeem from '../../assets/images/redeem.webp'
import {Link} from 'react-router-dom'

function ProfileList() {
    const [level, setLevel] = useState(1);
    const fun = () =>{

        setLevel();
    }
  return (
    <>
     <div data-v-21f3500a="" data-v-8cd483ca="" className="list">
                    
                    
                    { level === 1 &&(
                       <Link to="/admin"> <div data-v-21f3500a="" onChange={fun} className="item c-row c-row-between" >
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
      
    </>
  )
}

export default ProfileList
