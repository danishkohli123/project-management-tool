function CeremonyPlanning() {
    return (
      <>
        
          <div className="outer-wrapper">
            <div className="ceremonyNameAndDate">
              <h3 className="ceremonyTimeHeader">Ceremony Time (In Minutes)</h3>
              <div className="sec-div">
                <div className="label-div">
                  <input
                    className="date-input"
                    type="date"
                    id="start-date"
                    name="start-date"
                    title="Enter Start date"
                    style={{
                      marginLeft: "-12px",
                      marginRight: "-51px",
                      marginTop: " 23px",
                    }}
                  />
                </div>
                <h3 style={{ marginLeft: "5px", marginBottom: "22px" }}>|</h3>
                <div className="label-div">
                  <input
                    className="date-input"
                    type="date"
                    id="end-date"
                    name="end-date"
                    title="Enter End date"
                    style={{
                      marginLeft: "15px",
                      marginRight: "-83px",
                      marginTop: "23px",
                    }}
                    onchange="forDateAndCeremonyTime()"
                  />
                </div>
              </div>
            </div>
            <hr style={{ width: "100%" }} />
            <div id="ceremony-pdf">
              <div id="table-container-ceremony"></div>
              <div
                style={{
                  display: "flex",
                  fontFamily: "Franklin Gothic Medium",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "16px" }}>
                    Total Ceremony Time/ <br />
                    Team Member(In Minutes)
                  </h3>
                  <p id="total-min" style={{ color: " gold", fontSize: "19px" }}>
                    0
                  </p>
                </div>
                <div style={{ marginLeft: "95px" }}>
                  <h3 style={{ fontSize: "16px" }}>
                    Total Ceremony Time/ <br />
                    Team Member(In Hours)
                  </h3>
                  <p
                    id="total-hour"
                    style={{ color: "#1ed98c", fontSize: "19px" }}
                  >
                    0
                  </p>
                </div>
              </div>
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