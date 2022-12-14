class EmailValidatorV2 {
    isValid(s) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }
}
export { EmailValidatorV2 };
