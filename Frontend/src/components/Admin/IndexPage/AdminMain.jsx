import { useState } from "react";
import AdminNav from "./AdminNav"
import AdminPage from "./AdminPage"
import "../../../assets/admin/css/admin.css"

function AdminMain() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    console.log("Toggle sidebar clicked"); // Debugging log
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <>
    <div className="wrapper">
    <AdminNav toggleSidebar={toggleSidebar} />
    <AdminPage sidebarVisible={sidebarVisible} />

    </div>
      
    </>
  )
}

export default AdminMain
