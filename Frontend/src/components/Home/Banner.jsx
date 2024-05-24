import { useState, useEffect } from 'react';
import banner1  from '../../assets/images/Banner_20240414155453yxr9.jpg';
import banner2  from '../../assets/images/Banner_20240327161809xiwh.jpg';
import banner3  from '../../assets/images/Banner_202401291918537wyp.jpg';
import banner4  from '../../assets/images/88ba9bd6911d53430a0c.jpg';
function Banner() {

	const [count, setCount] = useState(0);

	useEffect(() => {
		const getWBody = 1450;
		const element = document.querySelector('.van-swipe__track');
	
		const interval = setInterval(() => {
			if (element) {
			const transformX = count === 3 ? 0 : -(getWBody * (count + 1));
			element.style = `width: 1448px; transition-duration: ${count === 5 ? '0ms' : '500ms'}; transform: translateX(${transformX}px);`;
	
			document.querySelectorAll('.van-swipe__indicator').forEach((indicator, idx) => {
				indicator.classList.toggle('van-swipe__indicator--active', idx === count);
				indicator.style.backgroundColor = idx === count ? 'rgb(242, 65, 59)' : '';
			});
	
			setCount((prevCount) => (prevCount + 1) % 4);
			}
		}, 2500);
	
		return () => clearInterval(interval);
		}, [count]);

  
  return (
    <>
      <div data-v-432e6ed0=""className="banner">
				<div data-v-432e6ed0=""className="van-swipe">
					<div className="van-swipe__track list-banner"
						>
						<div data-v-432e6ed0=""className="van-swipe-item" >
							<img data-v-432e6ed0="" src={banner1} className="img" />
						</div>
						<div data-v-432e6ed0=""className="van-swipe-item" >
							<img data-v-432e6ed0="" src={banner2} className="img" />
						</div>
						<div data-v-432e6ed0=""className="van-swipe-item" >
							<img data-v-432e6ed0="" src={banner3} className="img" />
						</div>
						<div data-v-432e6ed0=""className="van-swipe-item" >
							<img data-v-432e6ed0="" src={banner4} className="img" />
						</div>
					</div>
					<div className="van-swipe__indicators">
						<i className="van-swipe__indicator" ></i>
						<i className="van-swipe__indicator" ></i>
						<i className="van-swipe__indicator" ></i>
						<i className="van-swipe__indicator"></i>
					</div>
				</div>
			</div>

			
    </>
  )
}

export default Banner

