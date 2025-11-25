const { getAge } = require('./get-age.plugin');
const { getUUID } = require('./get-id.plugin');
const { httpClientPlugin } = require("../plugins/http-client.plugin");
const buildLogger = require('./logger.plugin');

module.exports = {
    getAge,
    getUUID,
    httpClientPlugin,
    buildLogger,
}