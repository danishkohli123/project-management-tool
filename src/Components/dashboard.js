import { FaArrowRight, FaCalendarDay, FaCheck, FaClock, FaHome, FaSquarespace } from "react-icons/fa";
import './style.css';
import './styles.css';
import CeremonyPlanning from "./ceremonyPlanning";
import { useEffect } from "react";

function Dashboard() {

    const updateProgress = () => {
        // Get the input element
        const percentInput = document.getElementById("percentInput");
        // Get the value entered by the user
        const percent = parseInt(percentInput.value);
        localStorage.setItem("focusFactorValue", percent);
        // Check if the entered value is valid
        if (isNaN(percent) || percent < 0 || percent > 100) {
            alert("Please enter a valid percentage between 0 and 100.");
            return;
        }
        // Get the SVG circle element
        generateFocusFactorGraph(percent);
    }
    function generateFocusFactorGraph(percent) {
        const circle = document.querySelector("circle");

        // Calculate the circumference of the circle
        const radius = circle.getAttribute("r");
        const circumference = 2 * Math.PI * radius;

        // Calculate the dash offset based on the percent value
        const dashOffset = circumference * (1 - percent / 100);

        // Set the stroke-dasharray and stroke-dashoffset attributes of the circle
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = dashOffset;

        // Update the text to display the percentage
        document.getElementById("percentText").textContent = percent + "%";

        // Show the circle with transition
        const percentGraph = document.getElementById("percentGraph");
        percentGraph.style.opacity = 1;
    }

    useEffect(() => {
        const percentInput = document.getElementById("percentInput");
        if (percentInput) {
            console.log(percentInput);
            let fnValue = localStorage.getItem("focusFactorValue");

            if (fnValue) {
                percentInput.value = fnValue;
                const percent = parseInt(fnValue);
                generateFocusFactorGraph(percent);
            }
        }
    }, [])

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '2% 98%' }}>
            <div></div>
            <div className="main-content">
                <div className="main-div"></div>
                <div className="all-info" style={{ marginTop: "-77px" }}>
                    <div className="info-outer-div">
                        <div className="for-info-flex-secondpart">
                            <div>
                                <h5 style={{ width: "145px" }} className="sprint-name">
                                    Team |
                                    <span id="team-main-name" style={{ marginLeft: "4px" }}>
                                        Infogen + FA
                                    </span>
                                </h5>
                            </div>
                        </div>
                        <div className="all-info-division all-info-division2">
                            <div
                                className="for-info-flex"
                                style={{ backgroundColor: "transparent" }}
                            >
                                <div
                                    className="inside-info inside-info2"
                                    style={{ display: "flex" }}
                                >
                                    <div
                                        className="percent-data"
                                        style={{
                                            padding: "3px",
                                            marginLeft: "2px",
                                            marginRight: "-70px",
                                            backgroundColor: "transparent",
                                            display: "flex",
                                        }}
                                    >
                                        <div
                                            style={{
                                                backgroundColor: "transparent",
                                                marginRight: "-50px",
                                            }}
                                        >
                                            <FaHome className="focus-factor-main-icon"
                                                size={30} />
                                            <div className="focus-factor-div">
                                                <h3 className="focus-factor-h3-1">Name :</h3>
                                                <input
                                                    id="mainNameInput"
                                                    className="main-name-Input"
                                                    type="text"
                                                    onchange="teamName()"
                                                />
                                            </div>

                                            <div className="focus-factor-div">
                                                <h3 className="focus-factor-h3">Focus Factor % :</h3>
                                                <input
                                                    id="percentInput"
                                                    min="0"
                                                    max="100"
                                                    className="focus-factor-input"
                                                    type="number"
                                                    // onchange="updateProgress()"
                                                    // value={focusFactor}
                                                    onChange={() => updateProgress()}
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="percent-graph"
                                            id="percentGraph"
                                            style={{
                                                padding: "7px",
                                                backgroundColor: "transparent",
                                                position: "relative",
                                                zIndex: "2",
                                            }}
                                        >
                                            <svg
                                                id="progress"
                                                width="100%"
                                                height="100%"
                                                viewBox="0 0 100 100"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="50" cy="50" r="40" fill="none" />
                                            </svg>
                                            <div
                                                className="percent-text"
                                                id="percentText"
                                                style={{ backgroundColor: "transparent" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info-outer-div" style={{ backgroundColor: "white" }}>
                        <div className="for-info-flex-secondpart">
                            <div>
                                <h5 className="sprint-name">Current Sprint</h5>
                            </div>
                            <div>
                                <div className="dropdown" id="customDropdown">
                                    <button
                                        className="sprint-name-button"
                                        onclick="toggleOptions()"
                                    >
                                        Your Sprint
                                    </button>
                                    <ul className="dropdown-list" id="dropdownOptions"></ul>
                                </div>
                            </div>
                        </div>
                        <div className="all-info-division all-info-division2">
                            <div
                                className="for-info-flex"
                                style={{ backgroundColor: "transparent" }}
                            >
                                <div className="inside-info inside-info1">
                                    <FaSquarespace className="icon-data" style={{ backgroundColor: "#ba61fd" }} />
                                    <div
                                        style={{
                                            backgroundColor: "transparent",
                                            padding: "0px",
                                            display: "grid",
                                            gridTemplateColumns: "67% 30%",
                                        }}
                                    >
                                        <h3 className="h3-sprint-data h3-sprint-data1">
                                            Sprint Name:
                                        </h3>
                                        <input
                                            type="text"
                                            id="selectedOption"
                                            onfocusout="sprintNameFocusOutListener()"
                                        />
                                    </div>
                                    <div style={{ height: "15px" }}>
                                        <h3
                                            className="h3-sprint-data"
                                            style={{
                                                marginTop: "-13px",
                                                marginRight: "21px",
                                                marginLeft: "-11px;",
                                            }}
                                        >
                                            Sprint Duration(Weeks):
                                        </h3>
                                        <input
                                            type="number"
                                            id="selectWeek"
                                            onchange="workWeek()"
                                            style={{
                                                width: "6%",
                                                marginLeft: "189px",
                                                margin: "top",
                                                backgroundColor: "transparent",
                                                border: "none",
                                                borderRadius: "5px",
                                                fontFamily: "fantasy",
                                                fontSize: "18px",
                                                position: "relative",
                                                top: "-20px",
                                                height: "21px",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="inside-info">
                                    <FaCalendarDay className="icon-data" style={{ backgroundColor: "#feb72e" }} />
                                    <div
                                        style={{
                                            backgroundColor: "transparent",
                                            padding: "0px",
                                            display: "grid",
                                            gridTemplateColumns: "64% 36%",
                                        }}
                                    >
                                        <h3 className="h3-sprint-data h3-sprint-data2">
                                            Start Date :
                                        </h3>
                                        <span id="start-date-op"></span>
                                    </div>
                                    <div
                                        style={{
                                            backgroundColor: "transparent",
                                            padding: "0px",
                                            display: "grid",
                                            gridTemplateColumns: "64% 36%",
                                        }}
                                    >
                                        <h3 className="h3-sprint-data h3-sprint-data2">
                                            End Date :
                                        </h3>
                                        <span id="end-date-op"></span>
                                    </div>
                                </div>
                                <div className="inside-info">
                                    <FaClock className="icon-data" style={{ backgroundColor: "#1ed98c" }} />
                                    <div
                                        style={{ display: "grid", gridTemplateColumns: "91% 10%" }}
                                    >
                                        <h3 className="h3-sprint-data">Working Hours/Day:</h3>
                                        <input
                                            id="workingHour"
                                            className="working-Input"
                                            type="number"
                                            onchange="hoursWorked()"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CeremonyPlanning />
                <div className="last-three-buttons ceremony-sheet-last-btn">
                    <button className="last-buttons lastSave ceremony-sheet-last-btn-save" style={{
                        width: "46%",
                        marginRight: "72px"
                    }}>
                        <FaCheck className="last-icon last-icon-save" />
                        <h4 className="last-h4 last-h4-save">SAVE</h4>
                    </button>
                    <button
                        className="last-buttons last-next ceremony-sheet-last-btn-next"
                        onclick="openHolidayList()"
                    >
                        <h4 className="last-h4 last-h4-next">NEXT</h4>
                        <FaArrowRight className="last-icon last-icon-next" />
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;