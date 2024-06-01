

function Level() {
  return (
    <>
      <div className="row  p-4 bg-light">
                <h3>Levels </h3>
            <div className="col-8 mx-5">
                <form action="/api/webapi/admin/deposite-limit" method="post">
                
                    <div className="form-check levelForm">
                        <div><input className="form-check-input" type="checkbox"  id="flexCheckDefault" /></div>
                        <div> <input type="number" className="percentage"  placeholder="0"  /><span>% In Percentage</span> </div>
                        <div>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                             Level 1
                            </label>
                        </div>
                    </div>
                    <div className="form-check levelForm">
                        <div><input className="form-check-input" type="checkbox"  id="flexCheckDefault" /></div>
                        <div> <input type="number" className="percentage"  placeholder="0"   /><span>% In Percentage</span> </div>
                        <div>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                             Level 2
                            </label>
                        </div>
                    </div>
                    <div className="form-check levelForm">
                        <div><input className="form-check-input" type="checkbox"  id="flexCheckDefault" /></div>
                        <div> <input type="number" className="percentage"  placeholder="0"   /><span>% In Percentage</span> </div>
                        <div>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                             Level 3
                            </label>
                        </div>
                    </div>
                    <div className="form-check levelForm">
                        <div><input className="form-check-input" type="checkbox"  id="flexCheckDefault" /></div>
                        <div> <input type="number" className="percentage"  placeholder="0"   /><span>% In Percentage</span> </div>
                        <div>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                             Level 4
                            </label>
                        </div>
                    </div>
                    <div className="form-check levelForm">
                        <div><input className="form-check-input" type="checkbox"  id="flexCheckDefault" /></div>
                        <div> <input type="number" className="percentage"  placeholder="0"   /><span>% In Percentage</span> </div>
                        <div>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                             Level 5
                            </label>
                        </div>
                    </div>
                    <div className="form-check levelForm">
                        <div><input className="form-check-input" type="checkbox"  id="flexCheckDefault" /></div>
                        <div> <input type="number" className="percentage"  placeholder="0"   /><span>% In Percentage</span> </div>
                        <div>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                             Level 6
                            </label>
                        </div>
                    </div> 
                    <div className="form-check levelForm">
                        <div><input className="form-check-input" type="checkbox"  id="flexCheckDefault" /></div>
                        <div> <input type="number" className="percentage"  placeholder="0"   /><span>% In Percentage</span> </div>
                        <div>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                             Level 7
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Level
