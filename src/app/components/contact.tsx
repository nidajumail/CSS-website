
import"../style/contact.css"
export default function Contact(){
    return(
        <main  className="contact-main">
            <div className="form-container">
                <h1 className="con-title">Contact us</h1>
            <form action="" className="form">
                <input type="text" placeholder="Enter Your Name" />
                <input type="email" placeholder="abc@email.com" />
                <input className="msg" type="text" placeholder="Your message" />
                <button className="btn">Submit</button>
                </form></div></main>
    )
}   