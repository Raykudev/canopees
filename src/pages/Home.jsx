import { useState, useEffect } from 'react'
import Slider from '../components/Slider'
import './Home.css'
import Boutton from '../components/Boutton'
import Carrousel from '../components/Carrousel'

export default function Home() {
  const [sections, setSections] = useState([])
  const [publicsCibles, setPublicsCibles] = useState([])
  const [prestations, setPrestations] = useState([])

  useEffect(() => {
    document.title = "Canopées – Création et entretien d'espaces verts"

    fetch(`${import.meta.env.VITE_API_URL}/api/pages/accueil`)
      .then((reponse) => reponse.json())
      .then((data) => setSections(data.sections))
    fetch(`${import.meta.env.VITE_API_URL}/api/publics-cibles`)
      .then((reponse) => reponse.json())
      .then((data) => setPublicsCibles(data.member))
    // La liste des services de l'accueil = les titres des prestations (une seule source dans l'admin)
    fetch(`${import.meta.env.VITE_API_URL}/api/prestations`)
      .then((reponse) => reponse.json())
      .then((data) => setPrestations(data.member))
  }, [])

  const presentation = sections.find((section) => section.type === 'presentation')
  const publicCibleIntro = sections.find((section) => section.type === 'public-cible-intro')

  return (
   <div>
    <Slider />
    <div className='presentation'>
      {presentation?.image && (
        <img src={`${import.meta.env.VITE_API_URL}${presentation.image}`} alt={presentation.alt} />
      )}
      <div className='text'>
      <h1>{presentation?.titre}</h1>
      <h2>{presentation?.sousTitre}</h2>
      <p className='services'>Les services <span>{presentation?.titre} :</span></p>
      <ul>
        {prestations.map((prestation) => (
          <li key={prestation.id}>{prestation.titre}</li>
        ))}
      </ul>
        <Boutton to="/Prestations">En savoir plus</Boutton>
      </div>
    </div>

<div className="public-cible">
  <h2>{publicCibleIntro?.titre}</h2>
  <p>{publicCibleIntro?.texte}</p>

  <div className="cartes">
    {publicsCibles.map((publicCible) => (
      <div className="carte" key={publicCible.id}>
        <img className="card-1" src={`${import.meta.env.VITE_API_URL}${publicCible.photo}`} alt={publicCible.photoAlt} />
        <div className="bandeau">
          <img src={`${import.meta.env.VITE_API_URL}${publicCible.icone}`} alt="" className="icone" />
          <span>{publicCible.nom}</span>
        </div>
      </div>
    ))}
  </div>
</div>
    <Carrousel />
    </div>

  )
}
