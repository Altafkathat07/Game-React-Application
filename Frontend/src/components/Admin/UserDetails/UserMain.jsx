import AdminNav from "../IndexPage/AdminNav"
import AdminSidebar from "../IndexPage/AdminSidebar"
import TableContent from "./TableContent"

function UserMain() {
  return (
    <>
      <div className="wrapper">
        <AdminNav />
        <div className="container-fluid page-body-wrapper">
          <AdminSidebar />
          <div className="container">
            <TableContent />
          </div>
        </div>
     </div>
    </>
  )
}

export default UserMain
