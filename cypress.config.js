const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {

     specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    
    },
    baseUrl: "https://yrk.branch-master.axate.io/articles/1",
    chromeWebSecurity: false,
    requestTimeout:5000
   
  },
});
