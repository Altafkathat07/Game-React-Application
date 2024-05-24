import cp from "../../assets/images/CP.png"
import dz from "../../assets/images/DZ.webp"
import dc from "../../assets/images/DC.webp"
import ty from "../../assets/images/TY.webp"

function HomeCom() {
  return (
    <>
      <div data-v-432e6ed0="" className="home-com">
				<div data-v-432e6ed0="" className="van-tabs van-tabs--line home-tab action">
					<div className="van-tabs__wrap van-hairline--top-bottom">
						<div role="tablist" className="van-tabs__nav van-tabs__nav--line">
							<div role="tab" aria-selected="true" className="van-tab van-tab--active">
								<span className="van-tab__text van-tab__text--ellipsis">
									<div data-v-432e6ed0="">
										<img data-v-432e6ed0="" src={cp} className="img" />
									</div>
								</span>
							</div>
							<div role="tab" className="van-tab testing-list-game">
								<span className="van-tab__text van-tab__text--ellipsis">
									<div data-v-432e6ed0="">
										<img data-v-432e6ed0="" src={dz} className="img" />
									</div>
								</span>
							</div>
							<div role="tab" className="van-tab testing-list-game">
								<span className="van-tab__text van-tab__text--ellipsis">
									<div data-v-432e6ed0="">
										<img data-v-432e6ed0="" src={dc} className="img" />
									</div>
								</span>
							</div>
							<div role="tab" className="van-tab testing-list-game">
								<span className="van-tab__text van-tab__text--ellipsis">
									<div data-v-432e6ed0="">
										<img data-v-432e6ed0="" src={ty} className="img" />
									</div>
								</span>
							</div>
							<div className="van-tabs__line" ></div>
						</div>
					</div>
				</div>
			</div>
    </>
  )
}

export default HomeCom
