import AllocationInput from "./allocationInput";
import HolidayInput from "./holidayInput";
import LastButtons from "./lastButtons";
function Holiday(){

  return (
    <div className="main-content">
      <div className="teamMember-and-holiday">
        <AllocationInput/>
 
        <HolidayInput/>
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
 