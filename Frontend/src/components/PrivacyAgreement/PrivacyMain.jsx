import { useState, useEffect } from "react"
import Footer from "../Home/Footer"
import Header from "../Home/Header"
import '../../assets/home/css/index.css'
import '../../assets/home/css/login.css'

function PrivacyMain() {
    const [terms, setTerms] = useState('');
    useEffect(() => {
         fetch('/api/webapi/admin/privacy-fetching')
          .then((res) => {
            if (!res.ok) {
              throw new Error('Network response was not ok ' + res.statusText);
            }
            return res.json();
          })
          .then((data) => {
            // console.log("Data fetched:", data.data[0].term);
            const result = data.data[0].term;
            setTerms(result);
          })
          .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
          });
      }, []);

  return (
    <>
    
		<div data-v-432e6ed0="" className="home mian game">
        <Header />
            <div className="terms">
                <span>
                {terms}
                </span>
            </div>

        <Footer />
    </div>    
      
    </>
  )
}

export default PrivacyMain
