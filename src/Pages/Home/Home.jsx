import Navbar from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";


import React from "react";
import './Home.css';
import foto from '../../assets/foto.jpg';
// import { Link } from 'react-scroll';

const Home = () => {
  
  return (
      <section id="home">
        <div className="heroContent">
          <span className="hello">Hello,</span>
          <span className="introText">I'm <span className="introName">Wanda</span> <br/>Nurfadila</span>
          <p className="introPara">Welcome To My Website.</p>
          

        </div>
        <img src={foto} alt="Profile" className="foto" />
      </section>
  );
};

export default Home;