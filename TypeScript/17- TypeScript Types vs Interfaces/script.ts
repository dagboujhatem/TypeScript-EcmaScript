
// les types 
type Point =  {
    x: number;
    y: number;
}

// Avantages des types: 
// 1- Peuvent être se base sur les types primitif. Par exemple: type Point2 =  string;
// 2- Ne sont pas ouvert pour être modifié par la suite

// les interface 
interface Geo {
    lat: number;
    lgt: number;
}

// Avantages des interfaces: 
// 1- les sont boucoups plus flexible 
// 2- les interface reste ouverte et peut être modifié par la suite : en utilisant les extens par exemple
// 3- possibilité de l'implementer dans le POO


