import Link from "next/link";
import "../style/footer.css";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer (){
    return(
        <main className="footer"><div> All rights reserved @2024</div>
        <div>
        contact us
        </div>
        <div>
        <Link href="https://www.youtube.com/@fun.with.shaizy">     < FaYoutube  className="y-icon"/></Link>
   
   <Link href="https://www.facebook.com/profile.php?id=100080723701421"> <FaInstagram  className="y-icon1"/></Link>
  
   <Link href="https://www.facebook.com/profile.php?id=100080723701421"><FaTwitter  className="y-icon2"/></Link>
   
   <Link href="https://www.facebook.com/profile.php?id=100080723701421"><FaFacebookSquare className="y-icon3"/></Link>
   
        </div>
            </main>
    )
}
export default Footer;