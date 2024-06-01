

function DepositeBonusForm() {
  return (
    <>
        <div className="row  p-4 bg-light">
            <div className="col-8">
                <form action="/api/webapi/admin/deposite-limit" method="post">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter Deposite Limit</label>
                        <input type="text" name="notices" className="form-control fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Notice for User"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default DepositeBonusForm
