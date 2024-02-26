import './style.css';
import SprintDurationDash from "./sprintDurationDash";
import StartAndEndDash from "./startAndEndDash";
import WorkingHourDash from './workingHourDash';
function DashboardSeconPart(){
    return(
        <>
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
                                <SprintDurationDash/>
                                <StartAndEndDash/>
                                <WorkingHourDash/>
                                
                               
                            </div>
                        </div>
        </>
    )
}
export default DashboardSeconPart