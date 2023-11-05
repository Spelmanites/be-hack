
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReserveCarryOn from "../ReserveCarryOn/ReserveCarryOn";
import LandingPage from "../LandingPage/LandingPage"; 
import CarryOnPrompt from "../CarryOnPrompt/CarryOnPrompt"; 

import './App.css'
import Confirmation from "../Confirmation/Confirmation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/reservecarryon" element={<ReserveCarryOn/>} />
          <Route path="/carryon" element={<CarryOnPrompt/>} />
          <Route path="/Confirmation" element={<Confirmation/>} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;