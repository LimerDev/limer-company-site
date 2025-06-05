/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: ["*.astro"],
      options: {
        parser: "astro",
        tabWidth: 4,
      },
    },
    {
      files: ["*.css"],
      options: {
        parser: "css",
        tabWidth: 4,
      },
    },
    {
      files: ["*.ts", "*.js"],
      options: {
        tabWidth: 4,
      },
    },
  ],
};
