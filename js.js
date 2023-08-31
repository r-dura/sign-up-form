const passwordInput = document.getElementById('password');
passwordInput.addEventListener('input', () => {
    const minLength = 8; 
    if (passwordInput.value.length < minLength) {
        passwordInput.classList.add('password-error');
    } else {
        passwordInput.classList.remove('password-error');
    }
});

const confirmInput = document.getElementById('confirm');
confirmInput.addEventListener('input', () => {
    if (passwordInput.value.length != confirmInput.value.length) {
        confirmInput.classList.add('password-error');
    } else {
        confirmInput.classList.remove('password-error');
    }
});