import logo from "../assets/logo.png"
import './Header.css'
import { Link } from 'react-router-dom'

function Header(){

    return(
        <header>
            <img src={logo} alt="logo de l'entreprise Canopees" />
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/qui-sommes-nous">Qui sommes-nous</Link></li>
                    <li><Link to="/prestations">Prestations</Link></li>
                    <li><Link to="/tarifs">Tarifs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>   
                </ul>
            </nav>
            
        </header>
    )
}
export default Header