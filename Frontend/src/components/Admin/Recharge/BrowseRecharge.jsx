
import AdminNav from "../IndexPage/AdminNav"
import AdminSidebar from "../IndexPage/AdminSidebar"
import RechargeTable from "./RechargeTable"

function BrowseRecharge() {
  return (
    <>
       <div className="wrapper">
        <AdminNav />
        <div className="container-fluid page-body-wrapper">
          <AdminSidebar />
          <div className="container">
            <RechargeTable />
          </div>
        </div>
     </div>
    </>
  )
}

export default BrowseRecharge
