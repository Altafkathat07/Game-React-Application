
import { useState } from "react";
import { showAlert } from "../../AlertMassWrapper";

function TermsForm() {
    const [term, setTerm] = useState('');
    
    const handleChange = (e) => {
        setTerm(e.target.value);
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/api/webapi/admin/terms', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ term }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            showAlert(data.message);
            setTerm('');
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
        <div className="row  p-4 bg-light mt-4">
            <div className="col-8">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter Terms And Conditions </label>
                        <textarea name="term" id="" value={term} className="form-control" onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default TermsForm
