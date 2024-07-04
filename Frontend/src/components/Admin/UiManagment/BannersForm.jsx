import { useState } from "react";
import { showAlert } from "../../AlertMassWrapper";

function BannersForm() {
  const [images, setImages] = useState([])
  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  // console.log(images)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      images.forEach((image, index) => {
        formData.append(`image${index}`, image);
      });
      // console.log("this is form data : " +formData)
      const response = await fetch('/api/webapi/admin/upload-banner', {
        method: 'POST',
        body: formData,
      });
      // console.log("image",images)
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error('Failed to parse JSON response: ' + jsonError.message);
      }

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
                <form  onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Upload Banners </label>
                        <input type="file" name="banners" id="banners" onChange={handleImageChange} className="form-control" multiple/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default BannersForm
