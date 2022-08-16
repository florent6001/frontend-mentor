// Get data
const data = fetch('data.json')
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(error => console.log(error))

// Get the chart container
var chartContainer = document.querySelector('#chart-container')

// Loop through data and create div for every bar.
data.then(data => {
    data.forEach(element => {
        var div = document.createElement("div")
        div.classList.add('flex', 'flex-col', 'w-full')

        // Make the hoverable amount
        var amount = document.createElement("div")
        amount.innerHTML = `$${element.amount}`
        amount.classList.add('bg-dark-brown', 'text-white', 'rounded', 'p-2', 'mb-2', 'font-bold', 'text-xs', 'hover-amount')
        div.appendChild(amount)
        
        // Make the bar chart
        var bar = document.createElement("div")
        const height = element.amount / 7
        bar.classList.add('rounded', 'mx-2')
        if(element.day == 'wed')
            bar.classList.add('bg-cyan')
        else
            bar.classList.add('bg-soft-red')
        bar.style.height = `${height}em`
        div.appendChild(bar)

        // Add the text below the bar
        var bartext = document.createElement("div")
        bartext.innerHTML = element.day
        bartext.classList.add('text-center', 'text-medium-brown', 'text-sm', 'w-full')
        div.appendChild(bartext)
        
        chartContainer.appendChild(div);
    })
})