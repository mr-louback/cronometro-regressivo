// pegar data atual automatizada
// const years = new Date() 
//     console.log(newYears);

// pegar data atual
const newYears = `1 jan 2023`//${years}

function calculateData() {
    // colocar  data atual 
    const year = new Date(newYears)
    const dateAcctual = new Date();

    // calcular data decrescente
    const totalSecs = Math.floor(year - dateAcctual) / 1000
    const daysLeft = Math.floor(totalSecs / 3600 / 24)
    const hoursLeft = Math.floor(totalSecs / 3600) % 24
    const minutesLeft = Math.floor(totalSecs / 60) % 60
    const secsLeft = Math.floor(totalSecs) % 60

    // console.log(daysLeft, hoursLeft, minutesLeft, secsLeft);
    const daysEl = document.getElementById('days')
    const hoursEl = document.getElementById('hours')
    const minsEl = document.getElementById('mins')
    const secsEl = document.getElementById('secs')

    // mostrar na tela
    daysEl.innerHTML = daysLeft;
    hoursEl.innerHTML = format(hoursLeft)
    minsEl.innerHTML = format(minutesLeft)
    secsEl.innerHTML = format(secsLeft)
}

function format(params) {
    return params < 10 ? `0${params}` : params
}

calculateData()
setInterval(calculateData, 1000) 