const { i18n } = require("./next-i18next.config"); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    FORM_POST_ACTION: process.env.FORM_POST_ACTION,
    UMAMI_WEBSITE_ID: process.env.UMAMI_WEBSITE_ID,
  },
  i18n,
};
