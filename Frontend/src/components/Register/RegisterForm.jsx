import passImg from '../../assets/images/password.png'
import phoneImg from '../../assets/images/phone.png'
import InviteImg from '../../assets/images/invite.png'

function RegisterForm() {
  return (
    <>
      <div data-v-7ee4aaeb="" className="forgot-box">
        
        <form action="http://localhost:8888/api/webapi/register" method="post">

            <div data-v-7ee4aaeb="" className="mian-from m-t-20">
                <div data-v-7ee4aaeb="" className="lab">Phone number format:<span data-v-7ee4aaeb="">+91</span>
                </div>
                <div data-v-7ee4aaeb="" className="item c-row c-row-center c-row-middle m-t-15 m-b-30 first">
                    <div data-v-7ee4aaeb="" className="c-row number">
                        <span data-v-7ee4aaeb="" className="c-row c-row-middle-center">
                            <img data-v-7ee4aaeb="" height="22px" width="15px" src={phoneImg} className="mobile" />
                        </span>
                        <div data-v-7ee4aaeb="" className="p-l-5">+91</div>
                    </div>
                    <input data-v-7ee4aaeb="" id="username" name="username" type="text" maxLength="12" placeholder="Phone number" />
                </div>
                <div data-v-7ee4aaeb="" className="item c-row c-row-center c-row-middle m-b-30">
                    <span data-v-7ee4aaeb="" className="c-row c-row-middle-center">
                        <img data-v-7ee4aaeb="" height="20px" width="18px" src={passImg} className="password" />
                    </span>
                    <input data-v-d8986e5e="" id="password" name="pwd" data-v-7ee4aaeb="" type="password" placeholder="Password" className="pw-input" />
                </div>
                <div data-v-7ee4aaeb="" className="item c-row c-row-center c-row-middle">
                    <span data-v-7ee4aaeb="" className=" c-row c-row-middle-center">
                        <img data-v-7ee4aaeb="" src={InviteImg} className="code" />
                    </span>
                    <input data-v-7ee4aaeb="" id="invite" name="invitecode" type="text" placeholder="Invitation code" />
                </div>
                <div data-v-7ee4aaeb="" className="c-row c-row-middle">
                    <div data-v-7ee4aaeb="" role="checkbox" tabIndex="0" aria-checked="true" className="van-checkbox">
                        <div className="van-checkbox__icon van-checkbox__icon--square van-checkbox__icon--checked">
                            <i className="van-icon van-icon-success"></i>
                        </div>
                        <span className="van-checkbox__label">
                            <div data-v-7ee4aaeb="" className="agree p-r-10">I agree</div>
                        </span>
                    </div>
                    <div data-v-7ee4aaeb="" className="txt">Privacy policy</div>
                </div>
                <div data-v-7ee4aaeb="" className="mian-btn m-t-40">
                    <button data-v-7ee4aaeb="" type='submit' id="submit" className="gradient van-button van-button--default van-button--normal van-button--block van-button--round">
                        <div data-v-7ee4aaeb="" className="van-button__content">
                            <span data-v-7ee4aaeb="" className="van-button__text">
                                <span data-v-7ee4aaeb="">Register</span>
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </form>
      </div>
    </>
  )
}

export default RegisterForm
