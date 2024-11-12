import Link from "next/link";
import "../style/header.css"


function Header(){
    return(
        <main className="header">
            <header className="header-left-div" >
                <h1 >LOGO</h1>  </header>
                <div className="header-right-div">
                <nav>
                    <ul className= "header-links">
                        <li><Link className="nav-links" href="/">Home</Link></li>
                        <li><Link className="nav-links" href="/About">About</Link></li>
                        <li><Link  className="nav-links" href="/Contact">Contact</Link></li>
                    </ul>
                </nav>
                </div>
            
          
        </main>
    )
}
export default Header;
// https://event.webinarjam.com/go/live/2/4k03wbgi6f3w5so60