import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "../Home/Footer"
import Header from "../Home/Header"
import '../../assets/home/css/index.css'
import '../../assets/home/css/login.css'

function SalaryRecord() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
      axios.get('/getrecord')
          .then(response => {
              updateTable(response.data);
          })
          .catch(error => {
              console.log('Error fetching data:', error);
          });
  }, []);

  const updateTable = (data) => {
      if (Array.isArray(data.rows) && data.rows.length > 0) {
          setRows(data.rows);
      } else {
          console.log('No data found or invalid response format');
      }
  };
  return (
    <>
      <div id="app">
		<div data-v-432e6ed0="" className="home mian game" id="application">
            <Header />
            <div className="card">
                <div data-v-432e6eddd="" className="card-body cardTBody">
                  <table className="table" id="tableget">
                    <thead>
                      <tr>
                        <th data-v-432e6eddw="" className="text-center salary">Phone</th>
                        <th data-v-432e6eddw="" className="text-center salary">Amount</th>
                        <th data-v-432e6eddw="" className="text-center salary">Type</th>
                        <th data-v-432e6eddw="" className="text-center salary">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                    {rows.map((item, index) => (
                    <tr key={index}>
                        <td className="text-center">{item.phone}</td>
                        <td className="text-center">{item.amount}</td>
                        <td className="text-center">{item.type}</td>
                        <td className="text-center">{item.time}</td>
                    </tr>
                ))}
                    </tbody>
                  </table>
                </div>
            </div>
            <Footer />
        </div>
    </div>
    </>
  )
}

export default SalaryRecord
