import logo from "../../assets/images/down.png"
function Header() {
  return (
    <>
       <div data-v-106b99c8="" data-v-432e6ed0=""className="navbar">
				<div data-v-106b99c8=""className="navbar-left"></div>
				<div data-v-106b99c8=""className="navbar-title">
					<div data-v-432e6ed0="" data-v-106b99c8=""className="c-row c-row-middle-center">
						<h3>Game</h3>
					</div>
				</div>
				<div data-v-106b99c8=""className="navbar-right" >
					<div data-v-432e6ed0="" data-v-106b99c8=""className="c-row c-row-middle-center">
						<img data-v-432e6ed0="" data-v-106b99c8="" height="25px" width="25px" src={logo}
							className="down" />
					</div>
				</div>
			</div>
    </>
  )
}

export default Header
