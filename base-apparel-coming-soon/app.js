var email = document.querySelector('#email');
var error_message = document.querySelector('#error-message')

function sendForm(e) {
    e.preventDefault();
    email.classList.remove('bg-error')
    error_message.innerHTML = ""
    if(!checkEmail(email.value)) {
        error_message.innerHTML = "Please provide a valid email"
        email.classList.add('bg-error')
    } else {
        alert('Email valide')
    }
}

function checkEmail(email) {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}