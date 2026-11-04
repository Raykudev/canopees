import { useEffect, useState } from "react";
import "./QuiSommesNous.css";

const COULEURS = ['icone-bleu', 'icone-mauve', 'icone-vert', 'icone-orange', 'icone-rose', 'icone-rouge']

function QuiSommeNous() {
  const [fondateurs, setFondateurs] = useState([]);
  const [valeurs, setValeurs] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    document.title = "Qui sommes-nous – Canopées";
    fetch(`${import.meta.env.VITE_API_URL}/api/fondateurs`)
      .then((reponse) => reponse.json())
      .then((data) => setFondateurs(data.member));
    fetch(`${import.meta.env.VITE_API_URL}/api/valeurs`)
      .then((reponse) => reponse.json())
      .then((data) => setValeurs(data.member));
    fetch(`${import.meta.env.VITE_API_URL}/api/pages/qui-sommes-nous`)
      .then((reponse) => reponse.json())
      .then((data) => setSections(data.sections));
  }, []);

  // Chaque bloc de texte est retrouvé par son type (et non sa position, que Bob peut changer)
  const presentation = sections.find((section) => section.type === "presentation");
  const histoire = sections.find((section) => section.type === "histoire");
  const valeursIntro = sections.find((section) => section.type === "valeurs-intro");

  return (
    <div>
      <div className="details">
        <h1>{presentation?.titre}</h1>
        <p>{presentation?.texte}</p>
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
        <h2>{histoire?.titre}</h2>
        <div className="history">
          <p>{histoire?.texte}</p>
          {histoire?.image && (
            <img src={`${import.meta.env.VITE_API_URL}${histoire.image}`} alt={histoire.alt} />
          )}
        </div>
      </div>

      <div className="valeurs">
        <h2>{valeursIntro?.titre}</h2>
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

          {valeursIntro?.image && (
            <img
              src={`${import.meta.env.VITE_API_URL}${valeursIntro.image}`}
              alt={valeursIntro.alt}
              className="valeurs-image"
            />
          )}

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
