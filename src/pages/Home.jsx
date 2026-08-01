import Slider from '../components/Slider'
import './Home.css'
import Boutton from '../components/Boutton'
import Carrousel from '../components/Carrousel'




export default function Home() {


  return (
   <div>
    <Slider />
    <div className='presentation'>
      <img src="/images/presentation/garden.jpg" alt="Grand jardin remplie de fleurs de toutes les couleurs" />
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
      </ul>
        <Boutton to="/Tarifs">En savoir plus</Boutton>
      </div>
    </div>

<div className="public-cible">
  <h2>Pour qui travaillons-nous ?</h2>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, assumenda minus! Voluptate vel rerum accusantium laborum provident obcaecati, quis expedita.</p>

  <div className="cartes">
    <div className="carte">
      <img className="card-1" src="/images/PublicCible/particulier.jpg" alt="Jardin de particuliers" />
      <div className="bandeau">
        <img src="/images/PublicCible/particulierCircle.jpg" alt="" className="icone" />
        <span>Particuliers</span>
      </div>
    </div>

    <div className="carte">
      <img src="/images/PublicCible/entreprise.jpg" alt="Espace vert professionnel" />
      <div className="bandeau">
        <img src="/images/PublicCible/entrepriseCircle.jpg" alt="" className="icone" />
        <span>Professionnels</span>
      </div>
    </div>

    <div className="carte">
      <img src="/images/PublicCible/collectivite.jpg" alt="Espace vert collectivité" />
      <div className="bandeau">
        <img src="/images/PublicCible/collectiviteCircle.jpg" alt="" className="icone" />
        <span>Collectivités</span>
      </div>
    </div>
  </div>
</div>
    <Carrousel />
    </div>
  
  )
}