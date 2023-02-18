const path = require("path"); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    localePath: path.resolve("./public/locales"),
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
