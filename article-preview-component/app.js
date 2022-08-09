var shareDiv = document.querySelector("#share")

function shareClicked() {
    if(shareDiv.classList.contains('hidden')) {
        shareDiv.classList.add('block')
        shareDiv.classList.remove('hidden')
    } else {
        shareDiv.classList.add('hidden')
        shareDiv.classList.remove('block')
    }
}