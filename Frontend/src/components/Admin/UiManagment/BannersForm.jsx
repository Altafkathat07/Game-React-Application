

function BannersForm() {
  return (
    <>
       <div className="row  p-4 bg-light mt-4">
            <div className="col-8">
                <form action="/api/webapi/admin/upload-banner" method="post" encType="multipart/form-data">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Upload Banners </label>
                        <input type="file" name="banners" id="" className="form-control" multiple/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default BannersForm
