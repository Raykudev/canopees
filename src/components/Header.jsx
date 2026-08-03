import { useState, useEffect, useRef } from 'react'
import logo from "../assets/logo.png"
import './Header.css'
import { NavLink } from 'react-router-dom'

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
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'lien-actif' : ''}>Accueil</NavLink></li>
          <li><NavLink to="/qui-sommes-nous" className={({ isActive }) => isActive ? 'lien-actif' : ''}>Qui sommes-nous</NavLink></li>
          <li><NavLink to="/prestations" className={({ isActive }) => isActive ? 'lien-actif' : ''}>Prestations</NavLink></li>
          <li><NavLink to="/tarifs" className={({ isActive }) => isActive ? 'lien-actif' : ''}>Tarifs</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'lien-actif' : ''}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header