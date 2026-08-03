import './QuiSommesNous.css'




function QuiSommeNous() {

  return (
    <div>
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
    <div className="details">
      <h2>Qui sommes-nous ?</h2>
      <p>Canopées est une entreprise spécialisée dans la création et l'entretien d'espaces verts, pour les particuliers, professionnels et collectivités.<br></br>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, assumenda minus! Voluptate vel rerum accusantium laborum provident obcaecati, quis expedita.
      </p>
    </div>
    <div className="histoire">
      <h2>Histoire de l'entreprise</h2>
      <div className="history">
      <p>La société <span>Canopées</span> a été fondée en 2020 par Bob et Tom, deux amoureux de la nature. Notre mission est de créer et entretenir des espaces naturels qui améliorent la qualité de vie des personnes.</p>
      <img src="/images/histoire/mountain.jpg" alt="Photo d'une montagne" />
    </div>
    </div>


</div>
    




   
   


  )
}

export default QuiSommeNous