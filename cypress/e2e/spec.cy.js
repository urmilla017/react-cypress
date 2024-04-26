describe('Simple React App', () => {

  beforeEach(()=> {
    cy.visit('http://localhost:3000/');
  });

  it('renders a logo', () => {
    cy.get('[data-cy="logo"]').should('have.css', 'height', '250px');
  });

  it('renders three buttons', () => {
    cy.get('[data-cy="increase"]').should('exist');
    cy.get('[data-cy="decrease"]').should('exist');
    cy.get('[data-cy="reset"]').should('exist');
    cy.screenshot();
  });

  it('clicks multiple buttons', () => {
    cy.get('button').click({ multiple: true });
  });

  it('increases and decreases the counter', () => {
    const increaseNumberOfTimes = 10;
    // Cypress has lodash support
    // It can be used to click on a button multiple times
    Cypress._.times(increaseNumberOfTimes, () => {
      cy.get('[data-cy="increase"]').should('exist').click();
    });
    cy.get('[data-cy="counter"]').should('have.text', '10');

    const decreaseNumberOfTimes = 3;
    Cypress._.times(decreaseNumberOfTimes, () => {
      cy.get('[data-cy="decrease"]').should('exist').click();
    });
    cy.get('[data-cy="counter"]').should('have.text', '7');
  });

  it('resets the counter', () => {
    cy.get('[data-cy="reset"]').should('exist').click();
    cy.get('[data-cy="counter"]').should('have.text', '0');
  });
});