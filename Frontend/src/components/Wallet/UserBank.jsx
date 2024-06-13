import { useState } from 'react';
import '../../assets/home/css/index.css'
import '../../assets/home/css/login.css'
import '../../assets/admin/css/admin.css'
import Header from "../Home/Header"
import Footer from "../Home/Footer"
import img from "../../assets/images/pay_icon_debitcard_red.webp"

function UserBank() {
        const [inputValue, setInputValue] = useState('');
      
        const handleChange = (event) => {
          setInputValue(event.target.value.toUpperCase());
        };
  return (
    <>
 <div data-v-8cd483ca="" className="home mian game" style={{background:"#fca552"}}>
            <div data-v-8cd483ca="" className="menu-box">
              <Header />
              <form action="/api/webapi/add-bank" method='post'>
                <div data-v-7aa0f84a="" className="bank">
                    <div data-v-7aa0f84a="" className="box">
                        <div data-v-7aa0f84a="" className="c-row m-b-10 c-row-middle mb-3">
                            <div data-v-7aa0f84a="" className="van-image" style={{width: "40px", height: "40px"}}>
                                <img src={img} className="van-image__img" />
                            </div>
                            <div data-v-7aa0f84a="" className="p-l-15 backTitel">Add a bank card</div>
                        </div>
                        <div data-v-7aa0f84a="" className="item">
                            <div data-v-7aa0f84a="" className="lab">Bank name</div>
                            <div data-v-7aa0f84a="" className="input">
                                <input data-v-7aa0f84a="" type="text" placeholder="Enter Your Bank Name"
                                    className="ipt" name='bankname' />
                            </div>
                        </div>
                        <div data-v-7aa0f84a="" className="item">
                            <div data-v-7aa0f84a="" className="lab">Your Full Name</div>
                            <div data-v-7aa0f84a="" className="input">
                                <input data-v-7aa0f84a="" type="text" placeholder="Enter Your Bank Name"
                                    className="ipt" name='username' />
                            </div>
                        </div>
                        <div data-v-7aa0f84a="" className="item">
                            <div data-v-7aa0f84a="" className="lab">Bank Account number</div>
                            <div data-v-7aa0f84a="" className="input">
                                <input data-v-7aa0f84a="" type="number" placeholder="Enter Your Bank Account Number"
                                    className="ipt" name='account' />
                            </div>
                        </div>
                        
                        <div data-v-7aa0f84a="" className="item">
                            <div data-v-7aa0f84a="" className="lab">IFSC Code</div>
                            <div data-v-7aa0f84a="" className="input">
                                <input data-v-7aa0f84a="" name='ifsc' onChange={handleChange} value={inputValue} type="text" placeholder="Enter Your IFSC Code" className="ipt" />
                            </div>
                        </div>
                        <div data-v-7aa0f84a="" className="item">
                            <div data-v-7aa0f84a="" className="lab">Phone Number</div>
                            <div data-v-7aa0f84a="" className="input">
                                <input data-v-7aa0f84a="" name='phone' maxLength="10" type="mob" placeholder="It Is Required" className="ipt" />
                            </div>
                        </div>
                        
                    </div>
                    <div data-v-7aa0f84a="" className="c-row c-row-center m-t-20 bank-btn mb-5">
                        <button data-v-7aa0f84a="" type='submit'
                            className="btn van-button van-button--default van-button--normal van-button--block van-button--round">
                            <div data-v-7aa0f84a="" className="van-button__content">
                                <span data-v-7aa0f84a="" className="van-button__text">
                                    Add a bank card
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
              </form>
              <Footer />
            </div>
          </div>
      
    </>
  )
}

export default UserBank
