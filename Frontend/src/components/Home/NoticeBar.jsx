import { useState, useEffect } from "react"
import noticeBar from '../../assets/images/notice-right.svg';

function NoticeBar() {
	const [notice, setNotice] = useState('');
	const [style, setStyle] = useState({});
    useEffect(() => {
        fetch('/api/webapi/admin/notification-fetching')
          .then((res) => {
            if (!res.ok) {
              throw new Error('Network response was not ok ' + res.statusText);
            }
            return res.json();
          })
          .then((data) => {
            // console.log("Data fetched:", data.data[0].notice);
            const result = data.data[0].notice;
            setNotice(result);
          })
          .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
          });
      }, []);

  useEffect(() => {
    setStyle({
      transitionDuration: '44.0815s',
      transform: 'translateX(-2204.07px)',
    });
  }, []);

  return (
    <>
      <div data-v-432e6ed0="" className="notice">
				<div data-v-432e6ed0="" className="notice-box c-row c-row-between">
					<div data-v-432e6ed0="" role="alert" className="van-notice-bar" >
						<i className="van-icon van-icon-volume-o van-notice-bar__left-icon">
							
						</i>
						<div role="marquee" className="van-notice-bar__wrap" style={{fontSize: "0.9rem"}}>
							<div className="van-notice-bar__content" id="notice" style={style}>{notice}</div>
						</div>
					</div>
					<div data-v-432e6ed0="" className="txt">
						<span data-v-432e6ed0="" className="sp">
							<img data-v-432e6ed0="" src={noticeBar} className="noticebar" />detail
						</span>
					</div>
				</div>
			</div>
    </>
  )
}

export default NoticeBar
