import { useState, useEffect } from 'react'
import logo from "../assets/logo.png"
import './Contact.css'

export default function Contact() {
  useEffect(() => {
    document.title = "Contact – Canopées"
  }, [])

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    mail: '',
    telephone: '',
    adresse: '',
    codePostal: '',
    ville: '',
    message: '',
    rgpd: false,
  })

  const [envoye, setEnvoye] = useState(false)

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData((precedent) => ({
      ...precedent,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setEnvoye(true)
  }

  return (
    <div className="contact">
      <div className="contact-intro">
        <img src={logo} alt="Logo de l'entreprise Canopées" />
        <h1>Contactez-nous</h1>
        <p>Nous vous répondrons avec grand plaisir !</p>
      </div>

      <div className="contact-content">
        <div className="contact-infos">
          <h3>Contactez-nous</h3>

          <p>☎ 00 11 22 33 44</p>
          <p>📍 La belle adresse, 34000 Montpellier</p>
          <p>🕐 Du lundi au vendredi, 08h00-18h00</p>

          <iframe
            className="contact-map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=3.8517%2C43.5908%2C3.9017%2C43.6308&layer=mapnik&marker=43.6108%2C3.8767"
            title="Localisation de Canopées"
            loading="lazy"
          ></iframe>
        </div>

        {envoye ? (
          <div className="contact-form contact-confirmation">
            <h3>Message envoyé, Merci !</h3>
            <p>Nous reviendrons vers vous dans les plus brefs délais.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-ligne">
              <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
              <input type="text" name="prenom" placeholder="Prenom" value={formData.prenom} onChange={handleChange} required />
            </div>

            <div className="contact-form-ligne">
              <input type="email" name="mail" placeholder="Mail (facultatif)" value={formData.mail} onChange={handleChange} />
              <input type="tel" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} required />
            </div>

            <input type="text" name="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} required />

            <div className="contact-form-ligne">
              <input type="text" name="codePostal" placeholder="Code postal" value={formData.codePostal} onChange={handleChange} required />
              <input type="text" name="ville" placeholder="Ville" value={formData.ville} onChange={handleChange} required />
            </div>

            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>

            <label className="contact-rgpd">
              <input type="checkbox" name="rgpd" checked={formData.rgpd} onChange={handleChange} required />
              En soumettant ce formulaire j'accepte la politique de confidentialité
            </label>

            <p className="contact-recaptcha">
              Ce site est protégé par reCAPTCHA, les règles de confidentialité et les conditions d'utilisation de Google s'appliquent.
            </p>

            <button type="submit" className="btn-envoyer">Envoyer</button>
          </form>
        )}
      </div>
    </div>
  )
}
