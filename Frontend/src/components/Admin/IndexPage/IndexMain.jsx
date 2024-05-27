import IndexAsidePage from "./IndexAsidePage"
import IndexNav from "./IndexNav"
import IndexSidebar from "./IndexSidebar"
import '../../../assets/admin/css/admin.css'


function IndexMain() {
  return (
    <>
        <div id="main-wrapper">
            <IndexNav />
            <IndexSidebar />
            <IndexAsidePage />
        </div>
    </>
  )
}

export default IndexMain
