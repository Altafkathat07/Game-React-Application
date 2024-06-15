import { useState, useEffect } from "react";
import axios from "axios";

function PromotionTabel() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.post('/api/webapi/promotion')
        .then(response => {
            console.log("table list response:", response.data);
            if (Array.isArray(response.data)) { // Ensure response.data.datas is an array
            console.log("table list response:", response.data);
                setUsers(response.data);
            } else {
                
                setUsers([]); // Default to empty array if data format is unexpected
            }
        })
        .catch(error => console.log(error));
}, []);
  return (
    <>
       <div data-v-7c8bbbf4="" className="titel c-row c-row-between">Referral Condition For Level Commission</div>
                    <div data-v-7c8bbbf4="" className="table">
                        <div data-v-7c8bbbf4="" className="hd van-row">
                            <div data-v-7c8bbbf4="" className="c-tc van-ellipsis van-col van-col--6">Total Levels</div>
                            <div data-v-7c8bbbf4="" className="c-tc van-ellipsis van-col van-col--6">Referrals</div>
                            <div data-v-7c8bbbf4="" className="c-tc van-ellipsis van-col van-col--6">Commission</div> 
                            <div data-v-7c8bbbf4="" className="c-tc van-ellipsis van-col van-col--6">Recharge</div>
                        </div>
                        {users.map((user, index) => (
                            users ? (
                            <div key={index} className="bd van-row" data-v-7c8bbbf4="">
                                {user.level.map((level, levelIndex) => (
                                <div key={levelIndex} className="c-tc van-ellipsis van-col van-col--6" data-v-7c8bbbf4="">
                                    Lvl {level}
                                </div>
                                ))}
                                <div className="c-tc van-col van-col--6" data-v-7c8bbbf4="">
                                2
                                </div>
                                <div className="c-tc van-col van-col--6" data-v-7c8bbbf4="">
                                1%
                                </div>
                                <div className="c-tc van-col van-col--6" data-v-7c8bbbf4="">
                                600
                                </div>
                            </div> ) : `<div> NO MORE DATA </div>`
                        ))}

                      
                        
                    </div>
    </>
  )
}

export default PromotionTabel
