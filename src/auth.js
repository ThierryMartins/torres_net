/**
 * Armazena os dados do usuário no LocalStorage
 * @param {string} name 
 * @param {string} email 
 * @param {string} password 
 * @param {string} phone 
 */
function registerUser(name, email, password, phone) {
    const users = getUsers();
    
    // Verifica se usuário já existe
    if (users.some(user => user.email === email)) {
        throw new Error('Email já cadastrado');
    }
    
    users.push({ name, email, password, phone });
    localStorage.setItem('users', JSON.stringify(users));
}

/**
 * Autentica um usuário
 * @param {string} email 
 * @param {string} password 
 * @returns {boolean}
 */
function loginUser(email, password) {
    const users = getUsers();
    const user = users.find(user => user.email === email);
    
    if (!user) {
        throw new Error('Email não encontrado');
    }
    
    if (user.password !== password) {
        throw new Error('Senha incorreta');
    }
    
    // Armazena sessão
    localStorage.setItem('currentUser', JSON.stringify(user));
    return true;
}

/**
 * Recupera todos os usuários cadastrados
 * @returns {Array}
 */
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

/**
 * Verifica se há um usuário logado
 * @returns {Object|null}
 */
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

/**
 * Desloga o usuário atual
 */
function logout() {
    localStorage.removeItem('currentUser');
}

/**
 * Envia email de recuperação de senha (simulado)
 * @param {string} email 
 */
function sendPasswordReset(email) {
    const users = getUsers();
    if (!users.some(user => user.email === email)) {
        throw new Error('Email não encontrado');
    }
    
    // Em produção, você enviaria um email real aqui
    console.log(`Email de recuperação enviado para: ${email}`);
    return true;
}

// Verifica e mantém o usuário logado
function checkLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

// Obtém dados do usuário logado
function getLoggedInUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

// Redireciona se já estiver logado
function redirectIfLoggedIn(targetPage = 'index.html') {
    if (checkLoggedIn()) {
        window.location.href = targetPage;
    }
}

// Exporta as funções para uso em outros arquivos
export { 
    registerUser, 
    loginUser, 
    getCurrentUser, 
    logout, 
    sendPasswordReset,
    getUsers,
    checkLoggedIn, 
    getLoggedInUser, 
    redirectIfLoggedIn
};

