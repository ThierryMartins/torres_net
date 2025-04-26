// forgot-password.js
import { sendPasswordReset } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const cancelButton = document.querySelector('.buttons a');
    const submitButton = document.querySelector('.buttons[type="submit"]');

    cancelButton.addEventListener('click', () => {
        window.location.href = 'Login-Page.html';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        try {
            const email = emailInput.value.trim();
            sendPasswordReset(email);
            alert(`Instruções de recuperação enviadas para ${email} (simulado)`);
            window.location.href = 'Login-Page.html';
        } catch (error) {
            alert(error.message);
        }
    });
});