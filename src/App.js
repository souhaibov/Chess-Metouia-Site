import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Activities from "./Pages/Activities";
import Events from "./Pages/Events";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import Login from "./Pages/Login";
import DataStudent from "./Components/DataStudents";
import { useState } from "react";
import Students from "./Pages/Students";
import Instructors from "./Pages/Instructors";
import DataInstructors from "./Components/DataInstructors";
import Managing from "./Pages/Managing";
import DataManage from "./Components/DataManaging";

function App() {
  const [Datastudent,setStudent]=useState(DataStudent);
  return (
    <div className="App">
      

        <Navbar />

        <div className="container">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/About" element={<About />} />
          <Route path="/Students" element={<Students DataStudent={Datastudent}/>} />
          <Route path="/Instructors" element={<Instructors DataInstructors={DataInstructors}/>} />
          <Route path="/Managing" element={<Managing DataManage={DataManage}/>} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        </div>

        <Footer />
     
    </div>
  );
}

export default App;
