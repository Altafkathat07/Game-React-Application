import passImg from '../../assets/images/password.png'
import phoneImg from '../../assets/images/phone.png'
import { Link } from 'react-router-dom'

function FormSection() {
  return (
    <>
      <div data-v-a0753f48="" className="login-box" >
                <div data-v-a0753f48="" className="tit">Login</div>
                <form action="http://localhost:8888/api/webapi/login" method="post">
                <div data-v-a0753f48="" className="mian-from">
                    <div data-v-a0753f48="" className="lab">
                         <span data-v-a0753f48=""> </span>
                    </div>
                    <div data-v-a0753f48="" className="item c-row c-row-center first">
                        <div data-v-a0753f48="" className="c-row number">
                            <span data-v-a0753f48="" className="c-row c-row-middle-center">
                                <img data-v-a0753f48="" src={phoneImg} className="mobile" />
                            </span>
                            <div data-v-a0753f48="" className="p-l-5">+91</div>
                        </div>
                        <input data-v-a0753f48="" maxLength="16" type="text" placeholder="Phone Number" name='username' />
                    </div>
                    <div data-v-a0753f48="" className="item c-row c-row-center">
                        <span data-v-a0753f48="" className=" c-row c-row-middle-center">
                            <img data-v-a0753f48="" src={passImg} className="password" />
                        </span>
                        <input data-v-d8986e5e="" data-v-a0753f48="" type="password"  name="pwd" placeholder="Password"  className="pw-input" />
                    </div>
                    <div data-v-a0753f48="" className="mian-btn">
                        <button type='submit' data-v-a0753f48=""
                            className="gradient van-button van-button--default van-button--normal van-button--block van-button--round"
                           >
                            <div data-v-a0753f48="" className="van-button__content">
                                <span data-v-a0753f48="" className="van-button__text">
                                    <span data-v-a0753f48="">Login</span>
                                </span>
                            </div>
                        </button>
                        <div data-v-a0753f48="" className="text m-t-15 c-row c-row-middle-center">
                           <Link to="/register" className='btnlink'> <span data-v-a0753f48="" className="p-r-5" >Register</span></Link>｜
                           <Link to="/forgot" className='btnlink'> <span data-v-a0753f48="" className="p-r-5" >Forget Password</span></Link>｜
                            
                        </div>
                    </div>
                </div>
                </form>
            </div>
    </>
  )
}

export default FormSection
