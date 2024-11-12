import "../style/education.css"
function Education (){
    return(
     <main className="edu-con">
     <div className="edu-text">
        <h1>Education</h1>
        <p className="para1-edu" >"Driven by a commitment to lifelong learning and professional growth, I have pursued a solid academic foundation that empowers my skills and industry knowledge. With a recent MBA in Finance from Karachi University, I have gained valuable insights into financial strategy and analysis. Currently, I'm advancing my technical skills through a comprehensive Web Development course at Governor House, mastering both front-end and back-end technologies. Each academic experience has equipped me with practical, real-world skills that I'm excited to apply in my career journey."</p>  </div>


        <div className="edu-boxes">  
         
            
            {/* left-edu */}
            <div className="edu-right-box">
                <h1 className="uni">University of karachi</h1></div>
            
            {/* right-edu */}
            <div  className="des-edu">
                <h3>MBA (Finance)</h3>
                <p className="para1">"I have done an MBA in Finance from Karachi University, where I gained a strong foundation in financial analysis, strategic planning, and investment management. My education equipped me with practical skills in financial modeling and decision-making. I'm now excited to apply this expertise in dynamic, real-world settings."</p>
          
            </div>
            </div>
            {/* box-2 */}
            <div className="edu-boxes">  
         
            
            {/* left-edu */}
            <div >
                <h1 className="uni">Governor Sindh IT Initiative program</h1></div>
            
            {/* right-edu */}
            <div  className="des-edu">
                <h3>Web Development </h3>
                <p className="para1">"Currently pursuing a web development course at Governor House, where I'm building skills in front-end and back-end technologies. Passionate about creating dynamic, user-friendly websites with a focus on responsive design. Developing expertise in HTML, CSS, JavaScript, and modern frameworks.  </p>
          
            </div>
            </div>

           
           
            

        
           
        
        
   
      </main>
    )
}
export default Education;