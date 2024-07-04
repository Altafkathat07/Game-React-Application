import PromotionFirst from "./PromotionFirst"
import { useState, useEffect } from "react";

function TutorialContent() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/api/webapi/level_record')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok ' + res.statusText);
                }
                return res.json();
            })
            .then((data) => {
                // console.log('Fetched data:', data);
                if (data.status === true) {
                    const usersArray = Object.values(data.data);
                    setUsers(usersArray);
                } else {
                    console.error('Data format is not as expected:', data);
                }
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);

  return (
    <>
       <div data-v-7c8bbbf4="" className="promotion">
        <PromotionFirst />
       </div>
       <div data-v-7c8bbbf4="" className="titel c-row c-row-between ref">Referral Condition For Level Commission</div>
       <div data-v-7c8bbbf4="" className="table">
                        <div data-v-7c8bbbf4="" className="hd van-row">
                            <div data-v-7c8bbbf4="" className="c-tc van-ellipsis van-col van-col--8">Total Levels</div>
                            {/* <div data-v-7c8bbbf4="" className="c-tc van-ellipsis van-col van-col--6">Referrals</div> */}
                            <div data-v-7c8bbbf4="" className="c-tc van-ellipsis van-col van-col--8">Recharge Commission</div>
                            <div data-v-7c8bbbf4="" className="c-tc van-ellipsis van-col van-col--">bet Commission</div> 
                        </div>
                        {users.map((user, index) => (
                            users ? (
                            <div key={index} className="bd van-row" data-v-7c8bbbf4="">
                                
                                <div key={index} className="c-tc van-ellipsis van-col van-col--8" data-v-7c8bbbf4="">
                                Lvl {user.id}
                                </div>
                                {/* <div className="c-tc van-col van-col--6" data-v-7c8bbbf4="">
                                {2}
                                </div> */}
                                <div className="c-tc van-col van-col--8" data-v-7c8bbbf4="">
                                {user.f1}%
                                </div>
                                <div className="c-tc van-col van-col--8" data-v-7c8bbbf4="">
                                {user.f2}%
                                </div>
                            </div> ) : `<div> NO MORE DATA </div>`
                        ))}

                      
                        
        </div>
    </>
  )
}

export default TutorialContent
