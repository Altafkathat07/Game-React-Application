
import AdminNav from "../IndexPage/AdminNav"
import AdminSidebar from "../IndexPage/AdminSidebar"
import WithdrawApproveTable from "./WithdrawApproveTable"

function WithdrawApprove() {
  return (
    <>
           <div className="wrapper">
        <AdminNav />
        <div className="container-fluid page-body-wrapper">
          <AdminSidebar />
          <div className="container">
            <WithdrawApproveTable />
          </div>
        </div>
     </div>
    </>
  )
}

export default WithdrawApprove
