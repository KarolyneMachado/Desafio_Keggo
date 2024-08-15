// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
  baseUrl: 'https://www.advantageonlineshopping.com',
  experimentalFetchPolyfill: true,
    setupNodeEvents(on, config) {
      // Configurações adicionais
      return config;
    },
  },
});
