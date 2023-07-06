import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/profile/Profile";
import Add_sponser from "./components/sponsers/Add_sponser";
import Apply_Sponser_form from "./components/sponsers/Apply_Sponser_form";
import Sponser from "./components/sponsers/Sponser";
import Add_teamup from "./components/teamup/Add_teamup";
import Apply_teamup from "./components/teamup/Apply_teamup";
import Teamup from "./components/teamup/Teamup";
import TeamUp_request from "./components/teamup/TeamUp_request";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/sponser" element={<Sponser/>}/>
        <Route path="/add-sponser" element={<Add_sponser/>}/>
        <Route path="/apply-sponser" element={<Apply_Sponser_form/>}/>
        <Route path="/teamup" element={<Teamup/>}/>
        <Route path="/add-teamup" element={<Add_teamup/>}/>
        <Route path="/apply-teamup" element={<Apply_teamup/>}/>
        <Route path="/teamup-request" element={<TeamUp_request/>}/>
      </Routes>
    </div>
  );
}

export default App;
