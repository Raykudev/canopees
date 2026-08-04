import { useEffect } from 'react'
import './PageLegale.css'

function PageLegale({ titre, children }) {
  useEffect(() => {
    document.title = `${titre} – Canopées`
  }, [titre])

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
