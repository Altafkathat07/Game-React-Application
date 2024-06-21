import "../../assets/home/css/daily.css"

function DailyRanking() {
    // const topThree = [
    //     {
    //       order: 2,
    //       top: '-45px',
    //       borderImg: '/assets/png/border1-3b6518ec.png',
    //       avatarImg: '/assets/png/4-12a0d0c5.png',
    //       crownImg: '/assets/png/crown1-3912fd85.png',
    //       placeImg: '/assets/png/place1-fe39c3f3.png',
    //       name: 'Mem***PYL',
    //       earnings: '₹997,169,019.06'
    //     },
    //     {
    //       order: 1,
    //       top: '-30px',
    //       borderImg: '/assets/png/border2-7a806be7.png',
    //       avatarImg: '/assets/png/6-7c7f5203.png',
    //       crownImg: '/assets/png/crown2-c8aced52.png',
    //       placeImg: '/assets/png/place2-8189be28.png',
    //       name: 'Mem***VHO',
    //       earnings: '₹901,157,040.00'
    //     },
    //     {
    //       order: 3,
    //       top: '-30px',
    //       borderImg: '/assets/png/border3-cfec4a7d.png',
    //       avatarImg: '/assets/png/12-ae12c679.png',
    //       crownImg: '/assets/png/crown3-2ca02146.png',
    //       placeImg: '/assets/png/place3-d9b0be38.png',
    //       name: 'Mem***KVG',
    //       earnings: '₹590,286,732.00'
    //     }
    //   ];
    
    //   const list = [
    //     {
    //       rank: 4,
    //       avatarImg: '/assets/png/12-ae12c679.png',
    //       name: 'Mem***XWJ',
    //       earnings: '₹334,958,316.00'
    //     },
    //     {
    //       rank: 5,
    //       avatarImg: '/assets/png/4-12a0d0c5.png',
    //       name: 'Mem***ZQH',
    //       earnings: '₹246,903,160.00'
    //     }
    //   ];
    return (
    <>
{/* <div data-v-84514e8e className="dailyProfitRank">
      <div data-v-84514e8e className="title"><b></b>Todays earnings chart</div>
      <div data-v-84514e8e className="dailyProfitRank__content">
        <div data-v-84514e8e className="dailyProfitRank__content-topThree">
          {topThree.map((item, index) => (
            <div
              key={index}
              data-v-84514e8e className="dailyProfitRank__content-topThree__item"
              style={{ order: item.order, top: item.top }}
            >
              <div style={{ background: `url(${item.borderImg}) center center / 100% 100% no-repeat` }}>
                <img src={item.avatarImg} alt="avatar" />
              </div>
              <div>
                <img src={item.crownImg} alt="crown" />
                <img src={item.placeImg} alt="place" />
              </div>
              <span>{item.name}</span><span>{item.earnings}</span>
            </div>
          ))}
        </div>
        <div data-v-84514e8e className="dailyProfitRank__content-list">
          {list.map((item, index) => (
            <div key={index} data-v-84514e8e className="dailyProfitRank__content-list__item">
              <span data-v-84514e8e className="left-rank">{item.rank}</span>
              <img src={item.avatarImg} alt="avatar" />
              <span data-v-84514e8e className="middle-name">{item.name}</span>
              <span data-v-84514e8e className="right-box">{item.earnings}</span>
            </div>
          ))}
        </div>
      </div>
    </div>             */}
    <div data-v-84514e8e="" className="dailyProfitRank">
   <div data-v-84514e8e="" className="title"><b data-v-84514e8e=""></b>Todays earnings chart</div>
   <div data-v-84514e8e="" className="dailyProfitRank__content">
      <div data-v-84514e8e="" className="dailyProfitRank__content-topThree">
         <div data-v-84514e8e="" className="dailyProfitRank__content-topThree__item" style={{order: "2", top: "-45px"}}>
            <div data-v-84514e8e="" style={{background: "url(&quot;/assets/png/border1-3b6518ec.png&quot;) center center / 100% 100% no-repeat"}}><img data-v-84514e8e="" data-img="/assets/png/avatar-ea3b8ee9.png" className="" data-origin="/assets/png/4-12a0d0c5.png" src="/assets/png/4-12a0d0c5.png" /></div>
            <div data-v-84514e8e=""><img data-v-84514e8e="" className="" data-origin="/assets/png/crown1-3912fd85.png" src="/assets/png/crown1-3912fd85.png" /><img data-v-84514e8e="" className="" data-origin="/assets/png/place1-fe39c3f3.png" src="/assets/png/place1-fe39c3f3.png" /></div>
            <span data-v-84514e8e="">Mem***PYL</span><span data-v-84514e8e="">₹997,169,019.06</span>
         </div>
         <div data-v-84514e8e="" className="dailyProfitRank__content-topThree__item" style={{order: "1", top: "-30px"}}>
            <div data-v-84514e8e="" style={{background: "url(&quot;/assets/png/border2-7a806be7.png&quot;) center center / 100% 100% no-repeat"}}><img data-v-84514e8e="" data-img="/assets/png/avatar-ea3b8ee9.png" className="" data-origin="/assets/png/6-7c7f5203.png" src="/assets/png/6-7c7f5203.png" /></div>
            <div data-v-84514e8e=""><img data-v-84514e8e="" className="" data-origin="/assets/png/crown2-c8aced52.png" src="/assets/png/crown2-c8aced52.png" /><img data-v-84514e8e="" className="" data-origin="/assets/png/place2-8189be28.png" src="/assets/png/place2-8189be28.png" /></div>
            <span data-v-84514e8e="">Mem***VHO</span><span data-v-84514e8e="">₹901,157,040.00</span>
         </div>
         <div data-v-84514e8e="" className="dailyProfitRank__content-topThree__item" style={{order: "3", top: "-30px"}}>
            <div data-v-84514e8e="" style={{background: "url(&quot;/assets/png/border3-cfec4a7d.png&quot;) center center / 100% 100% no-repeat"}}><img data-v-84514e8e="" data-img="/assets/png/avatar-ea3b8ee9.png" className="" data-origin="/assets/png/12-ae12c679.png" src="/assets/png/12-ae12c679.png" /></div>
            <div data-v-84514e8e=""><img data-v-84514e8e="" className="" data-origin="/assets/png/crown3-2ca02146.png" src="/assets/png/crown3-2ca02146.png" /><img data-v-84514e8e="" className="" data-origin="/assets/png/place3-d9b0be38.png" src="/assets/png/place3-d9b0be38.png" /></div>
            <span data-v-84514e8e="">Mem***KVG</span><span data-v-84514e8e="">₹590,286,732.00</span>
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
