// cypress/support/uiPageObjects.ts

export class ReqresUIPage {
    visitHomePage(): void {
      cy.visit('https://reqres.in');
    }
  
    verifyPageHeading(text:string): void {
      cy.get('h2.tagline').invoke('text').then((headingText) => {
        console.log(headingText);
        expect(headingText.trim()).to.include(text);
      });
    }
  
    typeInSupportForm(text: string): void {
      cy.get('input[type="number"]').type(text);
    }
  
    clickRedioSupport(): void {
      cy.get('input#supportRecurring').click();
    }
  }
  
  export const reqresUIPage = new ReqresUIPage();
  