import {FaClock} from "react-icons/fa";
import './style.css';
function WorkingHourDash(){
    return(
        <>
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
        </>
    )
}
export default WorkingHourDash;