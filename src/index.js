import './styles/main.scss';


const getWeather = (function () {


  // API variables
  let myLocation;
  let city;
  let state;
  let country;
  let condition;
  let conditionIcon;
  let tempC;
  let tempF;
  let feelsC;
  let feelsF;


  function setLocation(newLocation) {
    myLocation = newLocation;
    locationData();
  }

  async function locationData() {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2d4caef01f264d8387e153546242303&q=${myLocation}&days=3&aqi=no&alerts=no`, { mode: 'cors' })
    response.json().then(function (response) {
      console.log(response)
      city = response.location.name;
      state = response.location.region;
      country = response.location.country;
      condition = response.current.condition.text;
      tempC = response.current.temp_c;
      tempF = response.current.temp_f;
      feelsC = response.current.feelslike_c;
      feelsF = response.current.feelslike_f;
    })
      .then(function () {
        render()
      })
  }

  function render() {
    const cityShow = document.querySelector('#city')
    const stateShow = document.querySelector('#state')
    const countryShow = document.querySelector('#country')
    const conditionShow = document.querySelector('#condition')
    const tempShow = document.querySelector('#temp')
    const feelsShow = document.querySelector('#feels')

    cityShow.innerText = city
    stateShow.innerText = state
    countryShow.innerText = country
    conditionShow.innerText = condition
    tempShow.innerText = `${tempF}°F `
    feelsShow.innerText = `${feelsF}°F`
  }

  return {
    setLocation,
  };
})();

getWeather.setLocation('25312')