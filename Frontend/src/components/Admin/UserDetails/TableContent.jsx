import { useState, useEffect } from "react";

function TableContent() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8888/api/webapi/admin/user-details')
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok ' + res.statusText);
          }
          return res.json();
        })
        .then((data) => {
            console.log(data)
          setUsers(data); 
        })
        .catch((error) => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    }, []);
    // const toggleStatus = async (userId) => {
    //     try {
    //       const response = await fetch(`http://localhost:8888/api/webapi/admin/toggle-status/${userId}`, {
    //         method: 'PUT',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ status: 1 }) 
    //       });
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok ' + response.statusText);
    //       }
    //     } catch (error) {
    //       console.error('There has been a problem with your toggle status operation:', error);
    //     }
    //   };

  return (
    <>
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
            {console.log("this is the user : " + JSON.stringify(users, null, 2))}
        {users.map((user, index) => (
           
            <tr key={index}>
              <td>{user.name_user}</td>
              <td>{user.money}</td>
              <td>
                <span className="badge badge-success rounded-pill d-inline">
                  {user.status === 1 ? (
                    <button>Block</button>
                  ) : (
                    <button>Activate</button>
                  )}
                </span>
              </td>
              <td>
                <button type="button" className="btn btn-link btn-sm btn-rounded">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TableContent
