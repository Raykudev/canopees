import { useState, useEffect, useRef } from 'react'
import logo from "../assets/logo.png"
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {

  const [menuOuvert, setMenuOuvert] = useState(false)
  const navRef = useRef(null)
  const burgerRef = useRef(null)

  function toggleMenu() {
    setMenuOuvert(!menuOuvert)
  }

  function fermerMenu() {
    setMenuOuvert(false)
  }

  useEffect(() => {
    if (!menuOuvert) return

    function handleClicExterieur(event) {
      if (navRef.current.contains(event.target) || burgerRef.current.contains(event.target)) {
        return
      }
      setMenuOuvert(false)
    }

    document.addEventListener('mousedown', handleClicExterieur)
    return () => document.removeEventListener('mousedown', handleClicExterieur)
  }, [menuOuvert])

  return (
    <header>
      <img src={logo} alt="logo de l'entreprise Canopees" />

    <button ref={burgerRef} className="burger" onClick={toggleMenu}>
    {menuOuvert ? "✕" : "☰"}
    </button>

      <nav ref={navRef} className={menuOuvert ? "nav-ouvert" : "nav-ferme"}>
        <ul onClick={fermerMenu}>
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