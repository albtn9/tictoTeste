Cypress.Commands.add('Verificar',() => {

    cy.get('body').should('be.visible')
    cy.get('#name').should('be.visible')
    cy.get('#email').should('be.visible')
    cy.get('#password').should('be.visible');
    

})