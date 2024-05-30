

function PopupForm() {
  return (
    <>
        <div className="row  p-4 bg-light">
            <div className="col-8">
                <form action="http://localhost:8888/api/webapi/admin/pop-up" method="post">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter Popup message  </label>
                        <input type="text" name="message" className="form-control fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter popup message"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default PopupForm
