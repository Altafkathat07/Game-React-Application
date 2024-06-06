import wallet from "../../assets/images/wal_icon.webp";
import icon from "../../assets/images/refresh.png";

function WinGoInfo() {
  return (
    <>
      <div data-v-a9660e98="" className="game-head">
    <div data-v-a9660e98="" className="total-box">
        <div data-v-a9660e98="" className="c-row c-row-between c-row-middle info">
            <div data-v-a9660e98="" className="c-row c-row-middle">
                <div data-v-a9660e98="" className="m-r-10">
                    <div data-v-a9660e98="" className="van-image" >
                        <img src={wallet}  className="wal" width="50px" height="50px" />
                    </div>
                </div>
                <div data-v-a9660e98="" className="total">
                    <h3 data-v-a9660e98="" className="total m-b-2">Total</h3>
                    <span data-v-a9660e98="" className="wallet">Balance</span>
                </div>
            </div>
            <div data-v-a9660e98="" className="c-row c-row-middle">
                <div data-v-a9660e98="" className="num">
                    <span data-v-a9660e98="">INR 0.00 </span>
                </div>
                <div data-v-a9660e9899="" className="van-image  m-l-10 reload_money" >
                    <img src={icon}  className="ref" />
                </div>
            </div>
        </div>
        <div data-v-a9660e98="" className="total-btn c-row c-row-between">
            <div data-v-a9660e98="" className="item" >
                <button data-v-a9660e98=""
                    className="btn van-button van-button--default van-button--normal van-button--block van-button--round"
                    >
                    <div data-v-a9660e98="" className="van-button__content">
                        <span data-v-a9660e98="" className="van-button__text">
                            Withdraw
                        </span>
                    </div>
                </button>
            </div>
            <div data-v-a9660e98="" className="item">
                <button data-v-a9660e98=""
                    className="btn van-button van-button--default van-button--normal van-button--block van-button--round"
                    >
                    <div data-v-a9660e98="" className="van-button__content">
                        <span data-v-a9660e98="" className="van-button__text">
                            Recharge
                        </span>
                    </div>
                </button>
            </div>
        </div>
    </div>
    <div data-v-a9660e98="" className="m-t-15 notice">
        <div data-v-a9660e98="" role="alert" className="van-notice-bar not">
            <i className="van-icon van-icon-volume-o van-notice-bar__left-icon">
                
            </i>
            <div role="marquee" className="van-notice-bar__wrap">
                <div className="van-notice-bar__content" >
                    Notice :
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default WinGoInfo
