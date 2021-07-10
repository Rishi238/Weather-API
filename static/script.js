
function getWeather(city) {
    // api_key = "931fa1ce6281fa8596d48b3224a7a3a7"
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city +
        "&units=metric&appid=931fa1ce6281fa8596d48b3224a7a3a7"
        // + this.api_key
    )
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('City Not Found');
            }
        })
        .then((data) => {
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp, feels_like, temp_min, temp_max, pressure, humidity } = data.main;
            const { speed } = data.wind;
            const { sunrise, sunset } = data.sys;
            rise = TimeConvertor(sunrise);
            set = TimeConvertor(sunset);
            document.getElementById('city').innerText = name;
            document.getElementById('rise-icon').src = "/static/sunrise.png"
            document.getElementById('sun-rise').innerText = rise + "A.M.";
            document.getElementById('set-icon').src = "/static/sunset.png"
            document.getElementById('sun-set').innerText = set + "P.M."
            document.getElementById('icon').src =
                "https://openweathermap.org/img/wn/" + icon + ".png"
            document.getElementById('condition').innerText = description;
            document.getElementById('temp').innerText = temp + "°C";
            document.getElementById('feels-like').innerText = "Feels like : " + feels_like + "°C";
            document.getElementById('max-min-temp').innerText = "Max/Min Temp : " + temp_min + "°C/" + temp_max + "°C";
            document.getElementById('w-icon').src =
                "/static/wind.png"
            document.getElementById('w-speed').innerText = " : "+speed + "m/s";
            document.getElementById('pressure').innerText = "Pressure : " + pressure + "mbar";
            document.getElementById('humidity').innerText = "Humidity : " + humidity + "%";

        })
        .catch((error) => {
            alert(error);
        });

}
function TimeConvertor(Time) {
    var date = new Date(Time * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2);
    return formattedTime
}


function search() {
    getWeather(document.getElementById('search-box').value);
}

document.getElementById('search-box').addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        search();
    }
})




