const weather = document.querySelector(".current-weather")
const weatherImg = document.querySelector(".weather-img")
const weatherIcon = document.querySelector(".icon")

switch (weather.innerHTML) {
    case "Moderate or heavy rain with thunder":
        weatherImg.src = "../images/benjamin-sow-QjR_snVQn4c-unsplash.jpg"
        weatherIcon.src = "../images/reshot-icon-electric-clouds-DKLY6EF9H5.svg"
        break;

    case "Light rain shower":
        weatherImg.src = "../images/heavy rain.jpg"
        weatherIcon.src = "../images/reshot-icon-rain-5YXUMGH6ZB.svg"

        break;
    case "Light rain":
        weatherImg.src = "../images/heavy rain.jpg"
        weatherIcon.src = "../images/reshot-icon-rain-5YXUMGH6ZB.svg"
        break;
    case "Sunny":
        weatherImg.src = "../images/frank-mckenna-eXHeq48Z-Q4-unsplash.jpg"
        weatherIcon.src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Weather_icon_-_sunny.svg"
        break;
    case "broken clouds":
        weatherImg.src = "../images/chuttersnap-rk2s0sm8xF4-unsplash.jpg"
        weatherIcon.src = "../images/reshot-icon-rain-clouds-QTLW32D7FR.svg"
        break;
    case "Partly cloudy":
        weatherImg.src = "../images/chuttersnap-rk2s0sm8xF4-unsplash.jpg"
        weatherIcon.src = "../images/reshot-icon-rain-clouds-QTLW32D7FR.svg"
        break;
    case "Clear":
        weatherImg.src = "../images/chan-hoi-uj-w-v7OFT4-unsplash.jpg"
        weatherIcon.src = "../images/moon-and-stars.png"
        break;
    case "Overcast":
        weatherImg.src = "../images/chuttersnap-rk2s0sm8xF4-unsplash.jpg"
        weatherIcon.src = "../images/reshot-icon-cloud-moon-BMWVYDZEUA.svg"
    default:
        weatherImg.src = "../images/chuttersnap-rk2s0sm8xF4-unsplash.jpg"
        weatherIcon.src = "../images/reshot-icon-rain-clouds-QTLW32D7FR.svg"
        break;


}
