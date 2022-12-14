import { EmailValidator } from "./modules/emailValidator";
import { ZipCodeValidator } from "./modules/ZipCodeValidator";
(() => {
    const auth = { email: 'jhon@example.com', password: '123456' };
    // EmailValidator
    let email = 'john.doe@typescripttutorial.net';
    let validator = new EmailValidator();
    let result = validator.isValid(email);
    console.log(result); // Output : true
    let zipValidator = new ZipCodeValidator();
    let result2 = zipValidator.isValid('95134');
    console.log(result2); // Output : true
})();
