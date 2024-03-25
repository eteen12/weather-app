const apiKey = '42e9a66ab9ea44fa9b133750242403';
const apiUrl = 'http://api.weatherapi.com/v1/current.json?key=';

const apiFunc = async (city) => {
  const response = await fetch(`${apiUrl + apiKey}&q=${city}&aqi=no`);
  const data = await response.json();
  console.log(data);
};

export default apiFunc;
