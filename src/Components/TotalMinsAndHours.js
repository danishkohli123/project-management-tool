function TotalMindAndHours(){
    return(
        <>
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
              <p id="total-hour" style={{ color: "#1ed98c", fontSize: "19px" }}>
                0
              </p>
            </div>
          </div>
        </>
    )
}
export default TotalMindAndHours;