import logo from "../assets/logo.png"
import './Contact.css'

export default function Contact() {
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
          <p>📍 La belle adresse, 30000 Beauvillage</p>
          <p>🕐 Du lundi au vendredi, 08h00-18h00</p>

          <iframe
            className="contact-map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=3.8517%2C43.5908%2C3.9017%2C43.6308&layer=mapnik&marker=43.6108%2C3.8767"
            title="Localisation de Canopées"
            loading="lazy"
          ></iframe>
        </div>

        <form className="contact-form">
          <div className="contact-form-ligne">
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Prenom" />
          </div>

          <div className="contact-form-ligne">
            <input type="email" placeholder="Mail" />
            <input type="tel" placeholder="Téléphone" />
          </div>

          <input type="text" placeholder="Adresse" />

          <div className="contact-form-ligne">
            <input type="text" placeholder="Code postal" />
            <input type="text" placeholder="Ville" />
          </div>

          <textarea placeholder="Message"></textarea>

          <label className="contact-rgpd">
            <input type="checkbox" />
            En soumettant ce formulaire j'accepte la politique de confidentialité
          </label>

          <p className="contact-recaptcha">
            Ce site est protégé par reCAPTCHA, les règles de confidentialité et les conditions d'utilisation de Google s'appliquent.
          </p>

          <button type="submit" className="btn-envoyer">Envoyer</button>
        </form>
      </div>
    </div>
  )
}
