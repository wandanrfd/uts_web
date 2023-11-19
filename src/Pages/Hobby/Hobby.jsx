import Navbar from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";


import React from "react";
import './Hobby.css';
import hobby from '../../assets/hobby.jpg';


const Hobby = () => {
  
  return (
    <section id='Hobby'>
        <span className="hobbyTitle">My Hobby</span>
        <p className="hobbyIsi">Hobby saya adalah memasak.Menurut saya hobi memasak adalah peluang untuk terus belajar dan meningkatkan keterampilan membuat aneka masakan. 
                Saya juga suka membaca buku resep, atau eksperimen dengan bahan-bahan baru untuk terus mengembangkan kemampuan memasak saya. 
                Ini adalah hobi yang tidak pernah berakhir, karena selalu ada hal baru yang dapat saya pelajari dan ciptakan dalam dunia memasak.</p>
        <img src={hobby} alt="hobby" className="hobby" />
    </section>
  );
};

export default Hobby;