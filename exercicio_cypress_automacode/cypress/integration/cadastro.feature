Feature: Realizar cadastro

@testOk
 Scenario: Realizar cadastro
  Given que eu acesso a pagina
  When insiro os dados e clico para salvar
  Then exibira proxima pagina

@testalhou
Scenario: Realizar cadastro erro
  Given que eu acesso a pagina
  When insiro os dados sem inserir o primeiro nome e clico para salvar
  Then dara erro pois um campo obrigatorio nao foi inserido