import AdminNav from "../IndexPage/AdminNav"
import AdminSidebar from "../IndexPage/AdminSidebar"
function UiMain() {
  return (
    <>
     <div className="wrapper">
        <AdminNav />
        <div className="container-fluid page-body-wrapper">
          <AdminSidebar />
        </div>
     </div>
    </>
  )
}

export default UiMain
