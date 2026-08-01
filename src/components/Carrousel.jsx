import { useState } from 'react'
import realisations from '../data/realisations.json'
import './Carrousel.css'

function Carrousel() {

  const [index, setIndex] = useState(0)

  function nextRealisation() {
    setIndex((index + 1) % realisations.length)
  }

  function prevRealisation() {
    setIndex((index - 1 + realisations.length) % realisations.length)
  }

  const photo1 = realisations[index]
  const photo2 = realisations[(index + 1) % realisations.length]
  const photo3 = realisations[(index + 2) % realisations.length]

  return (
    <div className="carrousel">
      <h2>Nos réalisations</h2>
      <div className="carrousel-contenu">
        <button className="btn-carrouselprev" onClick={prevRealisation}>←</button>

        <div className="carrousel-photos">
          <img src={photo1.image} alt={photo1.alt} />
          <img src={photo2.image} alt={photo2.alt} />
          <img src={photo3.image} alt={photo3.alt} />
        </div>

        <button className="btn-carrouselnext" onClick={nextRealisation}>→</button>
      </div>
    </div>
  )
}

export default Carrousel