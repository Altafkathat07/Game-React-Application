
import avatar from "../../assets/images/avatar.svg"; 
function UserDetail() {
  return (
    <>
      <div data-v-9f3a9836="" className="profile">
        <div><h4>Profile</h4></div>
                <div data-v-9f3a9836="" className="item c-row c-row-between c-row-middle-center">
                    <div data-v-9f3a9836="" className="lab">Avatar</div>
                    <div data-v-9f3a9836="" className="img">
                        <img data-v-9f3a9836="" width="100px" height="100px" src={avatar} className="userImg" />
                    </div>
                </div>
                <div data-v-9f3a9836="" className="item c-row c-row-between">
                    <div data-v-9f3a9836="" className="lab">ID</div>
                    <div data-v-9f3a9836="" className="txt id">80176</div>
                </div>
                <div data-v-9f3a9836="" className="item c-row c-row-between">
                    <div data-v-9f3a9836="" className="lab">Username</div>
                    <div data-v-9f3a9836="" className="txt c-row c-row-middle-center">
                        <span className="name">Member28716</span>
                        <i data-v-9f3a9836="" className="m-l-10 van-icon van-icon-arrow" >
                           
                        </i></div>
                </div>
                <div data-v-9f3a9836="" className="item c-row c-row-between">
                    <div data-v-9f3a9836="" className="lab">Mobile Number</div>
                    <div data-v-9f3a9836="" className="number">+91 9990008888</div>
                </div>
    </div>
    </>
  )
}

export default UserDetail
