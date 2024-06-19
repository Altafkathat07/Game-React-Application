// import { useState } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
function GiftCodeContent() {
  const [users, setUsers] = useState([]);
  const [showHide, setShowHide] = useState(true);
  const [icon, setIcon] = useState("bi bi-dash fs-5 fw-7");
  const [sectionHide, setSectionHide] = useState(true);
  const [formData, setFormData] = useState({ money: "", numberOfClaim: "" });
  const [resultVisible, setResultVisible] = useState(false);
  const [resultId, setResultId] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.replace(/\D/g, ""), // Only keep digits
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/webapi/admin/createBonus",
        formData
      );
      if (response.status === 200) {
        // console.log(response.data.id);
        setResultId(response.data.id);
        setResultVisible(true);
      }
    } catch (error) {
      console.error("Error creating bonus:", error);
    }
  };

  useEffect(() => {
    fetch("/api/webapi/admin/bonus-details")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network data was not ok " + res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        let result = data.data;
        console.log("Fetched data:", data.data);
        if (data.status === true) {
          const usersArray = Object.values(result);
          setUsers(usersArray);
        } else {
          console.error("Data format is not as expected:", data);
        }
      })
      // .then((data) => {
      //     console.log(data)
      //   setUsers(data);
      // })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  function formateT(params) {
    let result = params < 10 ? "0" + params : params;
    return result;
  }

  function timerJoin(params = "", addHours = 0) {
    let date = "";
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

    return (
      years +
      "-" +
      months +
      "-" +
      days +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds +
      " " +
      ampm
    );
  }

  const showHideHandler = () => {
    setShowHide((prevShowHide) => !prevShowHide);
    setIcon((prevIcon) =>
      prevIcon === "bi bi-plus-lg fs-5 fw-7"
        ? "bi bi-dash-lg fs-5 fw-7"
        : "bi bi-plus-lg fs-5 fw-7"
    );
  };
  const HideSection = () => {
    setSectionHide(false);
  };
  const copyLinkToClipboard = () => {
    const url = document.getElementById('money_result').value;
    navigator.clipboard.writeText(url);
    Swal.fire('Copy Success!', '', 'success');
  };

  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={handleSubmit}>
              <div style={{ padding: "10px 20px" }}>
                <div className="form-group money">
                  <label htmlFor="money">Giftcode Amount</label>
                  <input
                    type="text"
                    onInput="value=value.replace(/\D/g,'')"
                    name="money"
                    className="form-control"
                    id="money"
                    placeholder="Enter the amount"
                    value={formData.money}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group money">
                  <label htmlFor="user">Max Users claim</label>
                  <input
                    type="number"
                    className="form-control"
                    id="user"
                    onInput="value=value.replace(/\D/g,'')"
                    name="numberOfClaim"
                    placeholder="Enter the no of user"
                    value={formData.numberOfClaim}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group result" style={{ display: resultVisible ? 'flex' : 'none' }}>
                    <input
                      type="text"
                      className="form-control"
                      id="money_result"
                      placeholder="Link"
                      value={resultId}
                      readOnly
                      style={{background: "transparent", color: "#333"}}
                    />
                    <div className="input-group-text copy_link" style={{background: "#b970ff", color: "#fff", }} onClick={copyLinkToClipboard}>
                      <i className="fa fa-clone" aria-hidden="true"></i>
                    </div>
                  </div>
                <button
                  type="submit"
                  className="btn btn-danger"
                  id="submit"
                  style={{ width: "100%", marginTop: "26px", }}
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {sectionHide && (
        <section className="content">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h3 className="card-title">Gift code has not been used yet</h3>
              <div className="card-tools">
                <button
                  type="button"
                  onClick={showHideHandler}
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className={icon}></i>
                </button>
                <button
                  type="button"
                  onClick={HideSection}
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="bi bi-x-lg fs-5 fw-7"></i>
                </button>
              </div>
            </div>
            {showHide && (
              <div
                className="card-body p-0"
                style={{ display: "block", overflowY: "hidden" }}
              >
                <table className="table table-striped projects" id="table1">
                  <thead>
                    <tr>
                      <th style={{ fontWeight: "700" }}>ID</th>
                      <th style={{ fontWeight: "700" }}>Creator</th>
                      <th style={{ fontWeight: "700" }}>Gift code Amount</th>
                      <th style={{ fontWeight: "700" }}>Users</th>
                      <th style={{ fontWeight: "700" }}>Already Used</th>
                      <th style={{ fontWeight: "700" }}>Time</th>
                    </tr>
                  </thead>
                  <tbody id="list-details-news">
                    {users.map((user, index) =>
                      user.id ? (
                        <tr key={index}>
                          <td style={{ fontWeight: "600" }}>
                            {user.id_redenvelope ?? "no data"}
                          </td>
                          <td style={{ fontWeight: "600", color: "#3498db" }}>
                            {user.phone}
                          </td>
                          <td style={{ fontWeight: "600", color: "#e74c3c" }}>
                            {user.money}
                          </td>
                          <td style={{ fontWeight: "600" }}>
                            {user.max_claims}
                          </td>
                          <td style={{ fontWeight: "600", color: "#ffc107" }}>
                            {user.max_count ?? "null"}{" "}
                          </td>
                          <td style={{ fontWeight: "600" }}>
                            {timerJoin(user.time)}
                          </td>
                        </tr>
                      ) : null
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}

export default GiftCodeContent;
