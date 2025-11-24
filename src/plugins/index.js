const { getAge } = require('./get-age.plugin');
const { getUUID } = require('./get-id.plugin');
const { httpClientPlugin } = require("../plugins/http-client.plugin");

module.exports = {
    getAge,
    getUUID,
    httpClientPlugin,
}