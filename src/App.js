import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeftSide from "./Components/leftSide";
import Holiday from "./Components/holiday";
import Main from "./Components/main";
import SprintCapacity from "./Components/sprintCapacity";
import SprintPlanning from "./Components/sprintPlanning";
function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <LeftSide />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="holiday" element={<Holiday />} />
            <Route path="sprintCapacity" element={<SprintCapacity />} />
            <Route path="sprintPlanning" element={<SprintPlanning />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
