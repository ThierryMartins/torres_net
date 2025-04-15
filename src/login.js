// usuário para testar a entrada
let usuarioTeste = {email: "fulano@gmail.com", senha: "123123"}

// "pega" os botões de cadastre-se e entrar e os coloca em uma variável
let divBotoes = document.getElementsByClassName("buttons")[0]
let cadastrese = divBotoes.getElementsByTagName("button")[0]
let entrar = divBotoes.getElementsByTagName("button")[1]

// fazer com que o botão "cadastre-se" redirecione para a página de cadastro
cadastrese.addEventListener("click", () => {
    alert("Redirecionando para a página de cadastro...")
    window.location.href = '/Register-page.html'
})

entrar.addEventListener("click", () => {
    // associa o email e a senha à uma variável
    let divLogin = document.getElementsByClassName("login-box")[0]
    let email = divLogin.getElementsByTagName("input")[0].value
    let senha = divLogin.getElementsByTagName("input")[1].value

    
    if(email != usuarioTeste.email) { // verifica se o email existe
        alert("Email não existente nos registros")
    }else if(senha != usuarioTeste.senha) { // verifica se a senha está correta
        alert("Senha incorreta")
    }else { // mensagem de sucesso
        alert(`Bem vindo usuário do email: ${email}`)
    }
})

// variável para o botão "esqueci a senha"
let divLogin = document.getElementsByClassName("login-box")[0]
let esqueciASenha = divLogin.getElementsByTagName("a")[0]

// fazer com que o hyperlink "Esqueceu a senha?" redirecione para a página de recuperar a senha
esqueciASenha.addEventListener("click", () => {
    alert("Redirecionando para a página de recuperar senha...")
    window.location.href = '/Forgort-Password.html'
})