describe('Homepage', () => {
    it('Verify that site logo is visible', () => {
      cy.visit('/');
      cy.get('[data-testid="uco-c-header-logo-link"]').should('be.visible');
    });
  });
  