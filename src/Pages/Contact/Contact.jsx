// Contact.css
import React from "react";
import './Contact.css';
import Navbar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import iconFacebook from '../../assets/iconfacebook.png';
import iconInstagram from '../../assets/iconinstagram.webp';
import iconWhatsApp from '../../assets/iconwa.webp';
import iconTelegram from '../../assets/icontelegram.png';

const Contact = () => {
  return (
    <section id="Contact">
    <div className="content">
      <span className="title">Contact Us</span>
      <span className="isi">If you have any questions, feel free to reach out to us via the following social media channels</span>
      
       <div className="social-icons">
           <a href="https://www.facebook.com/wanda.nur.549" target="_blank" rel="noopener noreferrer">
             <img src={iconFacebook} alt="Facebook" />
           </a>
           <a href="https://instagram.com/wanda_nrfdl?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
             <img src={iconInstagram} alt="Instagram" />
           </a>
           <a href="https://wa.me/+6285791778474" target="_blank" rel="noopener noreferrer">
             <img src={iconWhatsApp} alt="WhatsApp" />
           </a>
           <a href="https://t.me/wandanurf" target="_blank" rel="noopener noreferrer">
             <img src={iconTelegram} alt="Telegram" />
           </a>
         </div>
       

    </div>
    
  </section>
    // <section id="Contact">
    //    <div className="content">
    //     <span className="title">Contact Us</span>
    //     <span className="isi">If you have any questions, feel free to reach out to us via the following social media channels</span>
        
    //     {/* <div className="social-icons">
    //       <a href="https://www.facebook.com/wanda.nur.549" target="_blank" rel="noopener noreferrer">
    //         <img src={iconFacebook} alt="Facebook" />
    //       </a>
    //       <a href="https://instagram.com/wanda_nrfdl?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
    //         <img src={iconInstagram} alt="Instagram" />
    //       </a>
    //       <a href="https://wa.me/+6285791778474" target="_blank" rel="noopener noreferrer">
    //         <img src={iconWhatsApp} alt="WhatsApp" />
    //       </a>
    //       <a href="https://t.me/wandanurf" target="_blank" rel="noopener noreferrer">
    //         <img src={iconTelegram} alt="Telegram" />
    //       </a>
    //     </div> */}
    //   </div>
      

    // </section>
      

    
  );
};

export default Contact;
