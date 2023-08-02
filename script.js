const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

function validatePassword() {
    if (password.value != confirmPassword.value) {
        // error message
        confirmPassword.setCustomValidity('Passwords do not match.');
        // https://angelika.me/2020/02/01/custom-error-messages-for-html5-form-validation/
    } else {
        confirmPassword.setCustomValidity('');
    }
}