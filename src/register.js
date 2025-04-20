import { registerUser } from './auth.js';

// Selecionar elementos
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const repeatPasswordInput = document.getElementById('repeat-password');
const termsCheckbox = document.getElementById('terms');
const alreadyHaveAccountButton = document.querySelector('.buttons button:first-child');
const registerButton = document.querySelector('.buttons button:last-child');

// Elementos de erro
const errorElements = {
    name: document.getElementById('name-error'),
    phone: document.getElementById('phone-error'),
    email: document.getElementById('email-error'),
    password: document.getElementById('password-error'),
    repeatPassword: document.getElementById('repeat-password-error')
};

// Limpar erros quando o usuário começa a digitar
function setupInputValidation(inputElement, errorElement) {
    inputElement.addEventListener('input', () => {
        inputElement.classList.remove('input-error');
        errorElement.classList.remove('show-error');
        errorElement.textContent = '';
    });
}

// Configurar validação para todos os campos
setupInputValidation(nameInput, errorElements.name);
setupInputValidation(phoneInput, errorElements.phone);
setupInputValidation(emailInput, errorElements.email);
setupInputValidation(passwordInput, errorElements.password);
setupInputValidation(repeatPasswordInput, errorElements.repeatPassword);

// Formatação automática do telefone
phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    let formattedValue = '';
    
    if (value.length > 0) {
        formattedValue = '(' + value.substring(0, 2);
    }
    if (value.length > 2) {
        formattedValue += ') ' + value.substring(2, 7);
    }
    if (value.length > 7) {
        formattedValue += '-' + value.substring(7, 11);
    }
    
    e.target.value = formattedValue;
});

// Funções de validação
function validateName(name) {
    if (name.length < 3) {
        throw new Error('Nome deve ter pelo menos 3 letras');
    }
    if (!/^[a-zA-ZÀ-ÿ\s']+$/.test(name)) {
        throw new Error('Nome deve conter apenas letras e espaços');
    }
    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error('Por favor, insira um email válido');
    }
    return true;
}

function validatePhone(phone) {
    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        throw new Error('Telefone incompleto. Formato: (99) 99999-9999');
    }
    return true;
}

function validatePassword(password) {
    if (password.length < 8) {
        throw new Error('A senha deve ter pelo menos 8 caracteres');
    }
    if (!/[A-Z]/.test(password)) {
        throw new Error('A senha deve conter pelo menos uma letra maiúscula');
    }
    if (!/[a-z]/.test(password)) {
        throw new Error('A senha deve conter pelo menos uma letra minúscula');
    }
    if (!/\d/.test(password)) {
        throw new Error('A senha deve conter pelo menos um número');
    }
    if (!/[@$!%*?&]/.test(password)) {
        throw new Error('A senha deve conter pelo menos um caractere especial (@$!%*?&)');
    }
    return true;
}

function showError(inputElement, errorElement, message) {
    inputElement.classList.add('input-error');
    errorElement.textContent = message;
    errorElement.classList.add('show-error');
    inputElement.focus();
}

// Event listeners
alreadyHaveAccountButton.addEventListener('click', () => {
    window.location.href = 'Login-Page.html';
});

registerButton.addEventListener('click', () => {
    try {
        // Resetar erros
        Object.values(errorElements).forEach(el => {
            el.classList.remove('show-error');
            el.textContent = '';
        });
        [nameInput, phoneInput, emailInput, passwordInput, repeatPasswordInput].forEach(input => {
            input.classList.remove('input-error');
        });

        // Obter valores
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const repeatPassword = repeatPasswordInput.value;
        const termsAccepted = termsCheckbox.checked;

        // Validações
        try {
            validateName(name);
        } catch (error) {
            showError(nameInput, errorElements.name, error.message);
            throw error;
        }

        try {
            validateEmail(email);
        } catch (error) {
            showError(emailInput, errorElements.email, error.message);
            throw error;
        }

        try {
            validatePhone(phone);
        } catch (error) {
            showError(phoneInput, errorElements.phone, error.message);
            throw error;
        }

        try {
            validatePassword(password);
        } catch (error) {
            showError(passwordInput, errorElements.password, error.message);
            throw error;
        }

        if (password !== repeatPassword) {
            showError(repeatPasswordInput, errorElements.repeatPassword, 'As senhas não coincidem');
            throw new Error('As senhas não coincidem');
        }

        if (!termsAccepted) {
            alert('Você deve aceitar os termos para continuar');
            throw new Error('Termos não aceitos');
        }

        // Registrar usuário
        registerUser(name, email, password, phone);
        window.location.href = 'Login-Page.html?registered=true';
        
    } catch (error) {
        console.error('Erro no cadastro:', error.message);

        // Exibir erro console na tela / Erro final
        const generalErrorElement = document.getElementById('general-error');
        generalErrorElement.textContent = `Erro no cadastro: ${error.message}`;
        generalErrorElement.classList.add('show-error');
    }
});