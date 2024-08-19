const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: 'n5dv3p',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      return config;
    },
    specPattern: "cypress/e2e/Features/**/*.feature",
    baseUrl: 'https://www.advantageonlineshopping.com'
  },
});