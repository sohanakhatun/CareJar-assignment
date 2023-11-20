
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import Dentist from "./Components/Dentist";
import Nutritionist from "./Components/Nutritionist";
import Gync from "./Components/Gync";

function App() {
  return(
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/dentist" element={<Dentist/>}/>
    <Route path="/gync" element={<Gync/>}/>
    <Route path="/nutritionist" element={<Nutritionist/>}/>
   </Routes>
  )

  
}

export default App;
