// Selecionar elementos
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const repeatPasswordInput = document.getElementById('repeat-password');
const termsCheckbox = document.getElementById('terms');
const alreadyHaveAccountButton = document.querySelector('.buttons button:first-child');
const registerButton = document.querySelector('.buttons button:last-child');

// Função auxiliar para validar email
function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função auxiliar para validar número de telefone
function validarTelefone(phone) {
    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return phoneRegex.test(phone);
}

// Event listener para o botão "Já tenho conta"
alreadyHaveAccountButton.addEventListener('click', () => {
    alert('Redirecionando para a página de login...');
    // Redirecionar para a página de login (substituir pela URL real)
    window.location.href = '/Login-Page.html';
});

// Event listener para o botão "Cadastrar-se"
registerButton.addEventListener('click', () => {
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const repeatPassword = repeatPasswordInput.value;
    const termsAccepted = termsCheckbox.checked;

    // Validar entradas
    if (!validarTelefone(phone)) {
        alert('Por favor, insira um número de telefone válido no formato (xx) xxxxx-xxxx.');
        return;
    }

    if (!validarEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    if (password.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }

    if (password !== repeatPassword) {
        alert('As senhas não coincidem.');
        return;
    }

    if (!termsAccepted) {
        alert('Você deve aceitar os termos para continuar.');
        return;
    }

    // Simular cadastro bem-sucedido
    alert('Cadastro realizado com sucesso!');
    // Redirecionar para outra página (substituir pela URL real)
    window.location.href = '';
});