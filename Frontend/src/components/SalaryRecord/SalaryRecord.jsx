import Footer from "../Home/Footer"
import Header from "../Home/Header"
import '../../assets/home/css/index.css'
import '../../assets/home/css/login.css'

function SalaryRecord() {
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
