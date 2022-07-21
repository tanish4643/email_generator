const utils = require('./../common/utils');
const validator = require('./../common/validator');
const {EmailDerivationError} = require('./../common/error-handler');

function generateDomain(body) {
    return new Promise((resolve, reject) => {
        try{
            const {domain, fullName} = validator.formatValidateGenerate(body);
            const formattedName = utils.findFormat(domain)(fullName);
            
            resolve({
                status: true,
                message: `${formattedName}@${domain}`
            });
        }
        catch(err){
            reject(EmailDerivationError(err));
        }
    });
}

module.exports = {
    generateDomain
};