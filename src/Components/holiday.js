import LastButtons from "./lastButtons";
function Holiday(){

  return (
    <div className="main-content">
      <div className="teamMember-and-holiday">
        <div style={{ marginTop: '40px' }}>
          <div className="team-members-data-input">
            <input
              type="text"
              id="name"
              placeholder="Employee Name"
            />
            <input
              type="text"
              id="role"
              placeholder="Employee Role"
            />
            <input
              type="number"
              id="allocationPercentage"
              placeholder="Allocation%"
            />
          </div>
          <div className="team-member-allocation-div">
            <table id="allocationTable"></table>
          </div>
        </div>
 
        <div className="holiday-list-div">
          <div className="holiday-input-div">
            <input
              id="holiday-date"
              className="info-input holiday-date-input"
              type="date"
            />
            <input
              id="occasion"
              placeholder="Enter Occasion"
              className="info-input holiday-occasion-input"
              type="text"
              style={{ width: '120px' }}
            />
          </div>
          <div id="holiday-table-container"></div>
        </div>
      </div>
 
      <dialog id="popUp">
        <i
          className="fa-solid fa-circle-xmark"
          style={{
            color: '#f50000',
            display: 'flex',
            justifyContent: 'end',
            marginRight: '47px',
            fontSize: '30px'
          }}
        ></i>
        <p id="dialog-heading">Edit Employee Data</p>
        <input
          type="text"
          className="allEditedinputData"
          id="namess"
          placeholder="Edit Employee Name"
        />
        <input
          type="text"
          className="allEditedinputData"
          id="roless"
          placeholder="Edit Employee Role"
        />
        <input
          type="number"
          className="allEditedinputData"
          id="allocationPercentagess"
        />
        <br />
        <button id="btn">
          Save
        </button>
      </dialog>
 
      <LastButtons />
    </div>
  );
};
 
export default Holiday;
 