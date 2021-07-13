describe('minus', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/');
    });

    it('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
        cy.get('.digit + [value="7"]')
          .click();
        cy.get('[data-cy="minus"]')
          .click();
        cy.get('.digit + [value="3"]')
          .click();
        cy.get('[data-cy="calculate"]')
          .click();

        cy.get('#total')
          .should('have.text', '4');
    });
});