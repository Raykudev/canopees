import { useState } from 'react'
import logo from "../assets/logo.png"
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {

  const [menuOuvert, setMenuOuvert] = useState(false)

  function toggleMenu() {
    setMenuOuvert(!menuOuvert)
  }

  return (
    <header>
      <img src={logo} alt="logo de l'entreprise Canopees" />

    <button className="burger" onClick={toggleMenu}>
    {menuOuvert ? "✕" : "☰"}
    </button>

      <nav className={menuOuvert ? "nav-ouvert" : "nav-ferme"}>
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