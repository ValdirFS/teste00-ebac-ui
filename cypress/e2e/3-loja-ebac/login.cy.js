/// <reference types="cypress"/>

describe('Funcionalidade: Login' ,() => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()

    });
    
    it('Deve fazer login com sucesso' ,() => {
         cy.get('#username').type('valdir.teste@100.com.br')
         cy.get('#password').type('teste@100')
         cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, valdir.teste-5154 (não é valdir.teste-5154? Sair)')
     })

    it('Deve exibir uma messagem de erro ao inserir usuário inválido ', () => {
         cy.get('#username').type('valdir@100.com.br')
         cy.get('#password').type('teste@100')
         cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma messagem de erro ao inserir senha inválida', () => {
         cy.get('#username').type('valdir.teste@100.com.br')
         cy.get('#password').type('teste@000')
         cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail valdir.teste@100.com.br está incorreta. Perdeu a senha?')
         cy.get('.woocommerce-error').should('exist')
   });

})