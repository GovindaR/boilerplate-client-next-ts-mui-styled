export const app = {
  appName: "boilerplate",
  userPath: "",
  captchaKey: process.env.NEXT_PUBLIC_GoogleReCaptcha,
};

export const coreService = {
  hostname: process.env.NEXT_PUBLIC_GraphQlHostname,
  ssl: process.env.NEXT_PUBLIC_GraphQlSSL === "true",
  port: process.env.NEXT_PUBLIC_GraphQlPort,
  apiPrefix: `${process.env.NEXT_PUBLIC_GraphQlPrefix}/graphql`,
  portDev: 5443,
};

export const settings = {
  adminPath: "/admin",
  rowsPerPage: 50,
  rowsPerPageOptions: [10, 25, 50, 75, 100, 200, 500, 1000, 1500],
  timeFormatParsing: [
    "YYYY-MM-DDTHH:mm:ssZ",
    "YYYY-MM-DD HH:mm:ssZ",
    "YYYY-MM-DDTHH:mm:ss.SSSSSSSSSZ",
    "YYYY-MM-DD HH:mm:ss.SSSSSSSSSZ",
    "YYYY-MM-DDTHH:mm:ss:SSZ",
    "YYYY-MM-DDTHH:mm:ss.sssZ",
    "YYYY-MM-DD HH:mm:ss.sssZ",
  ],
};

const config: any = {
  app,
  settings,
  coreService,
};

export default config;
