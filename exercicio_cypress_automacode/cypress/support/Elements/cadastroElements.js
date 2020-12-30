class cadastroElements{

    inserirPrimeiroNome = () => {return ':nth-child(1) > :nth-child(2) > .form-control'}
    inserirSobrenome = () => {return ':nth-child(1) > :nth-child(3) > .form-control'}
    inserirEndereco = () => {return '.col-md-8 > .form-control'}
    inserirEmail = () => {return '#eid > .form-control'}
    inserirTelefone = () => {return ':nth-child(4) > .col-md-4 > .form-control'}
    inserirGenero = () => {return ':nth-child(1) > .ng-pristine'}
    inserirHobies = () => {return '#checkbox2'}
    inserirHabilidades = () => {return '#Skills'}
    inserirPais = () => {return '#countries'}
    inserirAno = () => {return '#yearbox'}
    inserirMes = () => {return ':nth-child(11) > :nth-child(3) > .form-control'}
    inserirDia = () => {return '#daybox'}
    inserirSenha = () => {return '#firstpassword'}
    inserirConfirmaSenha = () => {return '#secondpassword'}
    clicarSubmit = () => {return '#submitbtn'}
    paginaposcadastro = () => {return 'section > :nth-child(1) > .row > :nth-child(2) > :nth-child(1)'}

}

export default cadastroElements;