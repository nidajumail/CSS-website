import "../style/services.css" 
import { FaLaptopCode } from "react-icons/fa";
import  { CiRollingSuitcase } from "react-icons/ci";
import { FaApple } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { AiFillAndroid } from "react-icons/ai";
import { DiChrome } from "react-icons/di";


function Services (){
    return(
<main className="services">
   
    <div className="ser-container">
         {/* top */}
        <div className="top-div-ser">
            <h1 className="title-ser">Services</h1>
        <p className="para-ser">Lorem ipsum dolor s it amet, consectetur adipisicing elit. Excepturi suscipit voluptate quo quibusdam, ullam cupiditate nihil qui quisquam dicta tempora repellendus modi illo expedita quae id facilis perspiciatis quaerat. Adipisci.</p>
        </div>
   
    {/* bottom */}
    <div className="box-container">
        <div className="box">  <FaLaptopCode className="icon1"/>
        <h3>Web Development</h3>
        <span> Blog, E-commerce</span></div>
        
        <div className="box">  <CiRollingSuitcase className="icon1"/>
        <h3>Ui/Ux</h3>
        <span> Blog, E-commerce</span></div>

        <div className="box">  <FaApple className="icon1"/>
        <h3>App Development</h3>
        <span> Blog, E-commerce</span></div>

        <div className="box">  <IoGameController className="icon1"/>
        <h3>Game Development</h3>
        <span> Blog, E-commerce</span></div>

        <div className="box">  <AiFillAndroid  className="icon1"/>
        <h3>Android Development</h3>
        <span> Blog, E-commerce</span></div>

        <div className="box">  <DiChrome className="icon1"/>
        <h3> Development</h3>
        <span> Blog, E-commerce</span></div>



    </div>
    </div>

  
    </main>
    );

}
export default Services;