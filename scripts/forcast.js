const key = 'p1TPu7SSOpbuIPEyqnH8yhmADPAtbZx4';

const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const qurey = `${id}?apikey=${key}`;

    const response = await fetch(base + qurey);
    const data = await response.json();
    
    return data[0];
};

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const qurey = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + qurey);
    const data = await response.json();
    
    return data[0]; 
};

// getCity('delhi').then(data => {
//     return getWeather(data.Key);
//  }).then( data => {
//      console.log(data);
//  }).catch(err => console.log(err));
