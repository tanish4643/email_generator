const {errorTypes} = require('./constants');

function EmailDerivationError(message = "") {
    const error = new Error();
    error.name = "CustomError";
    error.message = message;

    return error;
}

function errorHandler(err, req, res, next) {
    //Check if Custom error thrown from source code
    if(err.name === "CustomError"){
        return res.status(400).json({ message: err.message });
    }
    
    return res.status(500).json({ message: err.message });
}

module.exports = {
    errorHandler,
    EmailDerivationError
};