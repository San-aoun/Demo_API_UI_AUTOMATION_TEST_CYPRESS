// cypress/e2e/ui/ui_test.cy.ts

/// <reference types="cypress" />
import { reqresUIPage } from '../../support/uiPageObjects';

describe('UI Testing for ReqRes', () => {
  beforeEach(() => {
    reqresUIPage.visitHomePage();
  });

  it('Should display the heading of the page', () => {
    reqresUIPage.verifyPageHeading('Test your front-end against a real API');
  });

  it('Should allow typing in the search input field', () => {
    reqresUIPage.typeInSupportForm('12');
  });

  it('Should have clickable API Docs button', () => {
    reqresUIPage.clickRedioSupport();
  });
});
