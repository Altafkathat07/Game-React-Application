import { useState } from 'react';
import '../../assets/home/css/index.css'
import '../../assets/home/css/login.css'
import '../../assets/admin/css/admin.css'
import Header from "../Home/Header"
import Footer from "../Home/Footer"
import img from "../../assets/images/pay_icon_debitcard_red.webp"
import { showAlert } from '../AlertMassWrapper';
import { useNavigate } from 'react-router-dom';

function UserBank() {
    const [inputValue, setInputValue] = useState('');
    const [formData, setFormData] = useState({
        bankname: '',
        username: '',
        account: '',
        ifsc: '',
        phone: ''
    });
    
    const navigate = useNavigate();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
    
        if (name === 'ifsc') {
          setInputValue(value.toUpperCase());
        }
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/api/webapi/add-bank', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
    
          if (data.status === false) {
            showAlert('success : ' + data.message);
            navigate('/withdraw');
            return;
          }
    
          showAlert('success : ' + data.message);
          navigate('/withdraw');
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
          showAlert('There was a problem with the fetch operation: ' + error.message, 'error', 'Error');
        }
      };
  return (
    <>
 <div data-v-8cd483ca="" className="home mian game" style={{background:"#fca552"}}>
            <div data-v-8cd483ca="" className="menu-box">
              <Header />
              <form onSubmit={handleSubmit}>
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
                                    className="ipt" name='bankname' value={formData.bankname} onChange={handleChange} />
                            </div>
                        </div>
                        <div data-v-7aa0f84a="" className="item">
                            <div data-v-7aa0f84a="" className="lab">Your Full Name</div>
                            <div data-v-7aa0f84a="" className="input">
                                <input data-v-7aa0f84a="" type="text" placeholder="Enter Your Bank Name"
                                    className="ipt" name='username' value={formData.username} onChange={handleChange} />
                            </div>
                        </div>
                        <div data-v-7aa0f84a="" className="item">
                            <div data-v-7aa0f84a="" className="lab">Bank Account number</div>
                            <div data-v-7aa0f84a="" className="input">
                                <input data-v-7aa0f84a="" type="number" placeholder="Enter Your Bank Account Number"
                                    className="ipt" name='account' value={formData.account} onChange={handleChange} />
                            </div>
                        </div>
                        
                        <div data-v-7aa0f84a="" className="item">
                            <div data-v-7aa0f84a="" className="lab">IFSC Code</div>
                            <div data-v-7aa0f84a="" className="input">
                                <input data-v-7aa0f84a="" name='ifsc' value={inputValue} onChange={handleChange} type="text" placeholder="Enter Your IFSC Code" className="ipt" />
                            </div>
                        </div>
                        <div data-v-7aa0f84a="" className="item">
                            <div data-v-7aa0f84a="" className="lab">Phone Number</div>
                            <div data-v-7aa0f84a="" className="input">
                                <input data-v-7aa0f84a="" value={formData.phone} onChange={handleChange} name='phone' maxLength="10" type="mob" placeholder="It Is Required" className="ipt" />
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
