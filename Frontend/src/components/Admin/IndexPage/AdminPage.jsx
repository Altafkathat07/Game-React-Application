import AdminAsidebar from "./AdminAsidebar"
import AdminSidebar from "./AdminSidebar"


function AdminPage() {
  return (
    <>
      <div className="container-fluid page-body-wrapper">
          <AdminSidebar />
          <AdminAsidebar />
        </div>
    </>
  )
}

export default AdminPage
