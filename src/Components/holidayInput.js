import HolidayTable from "./holidayTable";
// 
function HolidayInput(){
    return(
        <>
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
          <HolidayTable/>
        </div>
        </>
    )
}
export default HolidayInput;