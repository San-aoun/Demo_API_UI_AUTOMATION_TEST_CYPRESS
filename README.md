## What is the project

This project is a Cypress-based testing suite for the ReqRes API and UI. It includes automated tests for both API endpoints and the user interface of the ReqRes website: https://reqres.in and https://careers.distribusion.com/. The tests are written in TypeScript and organized using the Page Object Model (POM) pattern to enhance maintainability and readability.

## How to install

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/cypress-reqres-project.git
   cd cypress-reqres-project

2. **Install dependencies:**
Ensure you have Node.js installed, then run:
`npm install`

3. **How to run the project:**
   
   3.1 ***Open Cypress Test Runner:***
   
      `npm run cy:open` : This will open the Cypress Test Runner where you can run tests interactively.
   
   3.2 ***Run all tests:***
   
      `npm test` : This will run all the tests in headless mode.
   
   3.3 ***Run specific tests:***
   
      `npm run cy:run:ui`: This will run only the UI tests located in cypress/e2e/ui/ui_test.cy.ts.
   
      `npm run cy:run:api` : This will run only the API tests located in cypress/e2e/api/api_test.cy.ts.

5. **Structure of the project**
   
   The project structure is organized as follows:

      ![image](https://github.com/user-attachments/assets/3726e3f2-39fc-4d76-8764-fb6150a60ea5)



- cypress/e2e/api/: Contains API test files.
- cypress/e2e/ui/: Contains UI test files.
- cypress/fixtures/: Contains test data in JSON format.
- cypress/support/: Contains support files, including custom commands and page objects.
- cypress.config.js: Cypress configuration file.
- package.json: Project dependencies and scripts.
- tsconfig.json: TypeScript configuration file.
- README.md: Project documentation.
