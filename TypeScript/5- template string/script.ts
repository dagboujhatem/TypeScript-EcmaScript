function load() {
    const currentDate = new Date();
    // Bad way : 
    // const message = "The current date is: " + currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear();
    const message = `The current date is: ${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;
    alert(message);
}

load();