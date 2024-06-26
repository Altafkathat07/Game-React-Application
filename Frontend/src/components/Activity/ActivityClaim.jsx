// import { useState } from "react";
import img from "../../assets/images/tu.webp"
import { Link } from "react-router-dom"
import { showAlert } from "../AlertMassWrapper";

function ActivityClaim() {
    // const [showMessage, setShowMessage] = useState(true);
    // const [blockClick, setBlockClick] = useState(false);


    const handleClick = (e) => {
      e.preventDefault();
      const data = e.currentTarget.getAttribute('data-dpr');
      const wd = e.currentTarget;
    
      fetch('/api/webapi/activity_check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: data }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          if (data.status === false) {
            showAlert('Failed : ' + data.message);
            return;
          }
          wd.classList.remove('action');
          wd.querySelector('.txt').textContent = 'Received';
          showAlert('Success: ' + data.message);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          showAlert('There was a problem with the fetch operation: ' + error.message);
        });
    };
    
  return (
    <>
       <div data-v-11ffe290="" className="check-box">
                <div data-v-11ffe290="" className="check-header c-tc">
                    <h4 data-v-11ffe290="" className="tit m-b-5">Signed today</h4>
                   
                    <div data-v-11ffe290="" className="c-row c-row-middle-center p-l-20 p-r-20">
                       <Link to="/activity/rule"> 
                            <div data-v-11ffe290="">
                                <p data-v-11ffe290="" className="txt" >Rule</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div data-v-11ffe290="" className="list c-row c-flex-warp">
                    <div data-v-11ffe290="" data-dpr="1" className="item action" onClick={handleClick}>
                        
                        <div data-v-11ffe290="" className="num c-row c-row-middle c-row-center"> 25<span
                                data-v-11ffe290="" className="des">₹</span></div><img data-v-11ffe290=""
                            src={img} className="imgCoin" /><span data-v-11ffe290="" className="txt">Get it now</span>
                        
                    </div>
                    <div data-v-11ffe290="" data-dpr="2" className="item action" onClick={handleClick}>
                        
                        <div data-v-11ffe290="" className="num c-row c-row-middle c-row-center"> 30<span
                                data-v-11ffe290="" className="des">₹</span></div><img data-v-11ffe290=""
                            src={img} className="imgCoin" /><span data-v-11ffe290="" className="txt">Get it now</span>
                        
                    </div>
                    <div data-v-11ffe290="" data-dpr="3" className="item action" onClick={handleClick}>
                        
                        <div data-v-11ffe290="" className="num c-row c-row-middle c-row-center"> 35<span
                                data-v-11ffe290="" className="des">₹</span></div><img data-v-11ffe290=""
                            src={img} className="imgCoin" /><span data-v-11ffe290="" className="txt">Get it now</span>
                        
                    </div>
                    <div data-v-11ffe290="" data-dpr="4" className="item action" onClick={handleClick}>
                        
                        <div data-v-11ffe290="" className="num c-row c-row-middle c-row-center"> 40<span
                                data-v-11ffe290="" className="des">₹</span></div><img data-v-11ffe290=""
                            src={img} className="imgCoin" /><span data-v-11ffe290="" className="txt">Get it now</span>
                        
                    </div>
                    <div data-v-11ffe290="" data-dpr="5" className="item action" onClick={handleClick}>
                        
                        <div data-v-11ffe290="" className="num c-row c-row-middle c-row-center"> 45<span
                                data-v-11ffe290="" className="des">₹</span></div><img data-v-11ffe290=""
                            src={img} className="imgCoin" /><span data-v-11ffe290="" className="txt" >Get it now</span>
                        
                    </div>
                    <div data-v-11ffe290="" data-dpr="6" className="item action" onClick={handleClick}>
                        
                        <div data-v-11ffe290="" className="num c-row c-row-middle c-row-center"> 50<span
                                data-v-11ffe290="" className="des">₹</span></div><img data-v-11ffe290=""
                            src={img} className="imgCoin" /><span data-v-11ffe290="" className="txt" >Get it now</span>
                        
                    </div>
                    <div data-v-11ffe290="" data-dpr="7" className="item action" onClick={handleClick}>
                        
                        <div data-v-11ffe290="" className="num c-row c-row-middle c-row-center"> 65<span
                                data-v-11ffe290="" className="des">₹</span></div><img data-v-11ffe290=""
                            src={img} className="imgCoin" /><span data-v-11ffe290="" className="txt" >Get it now</span>
                        
                    </div>
                </div>
            </div>
    </>
  )
}

export default ActivityClaim
