import { useState, useEffect } from 'react'
import './Carrousel.css'

function Carrousel() {

  const [realisations, setRealisations] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/realisations?accueil=true`)
      .then((reponse) => reponse.json())
      .then((data) => setRealisations(data.member))
  }, [])

  function nextRealisation() {
    setIndex((index + 1) % realisations.length)
  }

  function prevRealisation() {
    setIndex((index - 1 + realisations.length) % realisations.length)
  }

  if (realisations.length === 0) return null

  const photo1 = realisations[index]
  const photo2 = realisations[(index + 1) % realisations.length]
  const photo3 = realisations[(index + 2) % realisations.length]

  return (
    <div className="carrousel">
  <h2>Nos réalisations</h2>
  <div className="carrousel-contenu">
    <div className="carrousel-photos">
      <button className="btn-carrouselprev" onClick={prevRealisation}>←</button>
      <img src={`${import.meta.env.VITE_API_URL}${photo1.image}`} alt={photo1.alt} />
      <img src={`${import.meta.env.VITE_API_URL}${photo2.image}`} alt={photo2.alt} />
      <img src={`${import.meta.env.VITE_API_URL}${photo3.image}`} alt={photo3.alt} />
      <button className="btn-carrouselnext" onClick={nextRealisation}>→</button>
    </div>
  </div>
</div>
  )
}

export default Carrousel
