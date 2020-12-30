/// <reference types= "Cypress"  />

import cadastroElements from '../Elements/cadastroElements'
const cadastroelements = new cadastroElements
const url = Cypress.config("baseurl")

class CadastroPage{

    acessarSite(){
        cy.visit(url)
        cy.screenshot()
    }

    inserir_primeiroNome(){
        cy.get(cadastroelements.inserirPrimeiroNome()).type('Josué')
    }
    inserir(){

        
        cy.get(cadastroelements.inserirSobrenome()).type('Silva')
        cy.get(cadastroelements.inserirEndereco()).type('São João Evangelista-MG')
        cy.get(cadastroelements.inserirEmail()).type('josueemailvalido@teste.com')
        cy.get(cadastroelements.inserirTelefone()).type('1369036485')
        cy.get(cadastroelements.inserirGenero()).click()
        cy.get(cadastroelements.inserirHobies()).click()
        cy.get(cadastroelements.inserirHabilidades()).select('Python')
        cy.get(cadastroelements.inserirPais()).select('Brazil')
        cy.get(cadastroelements.inserirAno()).select('1997')
        cy.get(cadastroelements.inserirMes()).select('September')
        cy.get(cadastroelements.inserirDia()).select('19')
        cy.get(cadastroelements.inserirSenha()).type('Senha123@#')
        cy.get(cadastroelements.inserirConfirmaSenha()).type('Senha123@#')
        cy.get(cadastroelements.clicarSubmit()).click()
        cy.screenshot()


    }

    validar(){
        cy.get(cadastroelements.paginaposcadastro()).contains(' - Double Click on Edit Icon to ')
        cy.screenshot()
    }
    
}

export default CadastroPage;