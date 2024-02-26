import { FaArrowRight, FaCheck,FaHome} from "react-icons/fa";
import './style.css';
import './styles.css';
import CeremonyPlanning from "./ceremonyPlanning";
import { useEffect } from "react";
import DashboardSeconPart from "./dashboadSecondPart";

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
    const  resetCircle = () => {
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
    }
    const retriveMainName = ()=>{
    // Retrieve team name from local storage
  let storedTeamName = localStorage.getItem("TeamName");
  // Check if a team name is stored
  if (storedTeamName) {
    // Set the inner HTML of the element with id "team-main-name" to the retrieved team name
    if (document.getElementById("team-main-name")) {
      document.getElementById("team-main-name").innerHTML = storedTeamName;
    }
    if (document.getElementById("mainNameInput")) {
      document.getElementById("mainNameInput").value = storedTeamName;
    }
  }
}
    useEffect(() => {
        resetCircle();
        retriveMainName();
    })
    const teamName =()=> {
        let teamName = document.getElementById("mainNameInput").value;
        document.getElementById("team-main-name").innerHTML = teamName;
        localStorage.setItem("TeamName", teamName);
      }
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '2% 98%' }}>
            <div></div>
            <div className="main-content">
                <div className="main-div"></div>
                <div className="all-info" style={{ marginTop: "-77px" }}>
                    <div className="info-outer-div">
                        <div className="for-info-flex-secondpart">
                            <div>
                                <h5 style={{ width: "147px" }} className="sprint-name">
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
                                                    onChange={()=>teamName()}
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
                            <DashboardSeconPart/>
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