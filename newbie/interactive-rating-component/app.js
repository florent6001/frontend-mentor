var buttonList = document.querySelectorAll('.button')
var step1 = document.querySelector('#step-1')
var step2 = document.querySelector('#step-2')
var note_text = document.querySelector('#current_note')
var current_note

function setNote(selected_value) {
    buttonList.forEach(element => {
        element.classList.add('bg-medium-grey')
        element.classList.add('text-light-grey')

        element.classList.remove('text-white')
        element.classList.remove('bg-neutral-500')
    });

    var fixed_number = selected_value - 1 // The array start at 0, the note at 1

    // Remove and set background color
    buttonList[fixed_number].classList.add('bg-neutral-500')
    buttonList[fixed_number].classList.remove('bg-medium-grey')

    buttonList[fixed_number].classList.remove('text-light-grey')
    buttonList[fixed_number].classList.add('text-white')
    current_note = fixed_number
    note_text.innerHTML = selected_value

    console.log(current_note)
}

function buttonSubmit(e) {
    e.preventDefault();
    if (current_note) {
        console.log(current_note)
        step1.classList.add('hidden')
        step2.classList.remove('hidden')
    }
}