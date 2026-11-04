import { useEffect, useState } from "react";
import "./QuiSommesNous.css";

const COULEURS = ['icone-bleu', 'icone-mauve', 'icone-vert', 'icone-orange', 'icone-rose', 'icone-rouge']

function QuiSommeNous() {
  const [fondateurs, setFondateurs] = useState([]);
  const [valeurs, setValeurs] = useState([]);

  useEffect(() => {
    document.title = "Qui sommes-nous – Canopées";
    fetch(`${import.meta.env.VITE_API_URL}/api/fondateurs`)
      .then((reponse) => reponse.json())
      .then((data) => setFondateurs(data.member));
    fetch(`${import.meta.env.VITE_API_URL}/api/valeurs`)
      .then((reponse) => reponse.json())
      .then((data) => setValeurs(data.member));
  }, []);

  return (
    <div>
      <div className="details">
        <h1>Qui sommes-nous ?</h1>
        <p>
          Canopées est une entreprise spécialisée dans la création et
          l'entretien d'espaces verts, pour les particuliers, professionnels et
          collectivités.<br></br>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          assumenda minus! Voluptate vel rerum accusantium laborum provident
          obcaecati, quis expedita.
        </p>
      </div>
      <div className="fondateurs">
        <h2>Nos fondateurs</h2>

        <div className="cartes">
          {fondateurs.map((fondateur, index) => (
            <div className="carte" key={fondateur.id}>
              <img
                className="card-1"
                src={`${import.meta.env.VITE_API_URL}${fondateur.photo}`}
                alt={fondateur.photoAlt}
              />

              <span
                className={
                  index === 0 ? "badge-fondateur" : "badge-cofondateur"
                }
              >
                {fondateur.role}
              </span>

              <p className="descriptif-fondateur">{fondateur.bio}</p>

              <div className={index === 0 ? "bandeau" : "bandeau-2"}>
                <img
                  src={`${import.meta.env.VITE_API_URL}${fondateur.avatar}`}
                  alt=""
                  className="icone"
                />
                <span>{fondateur.prenom}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="histoire">
        <h2>Histoire de l'entreprise</h2>
        <div className="history">
          <p>
            La société <span>Canopées</span> a été fondée en 2020 par Bob et
            Tom, deux amoureux de la nature. Notre mission est de créer et
            entretenir des espaces naturels qui améliorent la qualité de vie des
            personnes.
          </p>
          <img src="/images/histoire/mountain.jpg" alt="Photo d'une montagne" />
        </div>
      </div>

      <div className="valeurs">
        <h2>Nos valeurs</h2>
        <div className="valeurs-contenu">
          <div className="valeurs-colonne">
            {valeurs.slice(0, 3).map((valeur, index) => (
              <div className="carte-valeur" key={valeur.id}>
                <span className={`icone-valeur ${COULEURS[index]}`}></span>
                <h3>{valeur.titre}</h3>
                <p>{valeur.texte}</p>
              </div>
            ))}
          </div>

          <img
            src="/images/histoire/arbre.webp"
            alt="Plante en pot"
            className="valeurs-image"
          />

          <div className="valeurs-colonne">
            {/* slice(3) recommence à compter à 0 : on ajoute 3 pour garder les bonnes couleurs */}
            {valeurs.slice(3).map((valeur, index) => (
              <div className="carte-valeur" key={valeur.id}>
                <span className={`icone-valeur ${COULEURS[index + 3]}`}></span>
                <h3>{valeur.titre}</h3>
                <p>{valeur.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuiSommeNous;
