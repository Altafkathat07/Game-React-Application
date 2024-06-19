
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
function BonusForm() {
  const [bonus, setBonus] = useState('');
  const [fr, setFr] = useState('');
  const [ib, setIb] = useState('');
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
        bonus: bonus || undefined,
        fr: fr || undefined,
        ib: ib || undefined
    };

    try {
        const response = await fetch('/api/webapi/admin/setting/bonus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        // Log the entire response object for debugging
        // console.log('Response:', response);

        // Check if the response is OK and content type is JSON
        if (!response.ok) {
            throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Unexpected response format');
        }

        const result = await response.json();

        if (result.status) {
            alert('Successfully submitted');
            // navigate('/main'); // Redirect to /main page
        } else {
            alert('Submission failed: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred: ' + error.message);
    }
};

  return (
    <>
    
    <div className="row  p-4 bg-light">
            <div className="col-8">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter welcome Bonus </label>
                        <input type="text" 
                        name="bonus" 
                        className="form-control fs-5" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter your welcome bonus"  
                        value={bonus}
                        onChange={(e) => setBonus(e.target.value)}
                         />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter First recharge Bonus </label>
                        <input type="text" 
                        name="fr" 
                        className="form-control fs-5" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter your recharge bonus"
                        value={fr}
                        onChange={(e) => setFr(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter Invite Bonus </label>
                        <input type="text" 
                        name="ib" 
                        className="form-control fs-5" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter your invite bonus"
                        value={ib}
                        onChange={(e) => setIb(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
      
    </>
  )
}

export default BonusForm
