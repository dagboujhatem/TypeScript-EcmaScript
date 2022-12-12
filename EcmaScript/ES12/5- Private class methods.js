// Since the introduction of classes for JavaScript in ES6, methods and properties have been public by default. Even though developers used the underscore (_) prefix when declaring private methods and properties, it was merely a convention.
// It didn’t stop anyone from accessing private properties from outside the class. But with ES12, JavaScript has enabled the creation of private methods and properties natively. To create one, we have to prefix the identifier with a hash (#).
// Exemple: 

class Auth {
    #getToken() {
        return "12345678";
    }
    isAuth() {
        return this.#getToken();
    }
}
const auth = new Auth();
// auth.getToken(); //output: auth.getToken is not a function
const token = auth.isAuth(); 
console.log(token); //output: 12345678
