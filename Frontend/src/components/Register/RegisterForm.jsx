import phoneImg from '../../assets/images/cellphone.png'
import passImg from '../../assets/images/lock.png'
import eye from '../../assets/images/eye.png'
import invite from '../../assets/images/invitecode.png'
import { Link } from 'react-router-dom'

function RegisterForm() {
  return (
    <>
      <div data-v-8752c961="" className="login__container-form">
        <form action="/api/webapi/register" method="post">
            <div data-v-8752c961="" className="tab-content activecontent">
                <div data-v-0ce8d964="" data-v-8752c961="" className="signIn__container">
                    <div data-v-93f53084="" data-v-0ce8d964="" className="phoneInput__container">
                        <div data-v-93f53084="" className="phoneInput__container-label">
                            <img data-v-93f53084="" src={phoneImg} className="phoneInput__container-label__icon" />
                            <span data-v-93f53084="">Phone number</span>
                        </div>
                        <div data-v-93f53084="" className="phoneInput__container-input">
                            <div data-v-6f85c91a="" data-v-93f53084="" className="dropdown">
                                <div data-v-6f85c91a="" className="dropdown__value">
                                    <span data-v-6f85c91a="">+91</span>
                                    <i data-v-6f85c91a="" className="van-badge__wrapper van-icon van-icon-arrow-down"></i>
                                </div>
                                {/* <div data-v-6f85c91a="" className="dropdown__list">
                                    <div data-v-6f85c91a="" className="dropdown__list-item">
                                        <span data-v-6f85c91a="">+1</span> USA</div>
                                        <div data-v-6f85c91a="" className="dropdown__list-item">
                                            <span data-v-6f85c91a="">+66</span> Thailand</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item"><span data-v-6f85c91a="">+62</span> Indonesia</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item"><span data-v-6f85c91a="">+95</span> Myanmar</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item"><span data-v-6f85c91a="">+971</span> United Arab Emirates (‫الإمارات العربية المتحدة‬‎)</div><div data-v-6f85c91a="" className="dropdown__list-item"><span data-v-6f85c91a="">+54</span> Argentina</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item"><span data-v-6f85c91a="">+880</span> Bangladesh (বাংলাদেশ)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item"><span data-v-6f85c91a="">+975</span> Bhutan (འབྲུག)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item"><span data-v-6f85c91a="">+267</span> Botswana</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item"><span data-v-6f85c91a="">+1</span> Canada</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item"><span data-v-6f85c91a="">+235</span> Chad (Tchad)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+269</span> Comoros (‫جزر القمر‬‎)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+20</span> Egypt (‫مصر‬‎)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+251</span> Ethiopia</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+33</span> France</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+995</span> Georgia (საქართველო)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+233</span> Ghana (Gaana)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item active">
                                                <span data-v-6f85c91a="">+91</span> India (भारत)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+39</span> Italy (Italia)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+7</span> Kazakhstan (Казахстан)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+254</span> Kenya</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+231</span> Liberia</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+218</span> Libya (‫ليبيا‬‎)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+212</span> Morocco (‫المغرب‬‎)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+977</span> Nepal (नेपाल)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+234</span> Nigeria</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+92</span> Pakistan (‫پاکستان‬‎)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+51</span> Peru (Perú)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+7</span> Russia (Россия)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+250</span> Rwanda</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+27</span> South Africa</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+94</span> Sri Lanka (ශ්‍රී ලංකාව)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+249</span> Sudan (‫السودان‬‎)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+255</span> Tanzania</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+90</span> Turkey (Türkiye)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+39</span> Vatican City (Città del Vaticano)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+212</span> Western Sahara (‫الصحراء الغربية‬‎)</div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+260</span> Zambia </div>
                                            <div data-v-6f85c91a="" className="dropdown__list-item">
                                                <span data-v-6f85c91a="">+263</span> Zimbabwe </div>
                                </div> */}
                            </div>
                            <input data-v-93f53084="" type="text" name="username" placeholder="Please enter the phone number" autoComplete="on" required />
                        </div>
                    </div>
                    <div data-v-57d49070="" data-v-0ce8d964="" className="passwordInput__container">
                    
                        <div data-v-57d49070="" className="passwordInput__container-input">
                            <input data-v-57d49070="" id="otp" type="text" name='otp' placeholder="Please Enter OTP" maxLength="32" autoComplete="on" required /><button type="submit" className='getOtp'>Get OTP</button>
                        </div>
                    </div>
                    <div data-v-57d49070="" data-v-0ce8d964="" className="passwordInput__container">
                        <div data-v-57d49070="" className="passwordInput__container-label">
                            <img data-v-57d49070="" className="passwordInput__container-label__icon" data-origin="https://www.bigdaddygame2.com/assets/png/password-b827c2b3.png" src={passImg} />
                            <span data-v-57d49070="">Password</span>
                        </div>
                        <div data-v-57d49070="" className="passwordInput__container-input">
                            <input data-v-57d49070="" id="passwordfield" type="password" name='pwd' placeholder="Please enterPassword" maxLength="32" autoComplete="on" required />
                            <img data-v-57d49070="" id="eyeicon" src={eye} className="eye" />
                        </div>
                    </div>
                    <div data-v-57d49070="" data-v-0ce8d964="" className="passwordInput__container">
                        <div data-v-57d49070="" className="passwordInput__container-label">
                            <img data-v-57d49070="" className="passwordInput__container-label__icon" data-origin="https://www.bigdaddygame2.com/assets/png/password-b827c2b3.png" src={invite} />
                            <span data-v-57d49070="">Invite Code</span>
                        </div>
                        <div data-v-57d49070="" className="passwordInput__container-input">
                            <input data-v-57d49070="" id="invitecode" type="text" name='invitecode' placeholder="Please Invite Code" maxLength="32" autoComplete="on" required />
                        </div>
                    </div> 
                    <div data-v-0ce8d964="" className="signIn__container-remember">
                        <div data-v-0ce8d964="" role="checkbox" className="van-checkbox" tabIndex="0" aria-checked="true">
                            <div className="van-checkbox__icon van-checkbox__icon--round van-checkbox__icon--checked"><i className="van-badge__wrapper van-icon van-icon-success" ></i></div>
                            <span className="van-checkbox__label">I have read and agree  <Link to="/privacy-agreement"><span data-v-f2791930="">【Privacy Agreement】</span></Link> </span>
                        </div>
                
                    </div>
                    <div className="alert-toast"></div>
        
                    <div data-v-0ce8d964="" className="signIn__container-button">
                        <button type='submit' data-v-0ce8d964="" className="active">Register</button>
                      <Link to="/login"><button data-v-0ce8d964="" className="register"> <span> I have an account </span> Login</button></Link>
                    </div>
                    <div data-v-0ce8d964="" className="signIn_footer">
        
                        <div data-v-0ce8d964="" className="forgetcon" >
                            <div data-v-0ce8d964="" className="forgetbg"></div>
                            <div data-v-0ce8d964="" className="font24">Forgot password</div>
                        </div>
            
                        <div data-v-0ce8d964="" className="customcon" >
                            <div data-v-0ce8d964="" className="custombg"></div>
                            <div data-v-0ce8d964="" className="font24">Customer Service</div>
                        </div>
        
                    </div>
        
                    {/* <div data-v-b9e16d43="" data-v-0ce8d964="" className="dialog inactive">
                        <div data-v-b9e16d43="" className="dialog__container" role="dialog" tabIndex="0">
                            <div data-v-b9e16d43="" className="dialog__container-img">
                                <img data-v-b9e16d43="" alt="" className="" data-origin="https://www.bigdaddygame2.com/assets/png/orderCancelWarn-93894f35.png" src="./index_files/orderCancelWarn-93894f35.png" />
                            </div>
                            <div data-v-b9e16d43="" className="dialog__container-title">
                                <h1 data-v-b9e16d43="">Account has been locked</h1>
                            </div>
                            <div data-v-b9e16d43="" className="dialog__container-content">
                                <div data-v-0ce8d964="" className="idlockTip">
                                    You have entered the wrong password 10 times in a row 
                                    <br data-v-0ce8d964="" />
                                    Contact customer service to unlock
                                </div>
                            </div>
                            <div data-v-b9e16d43="" className="dialog__container-footer">
                                <button data-v-0ce8d964="" className="dialogBtn">Cancel</button>
                                <button data-v-0ce8d964="" className="dialogBtn">
                                <img data-v-0ce8d964="" src="./index_files/iconservr-248f27d9.png" /> 
                                Contact customer service
                                </button>
                                <div data-v-0ce8d964="" className="dialogClose">
                                    <img data-v-0ce8d964="" className="dialogBtnClose" data-origin="https://www.bigdaddygame2.com/assets/png/close-7b93ef94.png" src="./index_files/close-7b93ef94.png" />
                                </div>
                            </div>
                        </div>
                        <div data-v-b9e16d43="" className="dialog__outside"></div>
                    </div> */}
                    <div data-v-5acdbb67="" data-v-0ce8d964="" className="popups"></div>
                </div>
            </div>
        </form>
            <div data-v-8752c961="" className="tab-content">
                <div data-v-5d3a4ff1="" data-v-8752c961="" className="signIn__container">
                    <div data-v-144f0059="" data-v-5d3a4ff1="" className="emailcontainer">
                        <div data-v-144f0059="" className="emailinput__container">
                            <div data-v-144f0059="" className="emailinput__container-label">
                                <img data-v-144f0059="" src="./index_files/emailnumber-2c31d006.png" className="emailinput__container-label__icon" />
                                <span data-v-144f0059="">Email / Account Log in</span>
                            </div>
                            <div data-v-144f0059="" className="emailinput__container-input">
                                <input data-v-144f0059="" type="text" name="userEmail" maxLength="250" placeholder="please input your email " />
                            </div>
                        </div>
                    </div>
                    <div data-v-57d49070="" data-v-5d3a4ff1="" className="passwordInput__container">
                        <div data-v-57d49070="" className="passwordInput__container-label">
                            <img data-v-57d49070="" className="passwordInput__container-label__icon" data-origin="https://www.bigdaddygame2.com/assets/png/password-b827c2b3.png" src="/assets/png/password-12e0a3fc.png" />
                            <span data-v-57d49070="">Password</span>
                        </div>
                        <div data-v-57d49070="" className="passwordInput__container-input">
                            <input data-v-57d49070="" type="password" placeholder="Please enterPassword" maxLength="32" autoComplete="on" />
                            <img data-v-57d49070="" src="assets/png/eyeInvisible-821d9d16.png" className="eye" />
                        </div>
                    </div>
                    <div data-v-5d3a4ff1="" className="signIn__container-remember">
                        <div data-v-5d3a4ff1="" role="checkbox" className="van-checkbox" tabIndex="0" aria-checked="false">
                            <div className="van-checkbox__icon van-checkbox__icon--round">
                                <i className="van-badge__wrapper van-icon van-icon-success"></i>
                            </div>
                            <span className="van-checkbox__label">Remember password</span>
                        </div>
                    </div>
                    <div data-v-5d3a4ff1="" className="signIn__container-button">
                        <button data-v-5d3a4ff1="" className="">Log in</button>
                        <button data-v-5d3a4ff1="" className="register">Register</button>
                    </div>
                    <div data-v-5d3a4ff1="" className="signIn_footer">
                        <div data-v-5d3a4ff1="" className="forgetcon">
                            <div data-v-5d3a4ff1="" className="forgetbg"></div>
                            <div data-v-5d3a4ff1="" className="font24">Forgot password</div>
                        </div>
                        <div data-v-5d3a4ff1="" className="customcon">
                            <div data-v-5d3a4ff1="" className="custombg"></div>
                            <div data-v-5d3a4ff1="" className="font24">Customer Service</div>
                        </div>
                    </div>
                    <div data-v-b9e16d43="" data-v-5d3a4ff1="" className="dialog inactive">
                        <div data-v-b9e16d43="" className="dialog__container" role="dialog" tabIndex="0">
                            <div data-v-b9e16d43="" className="dialog__container-img">
                                <img data-v-b9e16d43="" alt="" className="" data-origin="https://www.bigdaddygame2.com/assets/png/orderCancelWarn-93894f35.png" src="./index_files/orderCancelWarn-93894f35.png" />
                            </div>
                            <div data-v-b9e16d43="" className="dialog__container-title">
                                <h1 data-v-b9e16d43="">Account has been locked</h1>
                            </div>
                            <div data-v-b9e16d43="" className="dialog__container-content">
                                <div data-v-5d3a4ff1="" className="idlockTip">
                                    You have entered the wrong password 10 times in a row     
                                    <br data-v-5d3a4ff1="" />
                                    Contact customer service to unlock
                                </div>
                            </div>
                            <div data-v-b9e16d43="" className="dialog__container-footer">
                                <button data-v-5d3a4ff1="" className="dialogBtn">Cancel</button>
                                <button data-v-5d3a4ff1="" className="dialogBtn">
                                    <img data-v-5d3a4ff1="" src="./index_files/iconservr-248f27d9.png" /> 
                                    Contact customer service
                                </button>
                            </div>
                        </div>
                        <div data-v-b9e16d43="" className="dialog__outside"></div>
                    </div>
                    <div data-v-5acdbb67="" data-v-5d3a4ff1="" className="popups"></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default RegisterForm
