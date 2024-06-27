
import AdminNav from "../IndexPage/AdminNav"
import AdminSidebar from "../IndexPage/AdminSidebar"
import BonusForm from "./BonusForm"
// import DepositeBonusForm from "./DepositeBonusForm"
// import WithdrawLimit from "./WithdrawLimit"

function SettingMain() {
  return (
    <>
      <div className="wrapper">
        <AdminNav />
        <div className="container-fluid page-body-wrapper">
          <AdminSidebar />
          <div className="container">
            <BonusForm/>
            {/* <DepositeBonusForm /> */}
            {/* <WithdrawLimit /> */}
          </div>
        </div>
     </div>
    </>
  )
}

export default SettingMain
