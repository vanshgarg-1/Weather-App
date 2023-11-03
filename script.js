let weather = {
    'apikey': '1d56d20d6b3c3c10907cc47e80c7df84',
    fetchweather: function (city) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.apikey
        )
            .then((response) => response.json())
            .then((data) => this.displayweather(data));
    },

    displayweather: function (data) {

        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector('.city').innerText = "WEATHER IN: " + name;
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + "°C";
        document.querySelector('.humidity').innerText = "HUMIDITY: " + humidity + "%";
        document.querySelector('.wind').innerText = "WINDSPEED: " + speed + "KM/HR";
        document.querySelector('.weather').classList.remove('loading');
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1980x1080/?" + name + "')";
    },
    search: function () {
        this.fetchweather(document.querySelector('.searchbar').value);
    }

}

document.querySelector('.search button').addEventListener('click', function () {
    weather.search();
})

document.querySelector('.searchbar').addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
        weather.search();
    }
})

weather.fetchweather("Muzaffarnagar");