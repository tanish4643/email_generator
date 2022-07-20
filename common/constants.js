const errorTypes = {
    INVALID_DERIVATION: "INVALID_DERIVATION",
    INVALID_ARGUMENTS: "INVALID_ARGUMENTS"
}

const errorMsgs = {
    [errorTypes.INVALID_DERIVATION]: "Derivation not possible",
    [errorTypes.INVALID_ARGUMENTS]: "Invalid arguments passed in request"
}

module.exports = {
    errorMsgs,
    errorTypes
}