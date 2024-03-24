const apiKey = 'ace96045fa13e8edd3816230134b5da4';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=milan';

const apiFunc = async () => {
  const response = await fetch(`${apiUrl}&appid=${apiKey}`);
  const data = await response.json();

  return data;
};

export default apiFunc;
