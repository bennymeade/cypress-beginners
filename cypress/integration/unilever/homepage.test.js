describe('Homepage', () => {
  it('Verify that site logo is visible', () => {
    cy.visit('/');
    cy.get('[data-testid="uco-c-header-logo-link"]').should('be.visible');
  });
  it('Verify Our company page', () => {
    cy.visit('/');
    cy.get('[data-testid="uco-c-header-menu-link"]').contains('Our company').should('be.visible').click();
    cy.url().should('include', '/our-company/')
  })
  it('Verify change location page', () => {
    cy.visit('/');
    cy.get('[data-testid="uol-c-link-label"]').contains('Change location').should('be.visible').click();
    cy.url().should('include', '/location-selector/')
  });  
  it('Verify search button', () => {
    cy.visit('/');
    cy.get('[data-testid="uol-c-button-label"]').contains('Search site').should('be.visible').click();
    cy.url().should('include', '/search/')
  });  
});