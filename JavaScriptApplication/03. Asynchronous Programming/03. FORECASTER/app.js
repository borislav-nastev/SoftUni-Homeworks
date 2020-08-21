import getData from './requester.js';
import { createTodayForecast, createUpcomingForecast } from './helpers.js';

const getWeatherBtn = document.getElementById('submit');
const locationInput = document.getElementById('location');
const forecastDiv = document.getElementById('forecast');
const currentEl = document.getElementById('current');
const upcomingEl = document.getElementById('upcoming');

getWeatherBtn.addEventListener('click', loadWeather);

function showError(message) {
    document.querySelector('.label').textContent = `Error: ${message}`;
    forecastDiv.style.display = 'block';
}

function resetHtml() {
    currentEl.innerHTML = '<div class="label">Current conditions</div>';
    upcomingEl.innerHTML = '<div class="label">Three-day forecast</div>';
}

async function loadWeather() {

    const location = locationInput.value;

    if (!location) {
        resetHtml();
        showError('Please choose city!');
        return;
    }

    const locationsData = await getData('locations');
    const city = locationsData.filter(el => el.name.toLowerCase() === location.toLowerCase().trim())[0];

    if (!city) {
        resetHtml();
        showError('Please choose another city!');
        return;
    }

    const [today, upcoming] = await Promise.all([getData('today', city.code), getData('upcoming', city.code)]);

    const todayForecast = createTodayForecast(today);
    const upcomingForecast = createUpcomingForecast(upcoming);

    resetHtml();
    currentEl.appendChild(todayForecast);
    upcomingEl.appendChild(upcomingForecast);
    forecastDiv.style.display = 'block';
}