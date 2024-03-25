const dataControlFunc = async (data) => {
  const city = data.location.name;
  document.querySelector('.city').innerHTML = city;

  const temp = data.current.temp_c;
  document.querySelector('.temp').innerHTML = `${temp}°C`;

  const humid = data.current.humidity;
  document.querySelector('.humidity').innerHTML = `${humid} %`;

  const wind = data.current.gust_kph;
  document.querySelector('.wind').innerHTML = `${wind} km/h`;
};
export default dataControlFunc;
