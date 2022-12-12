function load() {
    var currentDate = new Date();
    var message = "The current date is: ".concat(currentDate.getDate(), "/").concat(currentDate.getMonth(), "/").concat(currentDate.getFullYear());
    alert(message);
}
