const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 200000,
  e2e: {
    baseUrl: 'https://josephyap9.wixsite.com/qaetestsite',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    scrollBehavior: false
  },
});

