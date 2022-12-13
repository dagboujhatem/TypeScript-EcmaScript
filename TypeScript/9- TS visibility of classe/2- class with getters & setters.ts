// NOTES:
// 1. If the type of the setter parameter is not specified, it is inferred from the return type of the getter
// 2. Getters and setters must have the same Member Visibility
// 3. If get exists but no set, the property is automatically readonly

class Point {
    private _x: number;
    private _y: number;
    private _name: string; // The property is automatically readonly

     // constructor method
     constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
        this._name ='Point';
    }


    // getters
    public get x(): number {
        return this._x;
    }
    public get y(): number {
        return this._y;
    }

    public get name(): string {
        return this._name;
    }

    // setters
    public set x(x: number) { // don't put set setX(x: number): void ==> A 'set' accessor cannot have a return type annotation.
        this._x = x;
    }
    public set y(y: number){
        this._y = y;
    }
    public set setName(name: string){ // Use the same name of property
        this._name = name;
    }

}

const pt = new Point(0,0);
// pt.x = 0; // ERROR: Property 'x' is private and only accessible within class 'Point
// pt.y = 0; // ERROR: Property 'y' is private and only accessible within class 'Point

console.log(pt.x); // call a getter
console.log(pt.y); // call a getter
pt.x = 10;
pt.y = 100 ;
// pt.name = 'Point 0' ; // Error: Cannot assign to 'name' because it is a read-only property.
// Solution 1: Pour corriger cette erreur il faut utiliser le même nom dans la methode (i.e change setName ==> name)
// Solution 2: supprimer le mot clé "set" à partir du methode setName
// pt.setName("Point 0");

console.log(pt.x); // call a getter
console.log(pt.y); // call a getter

// Read More : https://www.typescripttutorial.net/typescript-tutorial/typescript-getters-setters/
