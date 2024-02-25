
function EditPopUp(){
 
  return (
    <div className="main-content">
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
          onClick={closeFn}
        ></i>
        <p id="dialog-heading">Edit Employee Data</p>
        <input
          type="text"
          className="allEditedinputData"
          id="namess"
          placeholder="Edit Employee Name"
          style={{ marginLeft: '25px' }}
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
          placeholder="Edit Allocation%"
        />
        <br />
        <button id="btn">
          Save
        </button>
      </dialog>
    </div>
  );
};
 
export default EditPopUp;
 