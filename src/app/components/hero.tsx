import "../style/hero.css"
import Image from "next/image";
const Hero = () =>{
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
         </div>
         {/* right side */}
         <div   className="box-right">
         <div className="title-head"> <h1>
            Hi, I'm Nida Haq</h1> <h1>
            Front-end Developer</h1></div>
            <p className="des-head">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis pariatur labore harum eaque. Fugit eaque, magni explicabo ullam commodi ea unde quae aspernatur porro consequuntur? Ex corporis commodi excepturi quia.</p>
            <button className="butto-style">Hire Me</button>
            </div>
    </div>
</div>
    );
    
}
export default Hero;