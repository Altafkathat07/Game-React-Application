import game1 from "../../assets/images/logo-wingo.webp";
import game2 from "../../assets/images/logo-lottery.webp";
import game3 from "../../assets/images/logo-k333.webp";
import game4 from "../../assets/images/lotterycategory_20231215033454m1k3.png";

function GameSection() {
  return (
    <>

      <div className="van-tabs__content">
						<div data-v-432e6ed0="" role="tabpanel" className="c-row-between van-tab__pane" >
							<div data-v-432e6ed0="" className="gameList m-t-20">
								<div data-v-432e6ed0="" className="item m-b-20 list-games" >
									<div data-v-432e6ed0="" className="info i3">
										<div data-v-432e6ed0="" className="name game"> WIN GO </div>
										<div data-v-432e6ed0="" className="des"> Guess green/purple/red to win the game</div>
										<img data-v-432e6ed0="" width="120px" height="85px"
											src={game1} className="img m-r-5" />
									</div>
									{/* <div data-v-432e6ed0="" className="userList">
										<div data-v-39efd474="" data-v-432e6ed0="" className="gomeList">
											<div data-v-39efd474="" className="list">
												<div data-v-39efd474="" className="swpier van-swipe">
													<div className="van-swipe__track van-swipe__track--vertical"
														id="wingo">
														
													</div>
												</div>
											</div>
										</div>
									</div> */}
								</div>
								
								<div data-v-432e6ed0="" className="item m-b-20 list-games" >
									<div data-v-432e6ed0="" className="info i2">
										<div data-v-432e6ed0="" className="name game"> 5D </div>
										<div data-v-432e6ed0="" className="des"> Guess the number/big/small/odd/even </div>
										<img data-v-432e6ed0="" width="120px" height="85px"
											src={game2} className="img m-r-5" />
									</div>
									{/* <div data-v-432e6ed0="" className="userList">
										<div data-v-39efd474="" data-v-432e6ed0="" className="gomeList">
											<div data-v-39efd474="" className="list">
												<div data-v-39efd474="" className="swpier van-swipe">
													<div className="van-swipe__track van-swipe__track--vertical"
														id="k5d">
														
													</div>
												</div>
											</div>
										</div>
									</div> */}
								</div>
								<div data-v-432e6ed0="" className="item m-b-20 list-games" >
									<div data-v-432e6ed0="" className="info i4">
										<div data-v-432e6ed0="" className="name game" >K3</div>
										<div data-v-432e6ed0="" className="des"> Guess the number/big/small/odd/even </div>
										<img data-v-432e6ed0="" width="120px" height="85px" src={game3}
											className="img m-r-5" />
									</div>
									{/* <div data-v-432e6ed0="" className="userList">
										<div data-v-39efd474="" data-v-432e6ed0="" className="gomeList">
											<div data-v-39efd474="" className="list">
												<div data-v-39efd474="" className="swpier van-swipe">
													<div className="van-swipe__track van-swipe__track--vertical"
														id="k3">
														
													</div>
												</div>
											</div>
										</div>
									</div> */}
								</div>

                                <div data-v-432e6ed0="" className="item m-b-20 list-games" >
									<div data-v-432e6ed0="" className="info i8">
										<div data-v-432e6ed0="" className="name game" >TRX WIN</div>
										<div data-v-432e6ed0="" className="des"> Guess the number/big/small/odd/even </div>
										<img data-v-432e6ed0="" width="120px" height="85px" src={game4}
											className="img m-r-5" />
									</div>
									{/* <div data-v-432e6ed0="" className="userList">
										<div data-v-39efd474="" data-v-432e6ed0="" className="gomeList">
											<div data-v-39efd474="" className="list">
												<div data-v-39efd474="" className="swpier van-swipe">
													<div className="van-swipe__track van-swipe__track--vertical"
														id="k3">
														
													</div>
												</div>
											</div>
										</div>
									</div> */}
								</div>
								
							</div>
						</div>
					</div>
    </>
  )
}

export default GameSection
