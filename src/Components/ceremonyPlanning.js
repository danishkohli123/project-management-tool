// import { useState } from "react";
import DatesInput from "./datesInput";
import TotalMindAndHours from "./TotalMinsAndHours";

function CeremonyPlanning() {
  

  // const [showDataTable, setShowDatatTable] = useState(false);

  

  return (
    <>
      <div className="outer-wrapper">
        <div className="ceremonyNameAndDate">
          <h3 className="ceremonyTimeHeader">Ceremony Time (In Minutes)</h3>
          <DatesInput/>
        </div>
        <hr style={{ width: "100%" }} />
        <div id="ceremony-pdf">
          <div id="table-container-ceremony"></div>

          <TotalMindAndHours/>
        </div>
      </div>
      <div className="btn-flex-class">
        <div className="ceremonyAndAttendence">
          <button
            id="check-ceremony-btn"
            className="button button-normal button-glow"
            onclick="convertToPdf1()"
            style={{
              marginLeft: "-56vw",
              borderRadius: "10px",
              backgroundColor: "#4e4ee0",
              color: "white",
            }}
          >
            Download Pdf
          </button>
        </div>
        <div className="ceremonyAndAttendence">
          <button
            className="button button-normal button-glow"
            onclick="resetCeremony()"
          >
            Reset Ceremony
          </button>
        </div>
      </div>
    </>
  );
}
export default CeremonyPlanning;
