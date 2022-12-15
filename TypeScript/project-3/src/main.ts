/**
 * There is a well defined order to how decorators applied to various declarations inside of a class are applied:
 *    1. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each instance member.
 *    2. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each static member.
 *    3. Parameter Decorators are applied for the constructor.
 *    4. Class Decorators are applied for the class.
 */


/**
 *   Class Decorators are applied for the class.
 */

function CustomElement(name: string) {
    return function (constructor: typeof HTMLElement) {
        customElements.define(name, constructor)
    }
}

@CustomElement('hello-world')
export class Demo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<h1>Hello world</h1>'
    }
}

/**
 *  Property Decorators are applied for each instance member.
 */

function Constraint({ min, max }: { min: number, max: number }) {
    // return function(target: User, key: keyof User){ }
    // return function(target: User, key: 'age'){ }
    return function <T>(target: T, key: keyof T) {
        let value = target[key] as any;
        // console.log({ min, max }); // Output: {min: 0, max: 100} 
        // console.log(value); // Output: undefined 
        // console.log(key); // Output: age

        // Getter & Setter
        const getter = () => value
        const setter = (newValue: unknown) => {
            console.log(value)
            console.log(newValue)
            console.log(typeof newValue)
            if (typeof newValue === 'number') {
                if(newValue > min && newValue < max){
                    value = newValue;
                    return;
                }else{
                    throw new Error(`On attend un nombre entre ${min} et ${max}.`)
                }
            }else{
                throw new Error(`On attend un nombre.`)
            }
        }

        // Redefine the target object property
        Object.defineProperty(target, key, {
            set: setter,
            get: getter
        });

    }
}

class User {
    @Constraint({
        min: 0,
        max: 100
    })
    public age = 200;
}

const u = new User();

console.log(u.age) // getter
u.age = 15; // setter