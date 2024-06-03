

function MyTeamLevel() {
  return (
    <>
      <div data-v-0ff6946a="" className="box" id="boxLevel">
                    <div data-v-0ff6946a="" className="tit c-row c-row-between" id="total-mem"
                       >Team(0 People)</div>
                    <div data-v-0ff6946a="" className=" c-row c-row-between p-l-15 p-r-15 m-t-5">
                        <div data-v-0ff6946a="" className="p-r-10">
                            <input data-v-0ff6946a="" type="number" maxLength="5" placeholder="UID"
                               className="ipt" />
                        </div>

                        <div data-v-0ff6946a="" className="select-wrapper">
                            <select id="levelSelect" className="c-tc">
                                <option value="">All Levels</option>
                                <option value="1">Level 1</option>
                                <option value="2">Level 2</option>
                                <option value="3">Level 3</option>
                                <option value="4">Level 4</option>
                                <option value="5">Level 5</option>
                                <option value="6">Level 6</option>
                            </select>
                        </div>

                        {/* <!-- <div data-v-0ff6946a="" className="btn c-tc">Search</div> --> */}
                    </div>
                    {/* <!--  <div data-v-0ff6946a="" className="c-row number c-flex-warp">
                        <div data-v-0ff6946a="" className="item">Total Bet Amount:0</div>
                        <div data-v-0ff6946a="" className="item">Total Rebate Amount:0</div>
                    </div> --> */}
                    <div data-v-0ff6946a="" className="table">
                        <div data-v-0ff6946a="" className="hd van-row">
                            <div data-v-0ff6946a="" className="c-tc van-col van-col--4">UID</div>
                            <div data-v-0ff6946a="" className="c-tc van-ellipsis van-col van-col--5">Nick Name</div>
                            <div data-v-0ff6946a="" className="c-tc van-ellipsis van-col van-col--6">Turnover</div>
                            {/* <!-- <div data-v-0ff6946a="" className="c-tc van-ellipsis van-col van-col--4">Status</div> --> */}
                            <div data-v-0ff6946a="" className="c-tc van-ellipsis van-col van-col--4">Level</div>
                            <div data-v-0ff6946a="" className="c-tc van-ellipsis van-col van-col--4">Operate</div>
                        </div>
                        <div data-v-0ff6946a="" className="list">
                            <div data-v-0ff6946a="" role="feed" className="van-list">
                                <div id="van-list"></div>
                                <div data-v-a9660e98="" className="p-t-5 p-b-5">
                                    <div data-v-a9660e98="" className="van-empty">
                                        <div data-v-a9660e99="" className="van-list__finished-text data">No More Available</div>
                                        <div className="van-list__placeholder"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default MyTeamLevel
