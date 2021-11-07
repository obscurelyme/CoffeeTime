const path = require("path");
const fs = require("fs");

module.exports = {
  siteMetadata: {
    title: `CoffeeTime`,
    siteUrl: `https://obscurelyme.github.io/CoffeeTime`,
    description: `The Official Devlog of the CoffeeMaker Game Engine`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
  ],
};
