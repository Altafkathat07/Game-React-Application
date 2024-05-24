import noticeBar from '../../assets/images/notice-right.svg';

function NoticeBar() {
  return (
    <>
      <div data-v-432e6ed0="" className="notice">
				<div data-v-432e6ed0="" className="notice-box c-row c-row-between">
					<div data-v-432e6ed0="" role="alert" className="van-notice-bar" >
						<i className="van-icon van-icon-volume-o van-notice-bar__left-icon">
							
						</i>
						<div role="marquee" className="van-notice-bar__wrap">
							<div className="van-notice-bar__content">Announcement
								:Welcome To Lottery. If you need any help contact Our customer support team. Thanks
							</div>
						</div>
					</div>
					<div data-v-432e6ed0="" className="txt">
						<span data-v-432e6ed0="" className="sp">
							<img data-v-432e6ed0="" src={noticeBar} className="noticebar" />Latest Notification
						</span>
					</div>
				</div>
			</div>
    </>
  )
}

export default NoticeBar
