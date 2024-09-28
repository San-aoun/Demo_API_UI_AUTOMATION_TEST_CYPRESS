// cypress/support/apiRequests.ts

interface User {
    name: string;
    job: string;
  }
  
  export class ReqresAPI {
    getUsers(): Cypress.Chainable<Cypress.Response<any>> {
      return cy.request('GET', 'https://reqres.in/api/users?page=2');
    }
  
    createUser(user: User): Cypress.Chainable<Cypress.Response<any>> {
      return cy.request('POST', 'https://reqres.in/api/users', user);
    }
  
    updateUser(userId: number, updatedUser: User): Cypress.Chainable<Cypress.Response<any>> {
      return cy.request('PUT', `https://reqres.in/api/users/${userId}`, updatedUser);
    }
  
    deleteUser(userId: number): Cypress.Chainable<Cypress.Response<any>> {
      return cy.request('DELETE', `https://reqres.in/api/users/${userId}`);
    }
  }
  
  export const reqresAPI = new ReqresAPI();
  