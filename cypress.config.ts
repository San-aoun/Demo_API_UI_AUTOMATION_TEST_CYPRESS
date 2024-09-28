// cypress.config.ts
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://reqres.in',
    fixturesFolder: 'fixtures',
    supportFile: false,
  }
});
