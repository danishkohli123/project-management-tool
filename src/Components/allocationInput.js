function AllocationInput(){
    return(
        <>
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
        </>
    )
}
export default  AllocationInput;