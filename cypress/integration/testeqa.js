/// <reference types="cypress"/>
import "../support/commands"

describe('Verificação Pagina', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl')) 
        cy.Verificar()    
    });

    it('Verificar pagina carregada', () => {
       
    });    
 describe('Manipulação de campos', () => {
    it('Preencher dados invalidos', () => {
        cy.get('#name').type(Cypress.env('nomeInvalido'))
        cy.get('#password').type(Cypress.env('senhaInvalido'))
        cy.contains('Cadastrar').click()
        cy.contains('Insira um Nome e Sobrenome válido.').should('be.visible')
        cy.contains('O campo Email é obrigatório.').should('be.visible')
        cy.contains('O campo Password deve ter no minimo 8 caracteres.').should('be.visible')
        cy.get('#email').type(Cypress.env('emailInvalido'))
        cy.contains('Cadastrar').click()
        
    });
      
        it('Preencher dados validos', () => {    
            cy.get('#name').type(Cypress.env('nome'))
            cy.get('#email').type(Cypress.env('email'))
            cy.get('#password').type(Cypress.env('senha'))
            cy.contains('Cadastrar').click()
            
        });
    //verifique nome e email e o mesmo
        it('Verificar dados cadastrados', () => {
            cy.get('.modal-body').parent().find('input[id*=e_name]').last().filter('.form-control').should('have.value',Cypress.env('nome'))
            cy.get('.modal-body').parent().find('input[id*=e_email]').last().filter('.form-control').should('have.value', Cypress.env('email'))     
        });
        
        it('Editar ações Invalidos', () => {
         // Edite nome e e-mail (em ações), colocando inválidos e verifique a mensagem de erro
        cy.get('td').nextAll().last().find('button').click({force: true})
        cy.get('div.show:nth-child(2) > a:nth-child(1)').click({force: true})
        cy.get('.modal-body').parent().find('input[id*=e_name]').last().filter('.form-control').should('have.value',Cypress.env('nome')).clear().type(Cypress.env('edicaoErrado'))
        cy.get('.modal-footer').find('.btn-primary').last().click({force: true})
        cy.get('.modal-body').parent().find('input[id*=e_email]').last().filter('.form-control').should('have.value',Cypress.env('email')).clear().type(Cypress.env('emailErrado'))
        cy.get('.modal-footer').find('.btn-primary').last().click({force: true})
    });
        it('Preencher ações Validas', () => {
            cy.get('td').nextAll().last().find('button').click({force: true})
            cy.get('div.show:nth-child(2) > a:nth-child(1)').click({force: true})
            cy.get('.modal-body').parent().find('input[id*=e_name]').last().filter('.form-control').should('have.value',Cypress.env('nome')).clear().type(Cypress.env('edicaoCerto'))
            cy.get('.modal-footer').find('.btn-primary').last().click({force: true})
            cy.get('.modal-body').parent().find('input[id*=e_email]').last().filter('.form-control').should('have.value',Cypress.env('email'))
            cy.get('.modal-footer').find('.btn-primary').last().click({force: true})
           });
           // Verifique se nome e e-mail foram alterados corretamente no GRID;
           it('Verificar alteração de dados', () => {
            cy.get('td').nextAll().last().find('button').click({force: true})
            cy.get('div.show:nth-child(2) > a:nth-child(1)').click({force: true})
            cy.get('.modal-body').should('be.visible')
            cy.get('.form-group.py-1').should('be.visible')
            cy.get('.modal-body').parent().find('input[id*=e_name]').last().filter('.form-control').should('have.value',Cypress.env('edicaoCerto'))
            cy.get('.modal-body').parent().find('input[id*=e_email]').last().filter('.form-control').should('have.value', Cypress.env('email'))            
           });
       
           it('Apagar Cadastro', () => {
            cy.get('td').nextAll().last().find('button').click({force: true})
            cy.get('div.show:nth-child(2) > a:nth-child(3)').click({force: true})
            cy.get('.modal-footer').find('.btn-danger').last().click({force: true})
            cy.get('.alert').should('be.visible').contains('Usuário removido com sucesso.')
            
           });
    }); 
});
