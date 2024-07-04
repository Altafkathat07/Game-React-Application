

function WingoJoin() {
  return (
    <>
    <div className="van-overlay " style={{ zIndex: "2031", display: "none" }} ></div>
      <div data-v-a9660e98="" className="popup-join van-popup van-popup--round van-popup--bottom" style={{transform: "translateY(400px)", maxWidth: "20rem", left: "auto", zIndex: "2032", display: "none",}}>
  <div data-v-a9660e98="" className="betting-mark colorred">
    <div data-v-a9660e98="" className="head">
      <div data-v-a9660e98="" className="box">
        <div data-v-a9660e98="" className="con">1 Minute</div>
        <div data-v-a9660e98="" className="color" style={{color: "rgb(251, 78, 78)"}}
        >Choose<span data-v-a9660e98="" className="p-l-10">Red</span></div>
      </div>
    </div>
    <div data-v-a9660e98="" className="info">
      <div data-v-a9660e98="" className="item c-row c-row-between">
        <div data-v-a9660e98="" className="tit">Amount</div>
        <div data-v-a9660e98="" className="c-row amount-box" data-money="1">
          <div data-x="1" data-v-a9660e98="" className="li" style={{backgroundColor: "rgb(251, 78, 78)", color: "rgb(255, 255, 255)",}}>1</div>
          <div data-x="10" data-v-a9660e98="" className="li"  style={{backgroundColor: "rgb(240, 240, 240)", color: "rgb(0, 0, 0)",}} >10</div>
          <div data-x="100" data-v-a9660e98="" className="li"  style={{backgroundColor: "rgb(240, 240, 240)", color: "rgb(0, 0, 0)",}} >100</div>
          <div data-x="1000" data-v-a9660e98="" className="li"  style={{backgroundColor: "rgb(240, 240, 240)", color: "rgb(0, 0, 0)",}} >1000</div>
        </div>
      </div>
      <div data-v-a9660e98="" className="item c-row c-row-between">
        <div data-v-a9660e98="" className="tit">Quantity</div>
        <div data-v-a9660e98="" className="c-row c-row-between stepper-box">
          <div data-v-a9660e98="" className="li minus text-dark" >-</div>
          <div data-v-a9660e98="" className="digit-box van-cell van-field">
            <div className="van-cell__value van-cell__value--alone van-field__value">
              <div className="van-field__body">
                    <input type="number" className="van-field__control"  />
                </div>
            </div>
          </div>
          <div data-v-a9660e98="" className="li plus c-row c-row-middle-center" >+</div>
        </div>
      </div>
      <div data-v-a9660e98="" className="item c-row c-flew-end">
        <div data-v-a9660e98="" className="c-row multiple-box">
          <div data-x="1" data-v-a9660e98="" className="li" >X1</div>
          <div data-x="5" data-v-a9660e98="" className="li" >X5</div>
          <div data-x="10" data-v-a9660e98="" className="li" > X10 </div>
          <div data-x="20" data-v-a9660e98="" className="li" > X20 </div>
          <div data-x="50" data-v-a9660e98="" className="li" >X50</div>
          <div data-x="100" data-v-a9660e98="" className="li" >X100</div>
        </div>
      </div>
      <div data-v-a9660e98="" className="item c-row c-row-middle">
        <div data-v-a9660e98="" role="checkbox" tabIndex="0" aria-checked="true" className="van-checkbox">
          <div className="van-checkbox__icon van-checkbox__icon--square van-checkbox__icon--checked betCheck"><i className="van-icon van-icon-success" >
              
            </i></div><span className="van-checkbox__label">
            <div data-v-a9660e98="" className="agree p-r-15">Rules</div>
          </span>
        </div><span data-v-a9660e98="" className="txt">Pre-Selling</span>
      </div>
    </div>
    <div data-v-a9660e98="" className="foot c-row">
      <div data-v-a9660e98="" className="left"> Cancel </div>
      <div data-v-a9660e98="" className="right" ><span data-v-a9660e98="" className="p-r-5">Total Amount</span>
        <span data-v-a9660e98="">1 </span>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default WingoJoin
