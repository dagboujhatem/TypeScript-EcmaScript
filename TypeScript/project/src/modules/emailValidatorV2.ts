import { Validator as StringValidator } from './Validator';

class EmailValidatorV2 implements StringValidator {
    isValid(s: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }
}

export { EmailValidatorV2 };