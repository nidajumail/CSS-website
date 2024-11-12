import Link from "next/link";
import "../style/hero.css"
import "../style/about.css"
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";
const About = () =>{
    return(
<div  className="header-container">
    <div className="boxes">
       <div className="box-left">
        {/* left side */}
        <Image className="img"
        src="/images/pp.jpg"
         alt="profile"
         width={200}
         height={200}/> 
        <div className="social-logos">
        <Link href="https://www.youtube.com/@fun.with.shaizy">     < FaYoutube  className="y-icon"/></Link>
   
        <Link href="https://www.facebook.com/profile.php?id=100080723701421"> <FaInstagram  className="y-icon1"/></Link>
       
        <Link href="https://www.facebook.com/profile.php?id=100080723701421"><FaTwitter  className="y-icon2"/></Link>
        
        <Link href="https://www.facebook.com/profile.php?id=100080723701421"><FaFacebookSquare className="y-icon3"/></Link>
        </div>
        </div>
        
         {/* right side */}
         <div   className="box-right">
         <div className="title-head"> <h1>
           About us</h1> </div>
            <p className="des-head">"I'm a full-stack developer specializing in creating efficient, scalable, and visually engaging applications. With a robust understanding of both frontend and backend technologies, I bring ideas to life while ensuring that they are optimized for performance and user experience.</p> 
            <h3>Skills </h3>
<p>Frontend: HTML, CSS, JavaScript, React </p>
 <p>Backend: Node.js </p>
            </div>
    </div>
</div>
    );
    
}
export default About;