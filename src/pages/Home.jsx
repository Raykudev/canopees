import Slider from '../components/Slider'
import './Home.css'
import Boutton from '../components/Boutton'




export default function Home() {


  return (
   <div>
    <Slider />
    <div className='presentation'>
      <img src="/public/images/presentation/garden.jpg" alt="Grand jardin remplie de fleurs de toutes les couleurs" />
      <div className='text'>
      <h2>Canopées</h2>
      <h3>Société spécialisé dans la création et l'entretien d'espaces verts.</h3>
      <p className='services'>Les services <span>Canopées :</span></p>
      <ul>
        <li>Conception et réalisation d'espaces verts.</li>
        <li>Entretien des espaces verts.</li>
        <li>Taille des haies.</li>
        <li>Elagage et abbatage d'arbres.</li>
        <li>Valorisation des déchets verts. ( compostage )
        </li>
        <Boutton to="/Tarifs">En savoir plus</Boutton>
      </ul>
      </div>
    </div>
    </div>
  
  )
}