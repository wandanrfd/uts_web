import Navbar from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";


import React from "react";
import './About.css';
import UMM from '../../assets/UMM.jpg';


const About = () => {
  
  return (
    <section id='About'>
        <span className="aboutTitle">About Me</span>
        <p className="aboutIsi"> Hallo, Nama Saya Wanda Nurfadila Saya adalah seorang mahasiswa yang antusias dan bersemangat di Universitas Muammadiya Malang, jurusan Informatika. Saya sedang menjalani tahun ke-3 dalam perjalanan akademik saya.Selain fokus pada studi, saya aktif dalam berbagai kegiatan ekstrakurikuler dan organisasi di kampus. Saya adalah anggota aktif di Robotika UMM, di mana saya telah belajar Hardskill dan softskill kepemimpinan dan berkolaborasi dalam tim.</p>
        <img src={UMM} alt="UMM" className="umm" />
    </section>
  );
};

export default About;