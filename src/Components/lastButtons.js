const LastButtons = () => {  
    return (
     
        <div className="last-three-buttons">
          <button className="last-buttons last-back" >
            <i className="fa-solid fa-arrow-left last-icon last-icon-back"></i>
            <h4 className="last-h4 last-h4-back">BACK</h4>
          </button>
          <button className="last-buttons last-save" >
            <i className="fa-solid fa-check last-icon last-icon-save"></i>
            <h4 className="last-h4 last-h4-save">SAVE</h4>
          </button>
          <button className="last-buttons last-next" >
            <h4 className="last-h4 last-h4-next">NEXT</h4>
            <i className="fa-solid fa-arrow-right last-icon last-icon-next"></i>
          </button>
        </div>
     
    );
  };
   
  export default LastButtons;