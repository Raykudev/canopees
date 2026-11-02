import { useState, useEffect } from 'react'
import './Modale.css'

function Modale({ prestation, onFermer }) {
  const [realisations, setRealisations] = useState([])

  useEffect(() => {
    if (!prestation) return

    fetch(`${import.meta.env.VITE_API_URL}/api/realisations?prestation=${prestation.id}`)
      .then((reponse) => reponse.json())
      .then((data) => setRealisations(data.member))

    // À la fermeture, on vide la liste pour ne pas revoir ces photos dans la prochaine fenêtre
    return () => setRealisations([])
  }, [prestation])

  useEffect(() => {
    if (!prestation) return

    function handleEchap(event) {
      if (event.key === 'Escape') onFermer()
    }

    document.addEventListener('keydown', handleEchap)
    return () => document.removeEventListener('keydown', handleEchap)
  }, [prestation, onFermer])

  if (!prestation) return null

  return (
    <div className="modale-overlay" onClick={onFermer}>
      <div className="modale-contenu" onClick={(event) => event.stopPropagation()}>
        <div className="modale-header">
          <h3>{prestation.titre}</h3>
          <button className="modale-fermer" onClick={onFermer}>✕</button>
        </div>
        <div className="modale-grille">
          {realisations.map((photo) => (
            <img key={photo.id} src={`${import.meta.env.VITE_API_URL}${photo.image}`} alt={photo.alt} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Modale
