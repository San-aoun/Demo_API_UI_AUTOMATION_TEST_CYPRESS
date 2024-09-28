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

    //-----------------------------------------------
    visitCareersDistribuisionPage(): void {
      cy.visit('https://careers.distribusion.com/');
    }

    verifyPage(text:string): void {
        expect(`[href="/o/${text}-genders-2-7"]`).to.exist;
    }

    type(text: string): void {
      cy.get('.sc-1vzxbt3-9 > [data-cy="offerListFilter"] > .ixWlph > [data-cy="offerListFilterInput"]').type(text);
    }

    selectDropdownOption(optionText: string): void {
      cy.get('#downshift-2-toggle-button > .sc-19gswe1-4').click();
      cy.get('#downshift-2-item-2').click;
      cy.get(`li[id="downshift-2-item-2"][aria-label="${optionText}"]`).click();
    }

    click(text: string): void {
      cy.get(text).click();
    }

    selectJobPosition(text: string): void {
      cy.get(`[href="/o/${text}-genders-2-7"]`).click();
    }

    verifyJobDcription(text:string): void {
      cy.get('h2.tagline').invoke('text').then((headingText) => {
        console.log(headingText);
        expect(headingText.trim()).to.include(text);
      });
    }

    verifyJobdetail(text:string): void {
      cy.get('h2.tagline').invoke('text').then((headingText) => {
        console.log(headingText);
        expect(headingText.trim()).to.include(text);
      });
    }
  }
  
  export const reqresUIPage = new ReqresUIPage();
  