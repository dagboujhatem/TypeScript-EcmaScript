// definition d'un type personalisé
type User = {firstname: string, lastName: string}

// utilisation d'un type personalisé
const userInstance : User = {firstname: 'Jhon', lastName: 'Doe'}

// Dans le pratique
type DateString = string;
type Id = number | string;