const apiFunc = () => {
  const apiKey = 'ace96045fa13e8edd3816230134b5da4';
  const apiUrl =
    'https://api.openweathermap.org/data/2.5/weather?units=metric&q=milan';

  async function checkWeather() {
    const response = await fetch(`${apiUrl}&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);
  }
  checkWeather();
};

export default apiFunc;
