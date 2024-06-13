
import { useState, useEffect } from "react";

function WithdrawalTable() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('/api/webapi/admin/withdraw-detail')
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network data was not ok ' + res.statusText);
          }
          return res.json();
        }) .then((data) => {
          let result = data.data;
          console.log('Fetched data:', data.data);
          if (data.status === true ) {
            const usersArray = Object.values(result);
            setUsers(usersArray);
          } else {
            console.error('Data format is not as expected:', data);
          }
        })
        // .then((data) => {
        //     console.log(data)
        //   setUsers(data); 
        // })
        .catch((error) => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    }, []);

    
    function formateT(params) {
        let result = (params < 10) ? "0" + params : params;
        return result;
        }
        
        function timerJoin(params = '', addHours = 0) {
            let date = '';
            if (params) {
                date = new Date(Number(params));
            } else {
                date = new Date();
            }
        
            date.setHours(date.getHours() + addHours);
        
            let years = formateT(date.getFullYear());
            let months = formateT(date.getMonth() + 1);
            let days = formateT(date.getDate());
        
            let hours = date.getHours() % 12;
            hours = hours === 0 ? 12 : hours;
            let ampm = date.getHours() < 12 ? "AM" : "PM";
        
            let minutes = formateT(date.getMinutes());
            let seconds = formateT(date.getSeconds());
        
            return years + '-' + months + '-' + days + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        }
  return (
    <>
       {users.length === 0 ? (
        <p>No users available</p>
      ) : (
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
            <tr style={{textAlign: "center"}}>
                <th style={{fontWeight: "600"}}>Account</th>
                <th style={{fontWeight: "600"}}>Type</th>
                <th style={{fontWeight: "600"}}>Amount</th>
                <th style={{fontWeight: "600"}}>Code</th>
                <th style={{fontWeight: "600"}}>UTR</th>
                <th style={{fontWeight: "600"}}>Time</th>
                <th style={{fontWeight: "600"}}>Status</th>
                <th style={{fontWeight: "600"}}>Accept/Reject</th>
            </tr>
        </thead>
        <tbody>
          
            {/* {console.log("this is the user : " + JSON.stringify(users, null, 2))} */}
        {users.map((user, index) => (
          user.id ? (
           
            <tr key={index} style={{textAlign: "center"}}>
              <td style={{fontWeight: "600"}}>{user.phone ?? "no data"}</td>
              <td style={{fontWeight: "600", color: "#3498db"}}>{user.type ?? "BANKING"}</td>
              <td style={{fontWeight: "600"}}>{user.money}</td>
              <td style={{fontWeight: "600"}}>{user.id_order}</td>
              <td style={{fontWeight: "600"}}>{user.utr ?? "null"} </td>
              <td style={{fontWeight: "600"}}>{timerJoin(user.time) }</td>
              <td >  <span
                      className={` btn-rounded p-1 text-dark ${user.status === 1 ? 'btn-success' : 'btn-warning'}`}
                    
                    >
                      {user.status === 1 ? 'success' : 'waiting'}
                    </span>
                    </td>
              <td style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <form action={`/api/webapi/admin/withdraw-confirm/${user.id}`} method="post">
                <button className="btn btn-success btn-sm confirm-btn" href="" data="97"><i className="fa fa-check"></i></button>
                 </form>
                <form action={`/api/webapi/admin/withdraw-cancel/${user.id}/${user.money}`} method="post">
                <button className="btn btn-danger btn-sm delete-btn" href="" data="97"><i className="bi bi-trash3-fill"></i></button>
                </form>
              </td>
            </tr>
            ) : null
          ))}
        </tbody>
      </table>)}
    </>
  )
}

export default WithdrawalTable
