import { FaCalendarDay, FaChartPie, FaCheckSquare, FaList, FaTable } from 'react-icons/fa';
import './styles.css';
import { useNavigate } from 'react-router-dom'

function LeftSide() {
    let navigate = useNavigate()
    return (

        <div className="left-side">
            <div style={{ marginLeft: '20px', padding: '18px 0px' }}>
                <img src="https://emp.infogen-labs.com/img/logo.png" alt="" width='68%' />
            </div>
            <div style={{ display: 'grid', marginTop: '7px' }}>
                <button
                    className='left-side-btn'
                    onClick={() => navigate("/")}
                // onclick="navigateTo('index.html')"
                >
                    <div style={{ fontSize: '37px' }}>
                        <FaTable />
                    </div>
                    <div className='leftSideCategory-parent'>
                        <h5 className='category-heading'>Dashboard</h5>
                    </div>
                </button>
                <button
                    className='left-side-btn'
                    onClick={() => navigate("holiday")}
                //  onclick="openHolidayList()"
                >
                    <div style={{ fontSize: '37px' }}>
                        <FaCalendarDay />
                    </div>
                    <div className='leftSideCategory-parent'>
                        <h5 className='category-heading'>Holiday Calendar</h5>
                    </div>
                </button>
                <button className='left-side-btn' onClick={()=>navigate("sprintPlanning")}>
                    <div style={{ fontSize: '37px' }}>
                        <FaCheckSquare />
                    </div>
                    <div className='leftSideCategory-parent'>
                        <h5 className='category-heading' >Sprint Planning</h5>
                    </div>
                </button>
                <button className='left-side-btn' onClick={()=>navigate("sprintCapacity")} >
                    <div style={{ fontSize: '37px' }}>
                        <FaList />
                    </div>
                    <div className='leftSideCategory-parent'>
                        <h5 className='category-heading' >Capacity</h5>
                    </div>
                </button>
                <button className='left-side-btn' onclick="openStatus()">
                    <div style={{ fontSize: '37px' }}>
                        <FaChartPie />
                    </div>
                    <div className='leftSideCategory-parent'>
                        <h5 className='category-heading' >Status</h5>
                    </div>
                </button>
            </div>
        </div>
    );
}
export default LeftSide;