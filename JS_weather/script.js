
const weatherApp = function() {

    const app = document.createElement('div');
    app.classList.add('weather');

    const currentWeather = document.createElement('div');
    currentWeather.classList.add('current_weather');

    const moreWeatherFeat = document.createElement('div');
    moreWeatherFeat.classList.add('more_weather');

    app.appendChild(currentWeather);
    app.appendChild(moreWeatherFeat);

    const searchCityInput = document.querySelector('.input_city');
    const forecastBtn = document.querySelector('.button_forecast');
    const overlay = document.querySelector('.overlay');
    const widgetContent = document.querySelector('.widget_content');

    const showWeather = function(data) {
        console.log(data);

        let date = data.location.localtime.split(' ')[0];
        console.log(date);

        currentWeather.innerHTML =
        `
        <div class="city">${data.location.name}, <span>${data.location.country}</span></div>
        <div class="time">${data.current.observation_time}</div>
        <div class="date">${date}</div>
        <img class="weather_img" src=${data.current.weather_icons} />
        <div class="weather_text">
            ${data.current.weather_descriptions}
            <span>${data.current.temperature} &nbsp&deg</span>
        </div>
        `;

        moreWeatherFeat.innerHTML = 
        `
        <div class="humidity more_item">Humidity <span>${data.current.humidity} %</span></div>
        <div class="wind_speed more_item">Wind speed <span>${data.current.wind_speed} km/h</span></div> 
        <div class="cloud_cover more_item">Cloud cover <span>${data.current.cloudcover} %</span></div> 
        <div class="pressure more_item">Air pressure <span>${data.current.pressure} MB</span></div> 
        `
    };

    const getData = async function(city) {

        if(!city) return;

        let url = `http://api.weatherstack.com/current?access_key=f96a6d2444aff1fffb2ba500d0040e6f&query=${city}`;

        await fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            showWeather(result);
        });
    };

    forecastBtn.addEventListener('click', function(event) {
        event.preventDefault();

        overlay.style.alignItems = 'flex-start';
        overlay.style.paddingTop = "20px";

        getData(searchCityInput.value);
        widgetContent.appendChild(app);
    });
    
};

window.addEventListener('load', weatherApp);

