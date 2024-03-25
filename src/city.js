import apiFunc from './api';
import conditionsFunc from './conditions';

const cityFunc = async () => {
  const searchBox = document.querySelector('.search input');
  const searchBtn = document.querySelector('.search button');

  searchBtn.addEventListener('click', async () => {
    const city = searchBox.value.trim();
    if (city) {
      await apiFunc(city); // using await
    } else {
      console.log('Please enter a city');
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  cityFunc();
});
export default cityFunc;
