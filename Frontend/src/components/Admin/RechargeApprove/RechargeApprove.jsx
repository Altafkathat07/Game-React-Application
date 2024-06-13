
import AdminNav from "../IndexPage/AdminNav"
import AdminSidebar from "../IndexPage/AdminSidebar"
import ApproveTable from "./ApproveTable"

function RechargeApprove() {
  return (
    <>
     <div className="wrapper">
        <AdminNav />
        <div className="container-fluid page-body-wrapper">
          <AdminSidebar />
          <div className="container">
            <ApproveTable />
          </div>
        </div>
     </div>
    </>
  )
}

export default RechargeApprove
