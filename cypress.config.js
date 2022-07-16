const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity: true,
  numTestsKeptInMemory: 20,
  viewportWidth: 1920,
  viewportHeight: 1200,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  pageLoadTimeout: 30000,
  requestTimeout: 20000,
  responseTimeout: 20000,
  defaultCommandTimeout: 10000,
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/mochawesome-report',
      overwrite: false,
      html: false,
      json: true,
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.unilever.com.my',
    experimentalSessionAndOrigin: true,
  },
})
