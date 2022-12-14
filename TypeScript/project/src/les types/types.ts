const a : string  = "Hello world";
const n : number = 3
const b : boolean = true
const d: null = null
const un: undefined = undefined

// les tableaux
const arr: string[] = ['aze', 'aze', 'aze']
const arrStr : Array<string> = [...arr]
const arrAny : any[] = [...arr, true, false, 10]

// les objets 
const user : {firstname: string, lastName: string} = {firstname: 'Jhon', lastName: 'Doe'}
const loggedUser : {firstname: string, lastName: string, email?: string} = {firstname: 'Jhon', lastName: 'Doe'} // optional property
const account : {[key:string]: string} = {} // pour les objets dynamique : lorsque vous avez pas mal de properité

// les dates 
const currentDate : Date = new Date();

// les fonctions
const cb : Function = (e: MouseEvent) =>{
    e.preventDefault();
} 

function printId(id: number) {}

// les types de retour des fonction dans TS
function print() : void { // void : foonction qui ne retourne rien
    console.log('Hello')
} 

const callback : (e: MouseEvent) => void = (e: MouseEvent): void =>{ // typage de callback function
    e.preventDefault();
} 


// les types sont aussi automatiquement typé dans TypeScript
const username = 'super-admin'
const userAccount = {firstname: 'Jhon', lastName: 'Doe'}