const path = require("path");
const fs = require("fs");

module.exports = {
  pathPrefix: `/CoffeeTime`,
  siteMetadata: {
    title: `CoffeeTime`,
    siteUrl: `https://obscurelyme.github.io/CoffeeTime`,
    description: `The Official Devlog of the CoffeeMaker Game Engine`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`,
      },
    },
    `gatsby-plugin-mdx`,
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
