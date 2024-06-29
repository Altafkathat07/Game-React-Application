import about from "../../assets/images/nbg_about.webp";
import { Link } from "react-router-dom";

function AboutContent() {
  return (
    <>
      <div data-v-439e6f58="" className="banner">
                <img data-v-439e6f58="" width="100%" height="230px" src={about} className="" />
                <div data-v-439e6f58="" className="com">
                  
                  
                    {/* <div data-v-439e6f58="" className="number">V2</div> */}
                </div>
            </div>
            <div data-v-439e6f58="" className="list m-t-20">
                <Link to="/privacy-agreement">
                <div data-v-439e6f58="" className="item c-row c-row-between c-row-middle">
                    <div data-v-439e6f58="" className="name">Privacy Policy</div>
                    <i data-v-439e6f58="" className="van-icon van-icon-arrow">
                        
                    </i>
                </div>
                </Link>
                <Link to="/risk-disclosure-agreement">
                <div data-v-439e6f58="" className="item c-row c-row-between c-row-middle">
                    <div data-v-439e6f58="" className="name">Risk Disclosure Agreement</div>
                    <i data-v-439e6f58="" className="van-icon van-icon-arrow">
                        
                    </i>
                </div>
                </Link>
            </div>
    </>
  )
}

export default AboutContent
