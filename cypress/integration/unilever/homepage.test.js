//shiva branch

describe('Homepage', () => {
  it('Verify that site logo is visible', () => {
    cy.visit('/');
    cy.get('[data-testid="uco-c-header-logo-link"]').should('be.visible');
  });
  it('Verify that site Planet and Society is visible', () => {
    cy.visit('/');
    cy.get('[data-testid="uco-c-header-menu-link"]').should('be.visible');
  });
  it('Verify change location page', () => {
    cy.visit('/');
    cy.get('[data-testid="uol-c-link-label"]').contains('Change location').should('be.visible').click();
    cy.url().should('include', '/location-selector/')
  });
});
