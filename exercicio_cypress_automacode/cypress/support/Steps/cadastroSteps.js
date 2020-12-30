/* global Given, Then, When*/

import CadastroPage from '../Pageobjects/cadastroPage'
const Cadastro = new CadastroPage

Given("que eu acesso a pagina", () =>{

    Cadastro.acessarSite()
})

When("insiro os dados e clico para salvar", () =>{
    
    Cadastro.inserir_primeiroNome()
    Cadastro.inserir()
})

When("insiro os dados sem inserir o primeiro nome e clico para salvar", () => {

    Cadastro.inserir()
})

Then("exibira proxima pagina", ()=>{

    Cadastro.validar()
})

Then("dara erro pois um campo obrigatorio nao foi inserido", () =>{
    
    Cadastro.validar()
})


