const { errorMsgs } = require("./constants");

const formatValidateGenerate = (body) => {
    const {domain, fullName} = body;

    if(!domain || !fullName)
        throw errorMsgs.INVALID_ARGUMENTS;

    return {
        domain, fullName: fullName.toLowerCase()
    };
}

module.exports = {
    formatValidateGenerate
}