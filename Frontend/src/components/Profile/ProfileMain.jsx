
import ProfileDetail from "./ProfileDetail"
import ProfileNav from "./ProfileNav"
import '../../App.css'
import '../../assets/home/css/login.css'
import '../../assets/admin/css/admin.css'


function ProfileMain() {
  return (
    <>
        <div data-v-8cd483ca="" className="menu-box">
            <ProfileNav />
            <ProfileDetail /> 
         </div>
    </>
  )
}

export default ProfileMain
