import logo from "../../assets/logo.svg"
import  './style.css'

export default function Navbar(){
    return(
        <header>
           <nav>
            <div className="logo">
                <img src={logo} alt="" 
            />
            <p>Baum</p>
            </div>
            
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

         </nav>
        </header>
    
         
        
    )
}