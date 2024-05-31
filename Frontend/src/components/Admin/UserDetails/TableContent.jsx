import { useState, useEffect } from "react";

function TableContent() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8888/api/webapi/admin/user-details')
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


  
    const toggleStatus = async (userId, currentStatus) => {
      const newStatus = currentStatus === 1 ? 0 : 1;
      try {
        const response = await fetch(`http://localhost:8888/api/webapi/admin/update-user-status/:id/${userId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ status: newStatus })
        });
        if (response.ok) {
          setUsers(users.map(user => user.id === userId ? { ...user, status: newStatus } : user));
        } else {
          console.error('Failed to update status');
        }
      } catch (error) {
        console.error('There has been a problem with your toggle status operation:', error);
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
                <form action={`http://localhost:8888/api/webapi/admin/user-edit/${user.id}`} method="post">
                <button type="button" className="btn btn-link btn-sm btn-rounded">
                  Edit
                </button> 
                </form>
                <form action={`http://localhost:8888/api/webapi/admin/user-delete/${user.id}`} method="post">
                <button type="submit" className="btn btn-link btn-sm btn-rounded">
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
