"use strict";
exports.__esModule = true;
function loading() {
    var currentDate = new Date();
    // Bad way : 
    // const message = "The current date is: " + currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear();
    var message = "The current date is: ".concat(currentDate.getDate(), "/").concat(currentDate.getMonth(), "/").concat(currentDate.getFullYear());
    alert(message);
}
