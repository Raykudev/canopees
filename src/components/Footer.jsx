import { useState, useEffect } from 'react'
import logo from "../assets/logo.png"
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  const [entreprise, setEntreprise] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/entreprises`)
      .then((reponse) => reponse.json())
      .then((data) => setEntreprise(data.member[0]))
  }, [])

  return (
    
    <footer>
        <div className="footer-colonnes">
        <div className="footer-logo">
            <img src={logo} alt="logo de l'entreprise Canopees" />
            <p>{entreprise?.description}</p>
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