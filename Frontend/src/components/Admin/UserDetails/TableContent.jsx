import { useState, useEffect } from "react";
import { showAlert } from "../../AlertMassWrapper";

function TableContent() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('/api/webapi/admin/user-details')
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network data was not ok ' + res.statusText);
          }
          return res.json();
        }) .then((data) => {
          let result = data.data;
          // console.log('Fetched data:', data.data);
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


  
    const toggleStatus = async (userId, currentStatus) => {
      // e.preventDefault();
      try {
        const newStatus = currentStatus === 1 ? 0 : 1;
        const response = await fetch(`/api/webapi/admin/update-user-status/${userId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: newStatus }),
        });
    
        const data = await response.json();
    
        if (response.ok) {
          const updatedUsers = users.map(user => {
            if (user.id === userId) {
              return { ...user, status: newStatus };
            }
            return user;
          });
          setUsers(updatedUsers);
          showAlert(data.message);
        } else {
          showAlert(data.message);
        }
      } catch (error) {
        showAlert('Failed: ' + error);
      }
    }; 
  
    const DeleteUser = async (userId) => {
      try {
        const response = await fetch(`/api/webapi/admin/user-delete/${userId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        const data = await response.json();
  
        if (response.ok) {
          const updatedUsers = users.filter(user => user.id !== userId);
          setUsers(updatedUsers);
          showAlert(data.message);
        } else {
          showAlert(data.message);
        }
      } catch (error) {
        showAlert('Failed: ' + error);
      }
    };
    
   
  return (
    <>
     {users.length === 0 ? (
        <p>No users available</p>
      ) : (
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
            <tr>
                <th>Member Name</th>
                <th>Phone</th>
                <th>Money</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          
            {/* {console.log("this is the user : " + JSON.stringify(users, null, 2))} */}
        {users.map((user, index) => (
          user.id ? (
           
            <tr key={index}>
              <td>{user.name_user ?? "no data"}</td>
              <td>{user.phone}</td>
              <td>{user.money}</td>
              <td>
                    <button
                      className={`btn btn-link btn-sm btn-rounded text-light ${user.status === 1 ? 'btn-success' : 'btn-danger'}`}
                      onClick={() => toggleStatus(user.id, user.status)}
                    >
                      {user.status === 1 ? 'Active' : 'Block'}
                    </button>
              </td>
              <td>
                
                <form action={`/api/webapi/admin/user-delete/${user.id}`} method="post">
                <button type="submit" className="btn btn-link btn-sm btn-rounded">
                  Edit
                </button>
                </form>
                <form onClick={(e) => { e.preventDefault(); DeleteUser(user.id); }}>
                <button type="button" className="btn btn-link btn-sm btn-rounded ">
                  Delete
                </button> 
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

export default TableContent
