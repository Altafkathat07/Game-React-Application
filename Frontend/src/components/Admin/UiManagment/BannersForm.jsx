import { showAlert } from "../../AlertMassWrapper";

function BannersForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const fileInput = document.querySelector('#banners');

    // Append all files to FormData
    for (let i = 0; i < fileInput.files.length; i++) {
      formData.append('banners', fileInput.files[i]);
      // console.log(fileInput.files[i])
    }

    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1].name); // Assuming files
    }

    try {
      const response = await fetch('/api/webapi/admin/upload-banner', {
        method: 'POST',
        body: formData,
      });
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error('Failed to parse JSON response: ' + jsonError.message);
      }

      // const data = await response.json();

      if (response.ok) {
        showAlert(data.message);
      } else {
        showAlert('Failed to upload banners: ' + data.message);
      }
    } catch (error) {
      console.error('Error uploading banners:'+ error);
      showAlert('Failed to upload banners. Please try again.');
    }
  };
  return (
    <>
       <div className="row  p-4 bg-light mt-4">
            <div className="col-8">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Upload Banners </label>
                        <input type="file" name="banners" id="banners" className="form-control" multiple/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default BannersForm
