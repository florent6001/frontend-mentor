var items = document.querySelectorAll('.accordion-item')

function showAnswer(number) {
    if (items[number].classList.contains('active')) {
        items[number].classList.remove('active');
    } else {
        items[number].classList.add('active');
    }
}