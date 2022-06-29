describe('Search', () => {
    let text = "Dove";
    it('Verify that search exists', () => {
      cy.visit('/search/');
      cy.get('[data-testid="uol-c-form-input"]').should('be.visible');
      cy.get('[data-testid="uol-c-form-input"]').type(text+"{enter}");
    });
    it('Verify that search works', () => {
        let text = "Dove";
        cy.visit('/search/');
        cy.get('[data-testid="uol-c-form-input"]').type(text).type("{enter}");
        cy.url().should('include','/search/?q='+text);
      });
//     it('Test dropdown menu', () => {
//         let text = "Dove";
//         cy.visit('/search/');
//         cy.get('[data-testid="uol-c-form-input"]').type(text+"{enter}");
//         cy.get('[data-testid="uol-c-form-select-input"]').select('Published (oldest)');
//         cy.get('[data-testid="uol-c-form-select-option"]').click();
//       });
    });