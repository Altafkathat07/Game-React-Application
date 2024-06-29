import phoneImg from '../../assets/images/cellphone-35529171.png'
import verifie from '../../assets/images/cellphone-35529171.png'
import InviteImg from '../../assets/images/password-12e0a3fc.png'

function ForgotForm() {
  return (
    <>
       <div data-v-51f72da1="" className="mian forgot">
           
            <div data-v-51f72da1="" className="forgot-box">
                <div data-v-51f72da1="" className="mian-from m-t-20">
                    <div data-v-51f72da1="" className="lab">Phone number format:<span data-v-51f72da1="">+91</span>
                    </div>
                    <div data-v-51f72da1="" className="item c-row c-row-center c-row-middle m-t-15 m-b-30 first">
                        <div data-v-51f72da1="" className="c-row number">
                            <span data-v-51f72da1=""
                                className="c-row c-row-middle-center">
                                <img data-v-51f72da1="" height="22px" width="15px" src={phoneImg} className="mobile" />
                            </span>
                            <div data-v-51f72da1="" className="p-l-5">+91</div>
                        </div>
                        <input data-v-51f72da1="" id="username" type="text" maxLength="12" placeholder="Enter phone number"  />
                    </div>
                    <div data-v-51f72da1="" className="item c-row c-row-center c-row-middle m-b-30">
                        <span data-v-51f72da1=""
                            className="c-row c-row-middle-center">
                            <img data-v-51f72da1="" height="22px" width="15px" src={verifie} className="mobile" /></span>
                            <input data-v-51f72da1="" type="number" id="otp" placeholder="Enter OTP" style={{paddingLeft: "10px"}} />
                            <button data-v-51f72da1="" className="otp">OTP</button>
                        </div>
                    <div data-v-51f72da1="" className="tip"> Did not receive OTP code? Please contact Customer Service</div>
                    <div data-v-51f72da1="" className="item c-row c-row-center c-row-middle m-b-30">
                        <span data-v-51f72da1="" className="c-row c-row-middle-center">
                            <img data-v-51f72da1="" height="20px" width="18px" src={InviteImg} className="password"  />
                        </span>
                        <input data-v-d8986e5e="" id="password" data-v-51f72da1="" placeholder="Enter New Password" className="pw-input" />
                    </div>
                 
                    <div data-v-51f72da1="" className="mian-btn m-t-40"><button data-v-51f72da1="" id="submit"
                            className="gradient van-button van-button--default van-button--normal van-button--block van-button--round"
                            >
                            <div data-v-51f72da1="" className="van-button__content">
                                <span data-v-51f72da1=""
                                    className="van-button__text">
                                    <span data-v-51f72da1="">Submit</span>
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
         
            {/* <div data-v-7692a079="" data-v-51f72da1="" className="Loading c-row c-row-middle-center" style="display: none;">
                <div data-v-7692a079="" className="van-loading van-loading--circular">
                    <span data-v-7692a079="" className="van-loading__spinner van-loading__spinner--circular" style="color: rgb(242, 65, 59);">
                        <svg data-v-7692a079="" viewBox="25 25 50 50" className="van-loading__circular">
                            <circle data-v-7692a079="" cx="50" cy="50" r="20" fill="none"></circle>
                        </svg>
                    </span>
                </div>
            </div> */}
        </div>
    </>
  )
}

export default ForgotForm
