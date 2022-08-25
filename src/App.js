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
          <Route path="/About" element={<About DataStudent={Datastudent}/>} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        </div>

        <Footer />
     
    </div>
  );
}

export default App;
