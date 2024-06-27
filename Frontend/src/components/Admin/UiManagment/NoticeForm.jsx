/* eslint-disable no-undef */
import { useState } from "react";
import { showAlert } from "../../AlertMassWrapper";

function NoticeForm() {
    const [notices, setNotice] = useState('');

  const handleChange = (e) => {
    setNotice(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/webapi/admin/notice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ notices }),
      });

      const data = await response.json();

      if (response.ok) {
        showAlert(data.message);
        setNotice('')
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
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter Notice </label>
                        <input type="text" name="notices" value={notices} onChange={handleChange} className="form-control fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Notice for User"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
   
      
    </>
  )
}

export default NoticeForm
