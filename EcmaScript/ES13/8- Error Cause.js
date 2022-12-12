// .cause property on the error object would allow us to specify which error caused the other error. 

try {
    apiCallThatCanThrow();
} catch (err) {
    throw new Error("New error message", { cause: err }); // cause : err
}