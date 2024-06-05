import gift from "../../assets/images/gift1.png"

function RedeemContent() {
  return (
    <>
        <div data-v-3b4d4aab="" className="redeem-container" >
                <div data-v-3b4d4aab="" className="redeem-container-header">
                    
                    <div data-v-3b4d4aab="" className="redeem-container-header-belly">
                        <img data-v-3b4d4aab="" alt="" className="" src={gift} />
                    </div>
                </div>
                <div data-v-3b4d4aab="" className="redeem-container-content">
                    <div data-v-3b4d4aab="" className="redeem-container-receive">
                        <p data-v-3b4d4aab="">Hi</p>
                        <p data-v-3b4d4aab="">We have a gift for you</p>
                        <h4 data-v-3b4d4aab="">Please enter the gift code below</h4>
                        <input data-v-3b4d4aab="" type="text" autoComplete="new-password" placeholder="Please enter gift code" />
                        <button data-v-3b4d4aab="">Receive</button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default RedeemContent
