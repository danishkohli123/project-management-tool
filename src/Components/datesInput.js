function DatesInput(){
    return(
        <>
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
        </>
    )
}
export default DatesInput;