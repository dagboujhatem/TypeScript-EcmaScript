# TypeScript project 1:

## About this project:

In this project, you can learn how to use typescript in your computer in order to create a modern Web application. 

## Steps to create this project:
1. Créer un projet nodejs avec la commande `npm init -y`.
2. Installer TypeScript en tant que dépendance de développement en utilisant la commande `npm i -D typescript` ou bien la commande `npm install typescript --save-dev`.
3. Optional: créer un ficher `.gitignore` et ajouter `/node_modules` dedans.
4. Créer une page html simple et ajouter bootstrap à travers un CDN.
5. Créer un dossier nommé `dist`.
6. Créer un dossier nommé `src` et dedans créer un fichier typescript nommé `main.ts`.
7. Ajouter le code javascript suivant `<script src="/dist/main.js"></script>` à votre page.
8. Pour compiler le fichier typescript il suffit e faire la commande suivante: `npx tsc ./src/main.ts` ou bien `tsc ./src/main.ts` si vous avez typescript installé globalement dans votre pc.
9. Pour changer le dossier d'output du fichier compilé. il faut spécifier l'option `--outDir` suivi par le nom de dossier destination. D'ou la commande sera `tsc ./src/main.ts --outDir dist`.
10. Configurer le fichier `tsconfig.json` et exécuter la commande `npx tsc` ou `tsc`.
11. Je vous inite de voir [ce lien](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) pour voir plus sur les configurations qu'on peut mettre dans le fichier `tsconfig.json`.
12. Pour voir plus sur les options de compilateur typescript, merci de visiter [ce lien](https://www.typescriptlang.org/docs/handbook/compiler-options.html).
13. Mode serveur: lancer la commande `npx tsc --watch` ou bien `tsc --watch` pour lancer la compilation avec la mise à jour des fichier typescript.
14. 



