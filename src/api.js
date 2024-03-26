import dataControlFunc from './dataControl';
import conditionsFunc from './conditions';

const apiKey = '42e9a66ab9ea44fa9b133750242403';
const apiUrl = '://api.weatherapi.com/v1/current.json?key=';

const apiFunc = async (city) => {
  const response = await fetch(`https${apiUrl + apiKey}&q=${city}&aqi=no`);
  const data = await response.json();
  dataControlFunc(data);
  conditionsFunc(data, city);
};

export default apiFunc;
