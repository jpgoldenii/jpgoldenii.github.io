// Sets current date in the footer
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', options);

// Google web fonts
WebFont.load({
    google: {
        families: [
            'Roboto Condensed', '', ''
        ]
    }
});

// Hamburger Menu for Nav
const hambutton = document.querySelector('.burger');
const mainnav = document.querySelector('.navigation')
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

// Windchill
function calcWindChill() {
    let tempF = parseFloat(document.getElementById("temperature").textContent);
    let speed = parseFloat(document.getElementById("windspeed").textContent);
    let result = windChill(tempF, speed);

    document.getElementById("chill").innerHTML = result;
}

function windChill(tempF, speed) {
    if (tempF <= 50 && speed > 3) {
        let f = 35.74 + (0.6215 * tempF - 35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF) * Math.pow(speed, 0.16);
        return Math.round(f);
    } else {
        let f = "N/A";
        return f;
    }
}
calcWindChill()

// OpenWeather jSON Fetch
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=07d41ea5aa3c8676e88469ed8ffafeeb';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('condition').textContent = jsObject.weather[0].main;
        document.getElementById('temperature').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('windspeed').textContent = jsObject.wind.speed.toFixed(0);
    });

// OpenWeather Forecast Fetch   
const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=07d41ea5aa3c8676e88469ed8ffafeeb'
fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        const forecasts = jsObject.list.filter(x => x.dt_txt.includes(`18:00:00`));
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 0;
        forecasts.forEach(forecast => {
            let wd = new Date(forecast.dt_txt);
            document.getElementById(`hightemp${day+1}`).textContent = Math.round(forecast.main.temp, 0);
            document.getElementById(`day${day+1}`).textContent = weekdays[wd.getDay()];
            const imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
            const desc = forecast.weather[0].description;
            document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
            day++;

        });
    });