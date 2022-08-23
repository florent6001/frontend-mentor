async function getData(timeframe) {

    let data = []
    
    await fetch('data.json')
            .then((res) => res.json())
            .then((res) => data = res)

    data.map((element) => {
        let current_time = document.getElementById(element.title.replace(/\s/g, '-').toLowerCase() + '-current')
        let previous_time = document.getElementById(element.title.replace(/\s/g, '-').toLowerCase() + '-previous')
        let last_label;

        switch(timeframe) {
            case 'daily':
                last_label = 'Day'
                break;
            case 'hourly':
                last_label = 'Hour'
                break;
            default: 
                last_label = 'Week'
                break;
        }

        current_time.innerHTML = element.timeframes[timeframe].current + 'hrs';
        previous_time.innerHTML = 'Last ' + last_label + ' - ' + element.timeframes[timeframe].previous + 'hrs';
        if(document.getElementsByClassName('active').length) {
            document.getElementsByClassName('active')[0].classList.remove('active');
        }
        document.getElementById(timeframe).classList.add('active');
    })
}

getData('weekly')