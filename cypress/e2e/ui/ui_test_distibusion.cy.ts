// cypress/e2e/ui/ui_test.cy.ts

/// <reference types="cypress" />
import { reqresUIPage } from '../../support/uiPageObjects';

describe('UI Testing for Distribution', () => {
  beforeEach(() => {
    reqresUIPage.visitCareersDistribuisionPage();
  });

  it('Should display "Open posions"', () => {
    reqresUIPage.verifyPage('"Open posions');
  });

  it('Filter position and area for searching the position', () => {
    reqresUIPage.type('QA');
    reqresUIPage.selectDropdownOption('Germany');
    reqresUIPage.verifyPage('Senior QA Engineer');
  });
});
