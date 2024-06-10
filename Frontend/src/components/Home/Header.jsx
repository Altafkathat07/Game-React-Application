import down from "../../assets/images/down.png"
import msg from "../../assets/images/msgimage.png"
import {Link} from "react-router-dom"
function Header() {
  return (
    <>
       <div data-v-106b99c8="" data-v-432e6ed0=""className="navbar">
				<div data-v-106b99c8=""className="navbar-left">
				<div data-v-432e6ed0="" data-v-106b99c8=""className="c-row c-row-middle-center">
					<Link to="/"><h3 style={{color: "#fff"}}>Game</h3></Link>
					</div>
				</div>
				<div data-v-106b99c8=""className="navbar-title">
					
				</div>
				<div data-v-106b99c8=""className="navbar-right" >
					<div data-v-432e6ed0="" data-v-106b99c8=""className="c-row c-row-middle-center msg">
						<img data-v-432e6ed0="" data-v-106b99c8="" height="40px" width="40px" src={msg}
							className="down" />
					</div>
					<div data-v-432e6ed0="" data-v-106b99c8=""className="c-row c-row-middle-center">
						<img data-v-432e6ed0="" data-v-106b99c8="" height="30px" width="30px" src={down}
							className="down" />
					</div>
				</div>
			</div>
    </>
  )
}

export default Header
