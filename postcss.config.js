module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-nested"),
    require("postcss-mixins"),
    require("postcss-preset-env"),
    require("autoprefixer"),
    require("postcss-reporter"),
    require("cssnano")({
      preset: "default",
      discardComments: {
        removeAll: true,
      },
    }),
  ],
};
