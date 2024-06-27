
import { useState } from "react";
import { showAlert } from "../../AlertMassWrapper";
function PopupForm() {
    const [message, setMessage] = useState('');
    
    const handleChange = (e) => {
        setMessage(e.target.value);
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/api/webapi/admin/pop-up', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            showAlert(data.message);
            setMessage('');
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
        <div className="row  p-4 bg-light">
            <div className="col-8">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter Popup message  </label>
                        <input type="text" name="message" value={message} className="form-control fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} placeholder="Enter popup message"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default PopupForm
