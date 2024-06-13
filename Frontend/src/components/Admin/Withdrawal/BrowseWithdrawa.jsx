
import AdminNav from "../IndexPage/AdminNav"
import AdminSidebar from "../IndexPage/AdminSidebar"
import WithdrawalTable from "./WithdrawalTable"
function BrowseWithdrawa() {
  return (
    <>
        <div className="wrapper">
        <AdminNav />
        <div className="container-fluid page-body-wrapper">
          <AdminSidebar />
          <div className="container">
            <WithdrawalTable />
          </div>
        </div>
     </div>
    </>
  )
}

export default BrowseWithdrawa
