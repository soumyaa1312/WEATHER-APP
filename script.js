async function getWeather() {

    const city = document.getElementById("city").value;

    const apiKey = "bf193a546cfee2177ab8ac20734ef28b";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    const result = document.getElementById("weather-result");

    if (data.cod == 200) {

        result.innerHTML = `
            <h2>${data.name}</h2>
            <h3>${data.main.temp}°C</h3>
            <p>${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    }
    else {
        result.innerHTML = `<p>City not found</p>`;
    }
}