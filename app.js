
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let D = document
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let searchbar = D.querySelector("input")
let tamplete = D.querySelector(".location")
let cityName = D.querySelector('.city')
let dateName = D.querySelector('.date')
let temp = D.querySelector('.temp')
let weather = D.querySelector('.weather')
let hilow = D.querySelector('.hi-low')
let data = {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    key: 'a99ce624af726846a9a65b5b65dbaf7f'

}
function showDate() {
    let currentTime = new Date()
    let nowDay = days[currentTime.getDay()]
    let nowmonth = months[currentTime.getMonth()]
    let nowyear = currentTime.getFullYear()
    let nowdate = currentTime.getDate()
    return `${nowDay} ${nowdate} ${nowmonth} ${nowyear}`
}
function getInfo(data) {
    cityName.innerHTML = `${data.name},${data.sys.country}`
    temp.innerHTML = `${Math.floor(data.main.temp - 273)}°c`
    hilow.innerHTML = `${Math.floor(data.main.temp_min - 273)}°c/${Math.floor(data.main.temp_max - 273)}°c`
    weather.innerHTML = `${data.weather[0].main}`
    dateName.innerHTML = showDate()

}
function fetchData() {
    let usercity = searchbar.value
    fetch(`${data.url}${usercity}&appid=${data.key}`).
        then(res => res.json())
        .then(data => {
            getInfo(data)
        })
}
searchbar.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        fetchData()
    }
})
