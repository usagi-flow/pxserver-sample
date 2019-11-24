import { WebpackConfiguration } from "pxserver-frontend/webpack.config";

//const outputDirectory = "dist";
//config.getServerConfig().output.path = path.resolve(".", outputDirectory);
//config.getClientConfig().output.path = path.resolve(".", outputDirectory, "public");

export default new WebpackConfiguration().setApplication().get();