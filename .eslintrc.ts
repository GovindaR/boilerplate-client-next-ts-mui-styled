// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    node: true,
  },

  parserOptions: {
    ecmaFeatures: { jsx: true }, // Allows for the parsing of JSX
  },

  plugins: ["react", "react-hooks"],

  extends: [
    "plugin:react/recommended", // eslint react rules (github.com/yannickcr/eslint-plugin-react)
    "plugin:jsx-a11y/recommended", // react only accessibility plugin
    // Prettier
    `prettier/@typescript-eslint`,
    `plugin:prettier/recommended`,
  ],

  rules: {
    "react/prop-types": "off", // We turn off prop-types rule, as we will use TypeScript's types instead.
    // Include .prettierrc.js rules
    "prettier/prettier": [
      "error",
      { endOfLine: "auto" },
      { usePrettierrc: true },
    ],
  },
};
