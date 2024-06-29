import { useState, useEffect } from 'react';
// import showAlert from "../../AlertMassWrapper.js";

function Levels() {
    const [levels, setLevels] = useState([]);
    const [showHide, setShowHide] = useState(true);
  const [sectionHide, setSectionHide] = useState(true);
  const [icon, setIcon] = useState("bi bi-dash fs-5 fw-7");
    useEffect(() => {
        const fetchLevels = async () => {
            try {
                const response = await fetch('/api/webapi/admin/levels-data');
                const data = await response.json();
                const result = data.data;
                console.log(result)
                setLevels(result);
            } catch (error) {
                console.error('Error fetching levels:', error);
            }
        };

        fetchLevels();
    }, []);

    const handleCheckboxChange = (id) => {
        const updatedLevels = levels.map(level => 
            level.id === id ? { ...level, checked: !level.checked, status: !level.checked ? 1 : 0, } : level
        );
        setLevels(updatedLevels);
    };

    const handleInputChange = (id, name, value) => {
        const updatedLevels = levels.map(level =>
            level.id === id ? { ...level, [name]: value } : level
        );
        setLevels(updatedLevels);
    };

    const updateLevels = async () => {
        try {
            const response = await fetch('/api/webapi/admin/update-levels', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(levels)
            });

            const result = await response.json();
            alert(result.message);
        } catch (error) {
            alert('Error updating levels:', error);
        }
    };

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


    return (
        <div className="content-wrapper" style={{ padding: "0px" }}>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Levels Setting</h1>
                        </div>
                    </div>
                </div>
            </section>
            {sectionHide && (
            <section className="content-fluid px-0">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h3 className="card-title">Levels Setting</h3>
                        <button onClick={updateLevels} className='updataBtn'>update</button>
                        <div className="card-tools d-flex">
                            <button type="button" onClick={showHideHandler} className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                            <i className={icon}></i>
                            </button>
                            <button type="button" onClick={HideSection} className="btn btn-tool" data-card-widget="remove" title="Remove">
                            <i className="bi bi-x-lg fs-5 fw-7"></i>
                            </button>
                        </div>
                    </div>
                    {showHide && (
                    <div className="card-body p-0" style={{ overflowY: "hidden" }}>
                        <table className="table table-striped projects" id="tableget">
                            <thead>
                                <tr>
                                    <th className="text-center">Levels</th>
                                    <th className="text-center">Select</th>
                                    <th className="text-center">Recharge</th>
                                    <th className="text-center">Bet</th>
                                </tr>
                            </thead>
                            <tbody>
                                {levels.map(level => (
                                    <tr key={level.id}>
                                        <td className="text-center">{level.id}</td>
                                        <td className="text-center">
                                            <input
                                                className="form-check-input check"
                                                type="checkbox"
                                                checked={level.status == 1}
                                                onChange={() => handleCheckboxChange(level.id)}
                                            />
                                        </td>
                                        <td className="text-center">
                                            <input
                                                type="text"
                                                name="f1"
                                                placeholder={level.f1}
                                                onChange={(e) => handleInputChange(level.id, 'f1', e.target.value)}
                                            /> %
                                        </td>
                                        <td className="text-center">
                                            <input
                                                type="text"
                                                name="f2"
                                                placeholder={level.f2}
                                                onChange={(e) => handleInputChange(level.id, 'f2', e.target.value)}
                                            /> %
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    )}
                </div>
                
            </section>
            )}
        </div>
    );
}

export default Levels;
