import { useState } from "react";
import { showAlert } from "../AlertMassWrapper";
import gift from "../../assets/images/gift1.png"

function RedeemContent() {
    const [code, setCode] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/webapi/claim-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (response.ok) {
        showAlert(data.message);
        return;
      } else {
        showAlert(data.message);
      }
    } catch (error) {
        showAlert('Failed: ' + error);
        return;
    }
  };
  return (
    <>
        <div data-v-3b4d4aab="" className="redeem-container" >
                <div data-v-3b4d4aab="" className="redeem-container-header">
                    
                    <div data-v-3b4d4aab="" className="redeem-container-header-belly">
                        <img data-v-3b4d4aab="" alt="" className="" src={gift} />
                    </div>
                </div>
                    <form onSubmit={handleSubmit}>
                        <div data-v-3b4d4aab="" className="redeem-container-content">
                            <div data-v-3b4d4aab="" className="redeem-container-receive">
                                <p data-v-3b4d4aab="">Hi</p>
                                <p data-v-3b4d4aab="">We have a gift for you</p>
                                <h4 data-v-3b4d4aab="">Please enter the gift code below</h4>
                                <input data-v-3b4d4aab="" type="text" autoComplete="new-password" name="code" placeholder="Please enter gift code" value={code} onChange={handleChange}/>
                                <button data-v-3b4d4aab="" type="submit">Receive</button>
                            </div>
                        </div>
                    </form>
            </div>
    </>
  )
}

export default RedeemContent
