import { useState } from 'react'
import prestations from '../data/prestations.json'
import BlocTexteImage from '../components/BlocTexteImage'
import Boutton from '../components/Boutton'
import Modale from '../components/Modale'
import './Prestations.css'
import logo from "../assets/logo.png"

export default function Prestations() {
  const [prestationOuverte, setPrestationOuverte] = useState(null)

  return (
    <div className="prestations">
      <div className="cadre">
      <img className="img-cano" src={logo} alt="logo de l'entreprise Canopees" />
      <h2>Découvrez nos réalisations à Montpellier et alentours</h2>
      <p>Découvrez notre savoir-faire en images !</p>
      </div>

      <h1>Nos prestations</h1>

      {prestations.map((prestation, index) => (
        <div key={prestation.id} className="prestation-titre-wrapper">
          <h2>{prestation.titre}</h2>
          <BlocTexteImage
            titre={prestation.titre}
            texte={prestation.texte}
            image={prestation.image}
            alt={prestation.alt}
            inverse={index % 2 === 1}
          >
            <Boutton onClick={() => setPrestationOuverte(prestation)}>
              Découvrir nos réalisations
            </Boutton>
          </BlocTexteImage>
        </div>
      ))}

      <Modale prestation={prestationOuverte} onFermer={() => setPrestationOuverte(null)} />
    </div>
  )
}
