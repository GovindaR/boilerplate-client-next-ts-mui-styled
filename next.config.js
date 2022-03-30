const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/system",
]); // pass the modules you would like to see transpiled

module.exports = withTM({
  // Your existing module.exports
  reactStrictMode: true,
  i18n: {
    locales: ["en", "np"],
    defaultLocale: "en",
    localeDetection: false,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@mui/styled-engine": "@mui/styled-engine-sc",
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  swcMinify: true,
  experimental: {
    styledComponents: true,
  },
});
