
import AdminNav from "../IndexPage/AdminNav"
import AdminSidebar from "../IndexPage/AdminSidebar"
import GiftCodeContent from "./GiftCodeContent"
function GiftCodeMain() {
  return (
    <>
            <div className="wrapper">
        <AdminNav />
        <div className="container-fluid page-body-wrapper">
          <AdminSidebar />
          <div className="container">
            <GiftCodeContent />
          </div>
        </div>
     </div> 
    </>
  )
}

export default GiftCodeMain
