import dotenv from "dotenv"
dotenv.config()

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logger = require("@azure/logger")
logger.setLogLevel("info")

// import { AppConfigurationClient } from "@azure/app-configuration"
import { SecretClient } from "@azure/keyvault-secrets"
import { DefaultAzureCredential } from "@azure/identity"

const start = async () => {
	const cred = new DefaultAzureCredential()
	// const configClient = new AppConfigurationClient(process.env["APPCONFIG_URI"]!, cred)
	const secretClient = new SecretClient(process.env["KEYVAULT_URI"]!, cred)

	console.log("getting secret")
	console.time("getSecret")
	const secret = await secretClient.getSecret("test-secret")
	console.timeEnd("getSecret")
	console.log({ secret: secret.value })

	// console.log("getting config")
	// console.time("getConfig")
	// const configSetting = await configClient.getConfigurationSetting({ key: "test-value" })
	// console.timeEnd("getConfig")
	// console.log({ configSetting: configSetting.value })

	process.exit(1)
}

start()
