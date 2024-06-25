import AdminNav from "../IndexPage/AdminNav"
import AdminSidebar from "../IndexPage/AdminSidebar"
import Levels from "./Levels"

function LevelSettingMain() {
  return (
    <>
    <div className="wrapper">
        <AdminNav />
        <div className="container-fluid page-body-wrapper">
          <AdminSidebar />
          <div className="container-fluid">
            <Levels />
          </div>
        </div>
     </div>
    </>
  )
}

export default LevelSettingMain
