const config = require("pxserver-frontend/webpack.config");
const path = require("path");

const outputDirectory = "dist";
config.getServerConfig().output.path = path.resolve(".", outputDirectory);
config.getClientConfig().output.path = path.resolve(".", outputDirectory, "public");

module.exports = config;