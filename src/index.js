import { getLoggedInUser } from './src/auth.js';
        
document.addEventListener('DOMContentLoaded', () => {
    const user = getLoggedInUser();
    if (user) {
        // Mostra mensagem de boas-vindas
        const welcomeMsg = document.createElement('div');
        welcomeMsg.className = 'welcome-message';
        welcomeMsg.innerHTML = `Bem-vindo, ${user.name}!`;
        document.body.prepend(welcomeMsg);
        
        // Atualiza o header/nav para mostrar opções de logado
        const nav = document.querySelector('nav');
        if (nav) {
            nav.innerHTML += `
                <a href="#" id="logout">Sair</a>
                <span>${user.email}</span>
            `;
            
            document.getElementById('logout').addEventListener('click', () => {
                localStorage.removeItem('currentUser');
                window.location.reload();
            });
        }
    }
});