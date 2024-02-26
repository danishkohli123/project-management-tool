import {FaSquarespace } from "react-icons/fa";
import './style.css';
function SprintDurationDash (){
    return(
        <>
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
        </>
    )
}
export default SprintDurationDash;