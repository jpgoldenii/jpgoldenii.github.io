const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&APPID=07d41ea5aa3c8676e88469ed8ffafeeb'
fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
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
