async function getData() {
    let data = []
    
    await fetch('data.json')
            .then((res) => res.json())
            .then((res) => data = res)

    console.log(data)
}

getData()