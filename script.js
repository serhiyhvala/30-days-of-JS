const calculate = document.querySelector('.calculate')
calculate.addEventListener('click', (e) => {
    let entereddate = new Date(document.querySelector('.date').value)
    let inputdate = {
        year: entereddate.getFullYear(),
        month:  entereddate.getMonth(),
        day: entereddate.getDay(),
    }
    let date = new Date()
    let d2 = date.getDate()
    let m2 = 1 + date.getMonth()
    let y2 = date.getFullYear()
    let month = [31,28,31,30,31,30,31,31,30,31,30,31]
    if(inputdate.day > d2) {
        d2 = d2 + month[m2 - 1]
        m2 -= 1
    }
    if(inputdate.month > m2) {
        m2 += 12
        y2 -= 1
    }
    let d = d2 - inputdate.day
    let m = m2 - inputdate.month
    let y = y2 - inputdate.year

    let year = (document.querySelector('.year').innerHTML = y)
    let months = (document.querySelector('.month').innerHTML = m)
    let day = (document.querySelector('.day').innerHTML = d)
})