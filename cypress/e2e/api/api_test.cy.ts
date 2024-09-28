// cypress/e2e/api/api_test.cy.ts

import { reqresAPI } from '../../support/apiRequests';
import testData from '../../fixtures/testData.json';

describe('API Testing for ReqRes', () => {
  it('GET: List Users', () => {
    reqresAPI.getUsers().then((response: { status: any; body: { data: any; }; }) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.length(6);
    });
  });

  it('POST: Create a new user', () => {
    const newUser = testData.newUser;

    reqresAPI.createUser(newUser).then((response: { status: any; body: { name: any; }; }) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq(newUser.name);
    });
  });

  it('PUT: Update a user', () => {
    const updatedUser = testData.updatedUser;

    reqresAPI.updateUser(2, updatedUser).then((response: { status: any; body: { name: any; }; }) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(updatedUser.name);
    });
  });

  it('DELETE: Delete a user', () => {
    reqresAPI.deleteUser(2).then((response: { status: any; }) => {
      expect(response.status).to.eq(204);
    });
  });
});

