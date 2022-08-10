var email_field = document.querySelector('#email')
var email_error = document.querySelector('#email-error')

function sendForm(e) {
    e.preventDefault();
    
    // Clear previous error
    email_error.innerHTML = ''
    email_field.classList.remove('border-red-500')

    if(!email_field.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        email_error.innerHTML = 'Whoops! It looks like you forgot to add your email'
        email_field.classList.add('border-red-500')
        console.log('test');
    }

    if(email_field.value.length < 1) {
        email_error.innerHTML = 'Email cannot be empty.'
        email_field.classList.add('border-red-500') 
    }

    if(email_error.innerHTML == '') {
        alert('Form send.')
    }
}