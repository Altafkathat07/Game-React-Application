import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/avatar.svg'

function ProfileDetail() {
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.post('/api/webapi/GetUserInfo')
            .then(response => {
                const userInfo = response.data.data;
                // console.log("this is res: " + JSON.stringify(userInfo));
                setUser(userInfo);
            })
            .catch(error => console.log(error));
    }, []);
    const maskPhoneNumber = (phoneNumber) => {
        if (!phoneNumber) return '';
        return phoneNumber.slice(0, 2) + '****' + phoneNumber.slice(-4);
    };
  return (
    <>
    <div data-v-8cd483ca="" className="info p-t-30 p-l-30 p-b-30 p-r-20">
        <Link to="/profile">
        <div data-v-8cd483ca="" className="c-row c-row-between c-row-middle state-box c-pr">
            <div data-v-8cd483ca="" className="c-row c-row-middle">
                <div data-v-8cd483ca="" className="user-img">
                    <img data-v-8cd483ca="" src={avatar} className="img" />
                </div>
                <div data-v-8cd483ca="" className="p-l-10 infoName">
                    <div data-v-8cd483ca="" className="name mb3 c-row c-row-middle"> {user.name_user} </div>
                    <div data-v-8cd483ca="" className="id tag-read mb3" data-clipboard-text="42472">ID: {user.id_user}</div>
                    <div data-v-8cd483ca="" className="number mb3">Mobile Number : +91 {maskPhoneNumber(user.phone_user)} </div>
                    
                </div>
            </div>
            <div data-v-8cd483ca="" className="profile">
                <i data-v-8cd483ca="" className="van-icon van-icon-arrow text-light">
                    
                </i>
            </div>
        </div>
        </Link>
    </div>
      
    </>
  )
}

export default ProfileDetail
