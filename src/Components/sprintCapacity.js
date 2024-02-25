import React from 'react';
import LastButtons from './lastButtons';
 
function SprintCapacity() {
  return (
    <div className="main-content">
      <div className="outer-wrapper" style={{ marginTop: '93px' }}>
        <div id="table-container-attendence"></div>
      </div>
      <div className="btn-flex-class">
        <div className="ceremonyAndAttendence">
          <button
            style={{
              marginTop: '15px',
              marginRight: '67vw',
              borderRadius: '10px',
              backgroundColor: '#4e4ee0',
              color: 'white',
            }}
            className="button button-normal button-glow"
            // onClick={convertToPdf2}
          >
            Download Pdf
          </button>
        </div>
      </div>
 
      <LastButtons/>
    </div>
  );
};
 
export default SprintCapacity;