function updateCard(field) {
    value = field.value;
    text_field = document.querySelector('#' + field.id + '_text');

    if(field.id == 'card_number') {
        value = value.replace(/(.{4})/g, "$1 ")
        if(value.length > 19) {
            value = value.substr(0, 19)
            field.value = value.replace(/\s/g, '')
        }
    }

    if(field.id == 'card_month') {
        if(value > 12 || value < 0) {
            value = ''
        }
        if(value < 10 && value > 1) {
            if(value.length < 2) {
                value = '0' + field.value
            }
        }
        if(value.length > 2) {
            value = value.substr(0, 2)
            field.value = value.replace(/\s/g, '')
        }
        field.value = value;
    }

    if(field.id == 'card_year') {
        if(value.length == 2) {
            if(value < 21) {
                value = ''
            }
        }
        if(value.length > 2) {
            value = value.substr(0, 2)
            field.value = value.replace(/\s/g, '')
        }
        field.value = value;
    }

    if(field.id == 'card_cvc') {
        console.log(value.length)
        if(value.length > 3) {
            value = value.substr(0, 3)
            field.value = value.replace(/\s/g, '')
        }
    }

    text_field.innerHTML = value;
}


function sendForm(e) 
{

    e.preventDefault()

    var fields = [
        'card_name', 
        'card_number', 
        'card_month', 
        'card_year', 
        'card_cvc'
    ]

    error = false
    
    fields.forEach((field) => {
        // For stars, remove all errors
        div = document.querySelector('#' + field)
        div.classList.remove('error_field')

        if(field == 'card_month' || field == 'card_year') {
            error_field = document.querySelector('#card_date_error')
        } else {
            error_field = document.querySelector('#' + field + '_error')
        }

        // Remove errors
        error_field.innerHTML = ''
        error_field.classList.remove('error_field')
        error_field.classList.add('hidden')


        // Looking for errors

        if(div.value.length !== 16 && field == 'card_number') {
            div.classList.add('error_field')
            error_field.innerHTML = "Missing numbers"
            error_field.classList.remove('hidden')
            error = true
        }

        if(div.value.length !== 2 && field == 'card_month' || div.value.length !== 2 && field == 'card_year') {
            div.classList.add('error_field')
            error_field.innerHTML = "Must be 2 numbers"
            error_field.classList.remove('hidden')
            error = true
        }

        if(div.value.length !== 3 && field == 'card_cvc' ) {
            div.classList.add('error_field')
            error_field.innerHTML = "Must be 3 numbers"
            error_field.classList.remove('hidden')
            error = true
        }

        if(field !== 'card_name') {
            if(div.value.match(/[^0-9]/))
            {
                div.classList.add('error_field')
                error_field.innerHTML = "Wrong format, numbers only"
                error_field.classList.remove('hidden')
                error = true
            }
        }

        if(!div.value) {
            div.classList.add('error_field')
            error_field.innerHTML = "Can't be blank"
            error_field.classList.remove('hidden')
            error = true
        }

        if(field == 'card_cvc') {
            if(!error) {
                document.querySelector('#form').classList.add('hidden')
                document.querySelector('#completed').classList.remove('hidden')
                document.querySelector('#completed').classList.add('flex')
            }
        }
    })
}