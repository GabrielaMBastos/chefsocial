function onChangeEmail() {
    toggleEmailErrors();
}
function onChangePassword() {
    togglePasswordErrors();
}
/**
 * Definindo mensagens de erro para preenchimento do login
 */
function toggleEmailErrors() {
    let email = document.getElementById('email').value;
    if (!email) {
        document.getElementById('email-required-error').style.display = "block";
    } else {
        document.getElementById('email-required-error').style.display = "none";
    }

    if (validateEmail(email)) {
        document.getElementById('email-invalid-error').style.display = "none";
    } else {
        document.getElementById('email-invalid-error').style.display = "block";
    }
}
/**
 * Definindo mensagens de erro para preenchimento da senha
 */
function togglePasswordErrors() {
    const password = document.getElementById('password').value;
    if (!password) {
        document.getElementById('password-required-error').style.display = "block";
    } else {
        document.getElementById('password-required-error').style.display = "none";
    }
}
/**
 * Função para executar o login
 */
function login() {
    const form = document.querySelector('#loginForm');
    firebase.auth().signInWithEmailAndPassword(form.email.value, form.password.value
    ).then(response => {
        console.log('response: ', response)
        localStorage.setItem('userId', response.user._delegate.uid)
        localStorage.setItem('token', 7)
        localStorage.setItem('usuario', '')
        localStorage.setItem('email', form.email.value)
        window.location.href = "../index.html";
    }).catch(error => {
        alert('usuário inexistente')
    });

}
function register() {
    window.location.href = "cadastro.html"
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
} 
