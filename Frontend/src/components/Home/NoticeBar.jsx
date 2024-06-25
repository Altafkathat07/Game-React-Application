import { useState, useEffect } from "react"
import noticeBar from '../../assets/images/notice-right.svg';

function NoticeBar() {
	const [notice, setNotice] = useState('');
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
            const result = data.data[0].notice ?? "🎉 WELCOME TO Century100 Club  INDIANS BIGGEST GAMING PLATFORM  🎉";
            setNotice(result);
          })
          .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
          });
      }, []);

      const calculateDuration = (text) => {
        const speed = 60; // pixels per second
        const textLength = text.length * 10; // approximate width of text in pixels
        return textLength / speed;
      };
      const duration = calculateDuration(notice);
      const styles = {
        notice: {
          overflow: "hidden"
        },
        content: {
          display: 'inline-block',
          whiteSpace: 'nowrap',
          animation: `scroll ${duration}s linear infinite`
        }
      };

  return (
    <>
        <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
      <div data-v-432e6ed0="" className="notice">
				<div data-v-432e6ed0="" className="notice-box c-row c-row-between">
					<div data-v-432e6ed0="" role="alert" className="van-notice-bar" >
						<i className="van-icon van-icon-volume-o van-notice-bar__left-icon">
							
						</i>
						<div role="marquee" className="van-notice-bar__wrap" style={{fontSize: "0.9rem"}}>
							<div className="van-notice-bar__content" id="notice"  style={styles.content}>{notice}</div>
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
