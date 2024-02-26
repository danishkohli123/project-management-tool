import {FaCalendarDay} from "react-icons/fa";
import './style.css';
function StartAndEndDash(){
    return(
        <>
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
        </>
    )
}
export default StartAndEndDash;