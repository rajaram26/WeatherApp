const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const detail = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')

const updateUI = (data) => {

    // const cityDetail = data.cityDetail;
    // const weather = data.weather;

    const {cityDetail,weather} = data;

    detail.innerHTML = `
    <h5 class="my-3">${cityDetail.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;c</span>
        </div>
    `;
    console.log(weather);
    const iconScr = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconScr);

    let timeScr = null;
    if(weather.IsDayTime){
        timeScr = 'img/day.svg';
    }else{
        timeScr = 'img/night.svg';
    }
    time.setAttribute('src',timeScr);
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};

const updateCity = async (city) => {

    const cityDetail = await getCity(city);
    const weather  = await getWeather(cityDetail.Key);
    
    return{cityDetail,weather};

};
cityForm.addEventListener('submit', e => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
      .then(data => updateUI(data))
      .catch(err => console.log(err));
});

