const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "uvurdj",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
