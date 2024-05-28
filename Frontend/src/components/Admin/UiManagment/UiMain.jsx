import AdminNav from "../IndexPage/AdminNav"
import AdminSidebar from "../IndexPage/AdminSidebar"
import BannersForm from "./BannersForm"
import NoticeForm from "./NoticeForm"
import TermsForm from "./TermsForm"
function UiMain() {
  return (
    <>
     <div className="wrapper">
        <AdminNav />
        <div className="container-fluid page-body-wrapper">
          <AdminSidebar />
          <div className="container">
          <NoticeForm />
          <TermsForm />
          <BannersForm />
          </div>
        </div>
     </div>
    </>
  )
}

export default UiMain
