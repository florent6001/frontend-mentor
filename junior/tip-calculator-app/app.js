let bill = 1
let tip_percent = 1
let peoples = 0


function updateCalculation(){
    let tip_amount_div = document.getElementById('tip_amount')
    let total_amount_div = document.getElementById('total_amount')

    console.log('bill ' + bill)
    console.log('tip_percent ' + tip_percent)
    console.log('peoples ' + peoples)
    
    let tip = parseFloat(bill) * (tip_percent / 100) 
    let tip_amount = tip / parseInt(peoples)
    if(!isNaN(tip_amount) && tip_amount !== Infinity) {
        tip_amount_div.innerHTML = '$' + tip_amount.toFixed(2)
        total_amount_div.innerHTML = '$' + (parseFloat(bill) + tip_amount) / parseInt(peoples).toFixed(2)
    }
}

function updateValue(element) {
    
    let value = element.value
    let id = element.id
    let element_class = document.getElementById(id)
    let error_div = document.getElementById(id + '-error')

    
    if(element.tagName == 'BUTTON') {
        let previous_button = document.getElementsByClassName('active');
        if(previous_button.length !== 0) {
            previous_button[0].classList.remove('active')
        } 
        element.classList.add('active')
        tip_percent = value

        updateCalculation()
    } else {
        if(isNaN(value) || value < 1 || value == Infinity) {
            element_class.classList.add('invalid')
            error_div.innerHTML ="Can't be zero"
        } else {
            if(element_class.classList.contains('invalid')) {
                element_class.classList.remove('invalid')
                error_div.innerHTML = ''
            }
            
            switch (id){
                case 'bill':
                    bill = value
                    break;
                case 'tip_percent':
                    tip_percent = value
                    break;
                default:
                    peoples = value
                    break;
            }

            updateCalculation()
        }
    }
}