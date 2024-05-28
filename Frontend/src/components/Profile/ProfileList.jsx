import { useState } from 'react'
import img1 from '../../assets/images/s1.png'
import img2 from '../../assets/images/s2.png'
import img3 from '../../assets/images/s3.png'
import img4 from '../../assets/images/s4.png'
import img5 from '../../assets/images/s5.png'
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
                                <img data-v-21f3500a="" width="24px" height="24px" src={img1} className="img" />
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
                    <div data-v-21f3500a="" className="item c-row c-row-between" >
                        <div data-v-21f3500a="" className="c-row c-row-middle"><img data-v-21f3500a="" width="24px"
                                height="24px" src={img1} className="img" /><span data-v-21f3500a="" className="name">Security and Safety</span></div>
                        <div data-v-21f3500a="" className="c-row c-row-middle"><i data-v-21f3500a=""
                                className="van-icon van-icon-arrow" >
                                
                            </i></div>
                    </div>
                    
                    
                    <div data-v-21f3500a="" className="item c-row c-row-between" >
                        <div data-v-21f3500a="" className="c-row c-row-middle"><img data-v-21f3500a="" width="24px"
                                height="24px" src={img2} className="img" /><span data-v-21f3500a="" className="name">Redeem Code</span></div>
                        <div data-v-21f3500a="" className="c-row c-row-middle"><i data-v-21f3500a=""
                                className="van-icon van-icon-arrow" >
                                
                            </i></div>
                    </div>
                    <div data-v-21f3500a="" className="item c-row c-row-between" >
                        <div data-v-21f3500a="" className="c-row c-row-middle"><img data-v-21f3500a="" width="24px"
                                height="24px" src={img3} className="img" /><span data-v-21f3500a=""
                                className="name">Guide for beginners</span>
                        </div>
                        <div data-v-21f3500a="" className="c-row c-row-middle"><i data-v-21f3500a=""
                                className="van-icon van-icon-arrow" >
                                
                            </i></div>
                    </div>
                    <div data-v-21f3500a="" className="item c-row c-row-between" >
                        <div data-v-21f3500a="" className="c-row c-row-middle"><img data-v-21f3500a="" width="24px"
                                height="24px" src={img4} className="img" /><span data-v-21f3500a="" className="name">About Us</span></div>
                        <div data-v-21f3500a="" className="c-row c-row-middle">
                            <i data-v-21f3500a=""
                                className="van-icon van-icon-arrow" >
                                
                            </i></div>
                    </div>
                    <div data-v-21f3500a="" className="item c-row c-row-between" >
                        <div data-v-21f3500a="" className="c-row c-row-middle"><img data-v-21f3500a="" width="24px"
                                height="24px" src={img5} className="img" /><span data-v-21f3500a=""
                                className="name">Customer Support Online 24/7</span></div>
                        <div data-v-21f3500a="" className="c-row c-row-middle">
                            <i data-v-21f3500a=""
                                className="van-icon van-icon-arrow" >
                                
                            </i></div>
                    </div>
                </div>
      
    </>
  )
}

export default ProfileList
