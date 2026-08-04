import { useEffect } from 'react'
import './QuiSommesNous.css'

function QuiSommeNous() {
  useEffect(() => {
    document.title = "Qui sommes-nous – Canopées"
  }, [])

  return (
    <div>
    <div className="details">
      <h1>Qui sommes-nous ?</h1>
      <p>Canopées est une entreprise spécialisée dans la création et l'entretien d'espaces verts, pour les particuliers, professionnels et collectivités.<br></br>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, assumenda minus! Voluptate vel rerum accusantium laborum provident obcaecati, quis expedita.
      </p>
    </div>
<div className="fondateurs">
  <h2>Nos fondateurs</h2>

  <div className="cartes">
    <div className="carte">
      <img className="card-1" src="/images/fondateurs/image-1.jpg" alt="Photo de profil de Bob, fondateur de Canopées" />

      <span className="badge-fondateur">Fondateur</span>

      <p className="descriptif-fondateur">Passionné de nature depuis toujours, Bob a fondé Canopées pour partager son amour des espaces verts.</p>

      <div className="bandeau">
        <img src="/images/fondateurs/profil-1.jpg" alt="" className="icone" />
        <span>Bob</span>
      </div>
    </div>

    <div className="carte">
      <img className="card-1" src="/images/fondateurs/image-2.jpg" alt="Photo de profil de Tom, cofondateur de Canopées" />

      <span className="badge-cofondateur">Co-Fondateur</span>

      <p className="descriptif-fondateur">Expert en aménagement paysager, Tom apporte son savoir-faire technique à chaque projet Canopées.</p>

      <div className="bandeau-2">
        <img src="/images/fondateurs/profil-2.jpg" alt="" className="icone" />
        <span>Tom</span>
      </div>
    </div>
  </div>
</div>
    <div className="histoire">
      <h2>Histoire de l'entreprise</h2>
      <div className="history">
      <p>La société <span>Canopées</span> a été fondée en 2020 par Bob et Tom, deux amoureux de la nature. Notre mission est de créer et entretenir des espaces naturels qui améliorent la qualité de vie des personnes.</p>
      <img src="/images/histoire/mountain.jpg" alt="Photo d'une montagne" />
    </div>
    </div>

    <div className="valeurs">
      <h2>Nos valeurs</h2>
      <div className="valeurs-contenu">
        <div className="valeurs-colonne">
          <div className="carte-valeur">
            <span className="icone-valeur icone-bleu"></span>
            <h3>Respect de l'environnement</h3>
            <p>Nous privilégions des pratiques durables et respectueuses de la biodiversité sur chaque chantier.</p>
          </div>
          <div className="carte-valeur">
            <span className="icone-valeur icone-mauve"></span>
            <h3>Savoir-faire</h3>
            <p>Notre équipe s'appuie sur une expertise technique éprouvée pour garantir des réalisations durables.</p>
          </div>
          <div className="carte-valeur">
            <span className="icone-valeur icone-vert"></span>
            <h3>Proximité client</h3>
            <p>Nous restons à l'écoute de chaque client pour construire un projet qui correspond vraiment à ses besoins.</p>
          </div>
        </div>

        <img src="/images/histoire/arbre.webp" alt="Plante en pot" className="valeurs-image" />

        <div className="valeurs-colonne">
          <div className="carte-valeur">
            <span className="icone-valeur icone-orange"></span>
            <h3>Qualité et personnalisation</h3>
            <p>Nous misons sur la qualité des matériaux utilisés et la personnalisation des projets en fonction de vos goûts.</p>
          </div>
          <div className="carte-valeur">
            <span className="icone-valeur icone-rose"></span>
            <h3>Fiabilité</h3>
            <p>Nous respectons nos engagements de délais et de budget sur chacun de nos chantiers.</p>
          </div>
          <div className="carte-valeur">
            <span className="icone-valeur icone-rouge"></span>
            <h3>Passion</h3>
            <p>Chaque projet est mené avec le même goût du travail bien fait, du premier croquis à la dernière plantation.</p>
          </div>
        </div>
      </div>
    </div>
</div>
    




   
   


  )
}

export default QuiSommeNous