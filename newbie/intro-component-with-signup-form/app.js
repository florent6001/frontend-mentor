var first_name = document.querySelector('#first_name')
var last_name = document.querySelector('#last_name')
var email = document.querySelector('#email') 
var password = document.querySelector('#password') 

fields = ['first_name', 'last_name', 'email', 'password']

function submitForm(e) {
    e.preventDefault()
    
    fields.forEach((field) => {
        // Remove error if previous send
        element = document.querySelector('#' + field)
        element.classList.remove('is-invalid')
        error_div = document.querySelector('#' + field + '_error')
        error_div.innerHTML = ""

        // Check for empty fields
        if(element.value < 1) {
            element.classList.add('is-invalid')
            error_div.innerHTML = field.replaceAll('_', ' ') + " cannot be empty"
        }
    })

    email = document.querySelector('#email')
    email_error = document.querySelector('#email_error')
    if(!email.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        email_error.innerHTML = 'Looks like this is not an email'
    }
}