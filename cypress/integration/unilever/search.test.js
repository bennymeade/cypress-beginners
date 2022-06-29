describe('Search', () => {
    it('Verify that search works', () => {
      cy.visit('/search/');
      cy.get('[data-testid="uol-c-form-input"]').should('be.visible').type("dove{enter}");
    });
  });
  