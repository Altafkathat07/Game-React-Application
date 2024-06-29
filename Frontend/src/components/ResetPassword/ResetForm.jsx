import { useState } from 'react';
import eye from '../../assets/images/eye.png'
import { showAlert } from '../AlertMassWrapper';

function ResetForm() {
    const [showPass, setShowPass] = useState(false);
    const [showPass1, setShowPass1] = useState(false);
    const [showPass2, setShowPass2] = useState(false);
    const [formData, setFormData] = useState({
        pwd: '',
        npwd: '',
        cpwd: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/webapi/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Reset password response:'+ data);

            if (data.status === false) {
                showAlert('Failed :'+ data.message);
            } else {
                showAlert(data.message);
                // Optionally, you can reset the form fields after successful submission
                setFormData({
                    pwd: '',
                    npwd: '',
                    cpwd: ''
                });
            }

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            showAlert('Failed : There was a problem with the fetch operation.');
        }
    };

    const toggleShowPassword = () => {
        setShowPass((prevShowPass) => !prevShowPass);
    };   
     const toggleShowPassword1 = () => {
        setShowPass1((prevShowPass) => !prevShowPass);
    };    
    const toggleShowPassword2 = () => {
        setShowPass2((prevShowPass) => !prevShowPass);
    }; 
    
  return (
    <>
       <div data-v-8752c9610="" className="login__container-form reset">
        <form onSubmit={handleSubmit}>
            <div data-v-8752c961="" className="tab-content activecontent">
                <div data-v-0ce8d964="" data-v-8752c961="" className="signIn__container">
                    <div data-v-57d49070="" data-v-0ce8d964="" className="passwordInput__container"> 
                        <div data-v-57d49070="" className="passwordInput__container-input">
                            <input data-v-57d49070="" id="passwordfield1" type={showPass ? "text" : "password"} name='pwd' placeholder="Old Password" maxLength="32" autoComplete="on" onChange={handleChange}  value={formData.pwd} required />
                            <img data-v-57d49070="" id="eyeicon" src={eye} className="eye" onClick={toggleShowPassword} />
                        </div>
                    </div>
                    <div data-v-57d49070="" data-v-0ce8d964="" className="passwordInput__container"> 
                        <div data-v-57d49070="" className="passwordInput__container-input">
                            <input data-v-57d49070="" id="passwordfield1" type={showPass1 ? "text" : "password"} name='npwd' placeholder="New Password" maxLength="32" autoComplete="on" onChange={handleChange}  value={formData.npwd} required />
                            <img data-v-57d49070="" id="eyeicon" src={eye} className="eye"  onClick={toggleShowPassword1}/>
                        </div>
                    </div>
                    <div data-v-57d49070="" data-v-0ce8d964="" className="passwordInput__container"> 
                        <div data-v-57d49070="" className="passwordInput__container-input">
                            <input data-v-57d49070="" id="passwordfield1" type={showPass2 ? "text" : "password"} name='cpwd' placeholder="Confirm Password" maxLength="32" autoComplete="on" onChange={handleChange}  value={formData.cpwd} required />
                            <img data-v-57d49070="" id="eyeicon" src={eye} className="eye" onClick={toggleShowPassword2} />
                        </div>
                    </div>
                </div>
                <button type='submit' data-v-0ce8d964="" className="active" style={{
                        width: '60%',
                        fontSize: '1rem',
                        height: '40px',
                        marginLeft: '20%',
                        background: 'linear-gradient(180deg, rgb(42, 170, 243) 0%, rgb(41, 121, 242) 100%)',
                        border: 'none',
                        borderRadius: '30px',
                    }}>
                 Reset
                </button>
            </div>
        </form>
        </div>
    </>
  )
}

export default ResetForm
