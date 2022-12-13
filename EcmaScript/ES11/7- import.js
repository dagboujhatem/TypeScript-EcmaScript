// Cette importation de modules se fait de façon statique, ce qui ne pose aucun souci dans 90% des cas. Mais il arrive que l’on ait besoin d’importer un module de façon dynamique. C’est le cas par example de l’utilisation d’un module pollyfill si une fonctionnalité n’est pas présente par défaut ou pour charger des fonctionnalités à la demande.
// Malheureusement, il n’est pas possible d’importer un module de façon dynamique avec cette instruction, que ce soit via une variable ou une condition :
// Link:  https://www.codeheroes.fr/2020/04/06/es2020-quoi-de-neuf-javascript/
