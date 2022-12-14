class EmailValidator {
    isValid(s) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }
}
export { EmailValidator };
