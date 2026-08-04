# Canopées

Site vitrine pour une entreprise de paysagisme, réalisé dans le cadre du MSPR.

## Stack

- React + Vite
- React Router (navigation entre les pages)
- CSS classique (un fichier par page/composant)

## Pages

- Accueil
- Qui sommes-nous
- Prestations
- Tarifs
- Contact
- CGU / CGV / Mentions légales

Le formulaire de contact est uniquement côté front : il n'y a pas de vrai backend, donc pas d'envoi réel de mail. La soumission affiche juste un message de confirmation.

## Lancer le projet

```
npm install
npm run dev
```

Le site est ensuite accessible sur `http://localhost:5173`.

## Autres commandes

```
npm run build     # génère la version de production dans dist/
npm run lint      # vérifie le code avec ESLint
npm run preview   # prévisualise le build de production
```
