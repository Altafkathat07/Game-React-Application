import { useState, useEffect } from 'react';
import axios from 'axios';
import avatar from "../../assets/images/avatar.svg"; 

function UserDetail() {
  const [user, setUser] = useState({});

  useEffect(() => {
      axios.post('/api/webapi/GetUserInfo')
          .then(response => {
              const userInfo = response.data.data;
              console.log("this is res: " + JSON.stringify(userInfo));
              setUser(userInfo);
          })
          .catch(error => console.log(error));
  }, []);
  return (
    <>
      <div data-v-9f3a9836="" className="profile" style={{background: "#fff"}}>
        <div><h4>Profile</h4></div>
                <div data-v-9f3a9836="" className="item c-row c-row-between c-row-middle-center">
                    <div data-v-9f3a9836="" className="lab">Avatar</div>
                    <div data-v-9f3a9836="" className="img">
                        <img data-v-9f3a9836="" width="100px" height="100px" src={avatar} className="userImg" />
                    </div>
                </div>
                <div data-v-9f3a9836="" className="item c-row c-row-between">
                    <div data-v-9f3a9836="" className="lab">ID</div>
                    <div data-v-9f3a9836="" className="txt id">{user.id_user}</div>
                </div>
                <div data-v-9f3a9836="" className="item c-row c-row-between">
                    <div data-v-9f3a9836="" className="lab">Username</div>
                    <div data-v-9f3a9836="" className="txt c-row c-row-middle-center">
                        <span className="name">{user.name_user}</span>
                        {/* <i data-v-9f3a9836="" className="m-l-10 van-icon van-icon-arrow" > */}
                           
                        {/* </i> */}
                        </div>
                </div>
                <div data-v-9f3a9836="" className="item c-row c-row-between">
                    <div data-v-9f3a9836="" className="lab">Mobile Number</div>
                    <div data-v-9f3a9836="" className="number" style={{color: "#959595"}}>+91 {user.phone_user}</div>
                </div>
    </div>
    </>
  )
}

export default UserDetail
