// getuui 
const { v4: getUUIDPlugin } = require('uuid');

const getUUID = () => {
    return getUUIDPlugin();
}

module.exports = {
    getUUID,
}