class ZipCodeValidator {
    isValid(s) {
        const numberRegexp = /^[0-9]+$/;
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator };
