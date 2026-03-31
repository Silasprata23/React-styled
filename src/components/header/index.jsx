import  logo from '../../assets/logo.svg' ;
import search from '../../assets/search.svg' ;
import cart from '../../assets/cart.svg' ;
import ButtonList from '../list/index ';
import './style.css'

export default function Header (){
    return(
        <header className="header">
            <img src={logo} alt="" />

            <ul className="buttonsList">
                <ButtonList title={'buy'}/>
                <ButtonList title={'Sell & Trade'}/>
                <ButtonList title={'Services & Repair'}/>
            </ul>

            <ul className="list_a">
                <a href="#">Blog</a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
            </ul>

            <ul className="icons">
                <a href="#"><img src={search} alt=""/></a>
                <a href="#"><img src={cart} alt=""/></a>
            </ul>



            

        </header>
    )
}