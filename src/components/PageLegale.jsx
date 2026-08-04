import './PageLegale.css'

function PageLegale({ titre, children }) {
  return (
    <div className="page-legale">
      <div className="page-legale-contenu">
        <h1>{titre}</h1>
        {children}
      </div>
    </div>
  )
}

export default PageLegale
