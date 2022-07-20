const sampleData = require('./sample');
const {errorMsgs} = require('./constants');

/* 
*   Format: first_name_last_name
*/
const formatNameType1 = (fullName) => {
    return fullName.split(" ").join("");
}
/* 
*   Format: first_name_initial_last_name
*/
const formatNameType2 = (fullName) => {
    const nameArr = fullName.split(" ");
    const iFname = nameArr.shift()[0];

    return `${iFname}${nameArr.join("")}`;
}

const findFormat = (domain) => {
    const match = Object.keys(sampleData).find(o => sampleData[o].endsWith(`@${domain}`));

    // Throw error as derivation is not possible
    if(!match) throw errorMsgs.INVALID_DERIVATION;

    const nameArr = match.split(" ");

    if(new RegExp(`${nameArr.join("")}@`).test(sampleData[match]))
        return formatNameType1;
    
    const iFname = nameArr.shift()[0];

    if(new RegExp(`${iFname}${nameArr.join("")}@`).test(sampleData[match]))
        return formatNameType2;

    throw errorMsgs.INVALID_DERIVATION;
}

module.exports = {
    findFormat
}