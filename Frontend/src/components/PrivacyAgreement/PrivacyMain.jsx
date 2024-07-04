import { useState, useEffect } from "react"
import Footer from "../Home/Footer"
import Header from "../Home/Header"
import '../../assets/home/css/index.css'
import '../../assets/home/css/login.css'
import axios from "axios"

function PrivacyMain() {
    const [terms, setTerms] = useState('');
    useEffect(() => {
         axios.get('/api/webapi/admin/privacy-fetching')
         .then(response => {
          const userInfo = response.data.data;
        //   console.log("this is res: " + JSON.stringify(userInfo));
          setTerms(userInfo[0].term);
      })
      .catch(error => console.log(error));
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
