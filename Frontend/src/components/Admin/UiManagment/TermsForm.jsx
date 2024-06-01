

function TermsForm() {
  return (
    <>
        <div className="row  p-4 bg-light mt-4">
            <div className="col-8">
                <form action="/api/webapi/admin/terms" method="post">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter Terms And Conditions </label>
                        <textarea name="term" id="" className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default TermsForm
