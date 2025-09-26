/// <reference types="cypress"/>

describe('Funcionalidade: Login' ,() => {

     it('Deve fazer login com sucesso' ,() => {
         cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
         cy.get('#username').type('valdir.teste@100.com.br')
         cy.get('#password').type('teste@100')
         cy.get('.woocommerce-form > .button').click()

         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, valdir.teste-5154 (não é valdir.teste-5154? Sair)')
     })

})