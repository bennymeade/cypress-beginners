describe('Homepage', () => {
  it('Verify that site logo is visible', () => {
    cy.visit('/');
    cy.get('[data-testid="uco-c-header-logo-link"]').should('be.visible');
  });
<<<<<<< HEAD
  it('Verify Our company page', () => {
    cy.visit('/');
    cy.get('[data-testid="uco-c-header-menu-link"]').contains('Our company').should('be.visible').click();
    cy.url().should('include', '/our-company/')
  })
=======
  it('Verify change location page', () => {
    cy.visit('/');
    cy.get('[data-testid="uol-c-link-label"]').contains('Change location').should('be.visible').click();
    cy.url().should('include', '/location-selector/')
  });
>>>>>>> c24ed4bf62bf5ff9d3c83bd96560356698f09786
});
