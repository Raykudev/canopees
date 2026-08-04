import logo from "../assets/logo.png"
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
    <footer>
        <div className="footer-colonnes">
        <div className="footer-logo">
            <img src={logo} alt="logo de l'entreprise Canopees" />
            <p>Société spécialisé dans la création et l'entretien d'espaces verts pour les particuliers, professionnels et les collectivités territoriales depuis 2020.
            </p>
        </div>
        <nav className="footer-nav">
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/qui-sommes-nous">Qui sommes-nous</Link></li>
                <li><Link to="/prestations">Prestations</Link></li>
                <li><Link to="/tarifs">Tarifs</Link></li>
                <li><Link to="/contact">Contact</Link></li> 
            </ul>
        </nav>
        <div className="footer-legal">
            <ul>
                <li><Link to="/cgu">CGU</Link></li>
                <li><Link to="/cgv">CGV</Link></li>
                <li><Link to="/mentions-legales">Mentions légales</Link></li>
            </ul>
        </div>
        </div>
        <div className="footer-copyright">
            <p>© 2026 Canopées - Tous droits réservés</p>
        </div>
    </footer>
       
  )
}

export default Footer