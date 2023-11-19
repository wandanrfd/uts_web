import Navbar from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";


import React from "react";
import './Skill.css';
import UMM from '../../assets/UMM.jpg';


const Hobby = () => {
  
  return (
    <section id='Skill'>
        <span className="skillTitle">My Skill</span>
        <p className="skillIsi">1.Pemrograman: Kemampuan untuk menulis kode komputer dalam berbagai bahasa pemrograman, seperti  Java dan C++.</p>
        <p className="skillIsi">2.Pemaaman Dasar Kecerdasan Buatan (AI) : pengolahan citra melibatkan teknik kecerdasan buatan dan pembelajaran mesin untuk tugas seperti klasifikasi citra atau deteksi objek.</p>
        <img src={UMM} alt="UMM" className="umm" />
    </section>
  );
};

export default Hobby;