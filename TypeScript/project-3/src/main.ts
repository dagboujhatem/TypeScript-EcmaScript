/**
 * There is a well defined order to how decorators applied to various declarations inside of a class are applied:
 *    1. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each instance member.
 *    2. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each static member.
 *    3. Parameter Decorators are applied for the constructor.
 *    4. Class Decorators are applied for the class.
 */

function CustomElement(name : string){
    return function(constructor: typeof HTMLElement){
        customElements.define(name, constructor)
    }
}

@CustomElement('hello-world')
export class Demo extends HTMLElement {
    connectedCallback (){
        this.innerHTML = '<h1>Hello world</h1>'
    }
}