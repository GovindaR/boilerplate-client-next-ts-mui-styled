import config from "../../config/config";

export const restApiUrl = (lang = "", service = "core", admin = false) => {
  return `${config[`${service}Service`].ssl ? "https" : "http"}://${
    config[`${service}Service`].hostname
  }:${config[`${service}Service`].port}${
    config[`${service}Service`]?.apiPrefix
      ? "/" + config[`${service}Service`]?.apiPrefix
      : ""
  }`;
};

export const testRestApiUrl = `https://pokeapi.co/api/v2/`;
