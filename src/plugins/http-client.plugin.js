const axios = require('axios');

const httpClientPlugin = {
    // get: async(url) =>{
    //     const resp = await fetch(url);
    //     return await resp.json();
    // },
    get: async(url) => axios.get(url).then(resp => resp.data),
};

module.exports = {
    httpClientPlugin,
};