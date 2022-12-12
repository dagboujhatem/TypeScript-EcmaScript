  // Exemple : Similar to private methods and properties, we can define private accessors (getters and setters) using the same syntax.
  class Auth {
    get #getToken() {
     return localStorage.getItem('token');
    }
    set #setToken(token) {
     localStorage.setItem('token', token);
    }
    set login(token) {
     this.#setToken = token;
    }
    get isAuth() {
     return this.#getToken;
    }
 }
 let token = '12345678';
 const auth = new Auth();
 auth.login = token;
const isAuth = auth.isAuth;
console.log(isAuth); //output: 12345678