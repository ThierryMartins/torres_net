import { loginUser, checkLoggedIn, redirectIfLoggedIn, getLoggedInUser } from './auth.js';

// Verifica login ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    // Redireciona se já estiver logado
    redirectIfLoggedIn();
    
    // Mostra mensagem se veio do cadastro
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('registered')) {
        alert('Cadastro realizado com sucesso! Faça login para continuar.');
    }
});


// Selecionar elementos
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.querySelector('.buttons button:last-child');
const registerButton = document.querySelector('.buttons button:first-child');
const forgotPasswordLink = document.querySelector('.login-box a');

// Event listeners
registerButton.addEventListener('click', () => {
    window.location.href = 'Register-Page.html';
});

loginButton.addEventListener('click', () => {
    try {
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        loginUser(email, password);
        alert('Login realizado com sucesso!');
        window.location.href = 'index.html';
        
    } catch (error) {
        alert(error.message);
    }
});

forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'Forgort-Password.html';
});