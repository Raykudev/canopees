import { useEffect } from 'react'
import './Modale.css'

function Modale({ prestation, onFermer }) {
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
          {prestation.realisations.map((photo, index) => (
            <img key={index} src={photo.image} alt={photo.alt} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Modale
