import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Hobby from "./Pages/Hobby/Hobby";
import Skill from "./Pages/Skill/Skill";
import Footer from "./Components/Footer/Footer"; // Impor komponen Footer

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/hobby" element={<Hobby />} />
                    <Route path="/skill" element={<Skill />} />
                </Routes>
                <Footer /> {/* Tambahkan komponen Footer di sini */}
            </div>
        </Router>
    );
}

export default App;
