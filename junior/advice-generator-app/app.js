const inner_id = document.getElementById('advice-id')
const inner_text = document.getElementById('advice-text')

async function getAdvice() {
    let data = await fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then(({slip}) => {
        inner_id.innerHTML = slip.id
        inner_text.innerHTML = `"${slip.advice}"`
    })
    .catch((err) => console.log(err))
}

getAdvice()