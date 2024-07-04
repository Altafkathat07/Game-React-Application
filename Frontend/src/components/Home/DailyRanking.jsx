import "../../assets/home/css/daily.css"
import man1 from "../../assets/images/win1.png"
import tag1 from "../../assets/images/no1.png"
import crown1 from "../../assets/images/crown1.png"
import man2 from "../../assets/images/win2.png"
import tag2 from "../../assets/images/place2.png"
import crown2 from "../../assets/images/crown2.png"
import man3 from "../../assets/images/face1.jpg"
import tag3 from "../../assets/images/place3.png"
import crown3 from "../../assets/images/crown2.png"

function DailyRanking() {

    return (
    <>

    <div data-v-84514e8e="" className="dailyProfitRank" style={{width: "94%", marginLeft: "3%"}}>
   <div data-v-84514e8e="" className="title">Todays earnings chart</div>
   <div data-v-84514e8e="" className="dailyProfitRank__content">
      <div data-v-84514e8e="" className="dailyProfitRank__content-topThree">
         <div data-v-84514e8e="" className="dailyProfitRank__content-topThree__item" style={{order: "2", marginTop: "-49px"}}>
            <div data-v-84514e8e="" >
              <img data-v-84514e8e="" data-img={man1} className="" data-origin={man1} src={man1} />
              </div>
            <div data-v-84514e8e="">
              <img data-v-84514e8e="" className="" data-origin={crown1} src={crown1} />
              <img data-v-84514e8e="" className="" data-origin={tag1} src={tag1} />
              </div>
            <span data-v-84514e8e="" style={{marginTop: "1rem",}}>Mem***PYL</span><span data-v-84514e8e="">₹997,169,019.06</span>
         </div>
         <div data-v-84514e8e="" className="dailyProfitRank__content-topThree__item" style={{order: "1", marginTop: "-25px"}}>
            <div data-v-84514e8e="" ><img data-v-84514e8e="" data-img={man2} className="" data-origin={man2}src={man2} /></div>
            <div data-v-84514e8e=""><img data-v-84514e8e="" className="" data-origin={crown2} src={crown2} /><img data-v-84514e8e="" className="" data-origin={tag2} src={tag2} /></div>
            <span data-v-84514e8e="" style={{marginTop: "1rem",}}>Mem***VHO</span><span data-v-84514e8e="">₹901,157,040.00</span>
         </div>
         <div data-v-84514e8e="" className="dailyProfitRank__content-topThree__item" style={{order: "3", marginTop: "-10px"}}>
            <div data-v-84514e8e="" ><img data-v-84514e8e="" data-img={man3} className="" data-origin={man2} src={man3} /></div>
            <div data-v-84514e8e=""><img data-v-84514e8e="" className="" data-origin={crown3} src={crown3} /><img data-v-84514e8e="" className="" data-origin={tag3} src={tag3} /></div>
            <span data-v-84514e8e="" style={{marginTop: "1rem",}}>Mem***KVG</span><span data-v-84514e8e="">₹590,286,732.00</span>
         </div>
      </div>
      <div data-v-84514e8e="" className="dailyProfitRank__content-list">
         <div data-v-84514e8e="" className="dailyProfitRank__content-list__item">
            <span data-v-84514e8e="" className="left-rank">4</span><img data-v-84514e8e="" data-img="/assets/png/avatar-ea3b8ee9.png" className="" data-origin="/assets/png/12-ae12c679.png" src="/assets/png/12-ae12c679.png" /><span data-v-84514e8e="" className="middle-name">Mem***XWJ</span><span data-v-84514e8e="" className="right-box">₹334,958,316.00</span>
         </div>
         <div data-v-84514e8e="" className="dailyProfitRank__content-list__item">
            <span data-v-84514e8e="" className="left-rank">5</span><img data-v-84514e8e="" data-img="/assets/png/avatar-ea3b8ee9.png" className="" data-origin="/assets/png/4-12a0d0c5.png" src="/assets/png/4-12a0d0c5.png" /><span data-v-84514e8e="" className="middle-name">Mem***ZQH</span><span data-v-84514e8e="" className="right-box">₹246,903,160.00</span>
         </div>
      </div>
   </div>
</div>
    </>
                )
}

export default DailyRanking
