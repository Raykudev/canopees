import tarifs from '../data/tarifs.json'
import BlocTexteImage from '../components/BlocTexteImage'
import Boutton from '../components/Boutton'
import './Tarifs.css'

const etapes = [
  "Vous nous contactez",
  "Nous étudions votre besoin",
  "Vous recevez un devis gratuit sous 48h",
]

export default function Tarifs() {
  return (
    <div className="tarifs">
      <h1 className="tarifs-titre">Nos tarifs</h1>
      <p className="tarifs-intro">
        Nos tarifs varient selon la surface, la complexité du terrain et vos besoins spécifiques.
        Voici un aperçu de nos prestations, contactez-nous pour un devis personnalisé et gratuit.
      </p>

      <div className="comment-ca-marche">
        <h2>Comment ça marche ?</h2>
        <div className="etapes">
          {etapes.map((etape, index) => (
            <div className="etape" key={index}>
              <span className="etape-numero">{index + 1}</span>
              <p>{etape}</p>
            </div>
          ))}
        </div>
      </div>

      

      {tarifs.map((tarif, index) => (
        <BlocTexteImage
          key={tarif.id}
          titre={tarif.titre}
          texte={tarif.texte}
          image={tarif.image}
          alt={tarif.alt}
          inverse={index % 2 === 1}
        >
          {tarif.prix && (
            <>
              <p className="tarif-prix">À partir de : {tarif.prix} €</p>
              <Boutton to="/contact">Faire une demande de devis</Boutton>
            </>
          )}
        </BlocTexteImage>
      ))}

      <div className="tarifs-cta">
        <h2>Un projet en tête ? Contactez-nous aujourd'hui :</h2>
        <Boutton to="/contact">Contact</Boutton>
      </div>
    </div>
  )
}
