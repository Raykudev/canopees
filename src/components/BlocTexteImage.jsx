import './BlocTexteImage.css'

function BlocTexteImage({ titre, texte, image, alt, inverse, children }) {
  return (
    <div className={`bloc-texte-image ${inverse ? 'inverse' : ''}`}>
      <div className="bloc-contenu">
        <div className="bloc-carte">
          <h3>{titre}</h3>
          <p>{texte}</p>
          {children}
        </div>
        <img src={image} alt={alt} className="bloc-image" />
      </div>
    </div>
  )
}

export default BlocTexteImage
