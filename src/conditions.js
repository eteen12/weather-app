const conditionsFunc = async (data, city) => {
  const weatherIcon = document.querySelector('.weather-icon');

  const conditions = data.current.condition.text;

  if (city) {
    console.log(conditions);
    if (conditions === 'Sunny' || conditions === 'Clear') {
      weatherIcon.innerHTML =
        '<span class="material-symbols-outlined" id="main-icon">sunny</span>';
    } else if (conditions === 'Overcast') {
      weatherIcon.innerHTML =
        '<span class="material-symbols-outlined" id="main-icon">foggy</span>';
    } else if (conditions === 'Partly cloudy') {
      weatherIcon.innerHTML =
        '<span class="material-symbols-outlined" id="main-icon">partly_cloudy_day</span>';
    } else if (conditions.toLowerCase().includes('rain')) {
      weatherIcon.innerHTML =
        '<span class="material-symbols-outlined" id="main-icon">rainy</span>';
    } else if (conditions === 'Mist') {
      weatherIcon.innerHTML =
        '<span class="material-symbols-outlined" id="main-icon">mist</span>';
    } else if (conditions.toLowerCase().includes('snow')) {
      weatherIcon.innerHTML =
        '<span class="material-symbols-outlined" id="main-icon">cloudy_snowing</span>';
    }
  }
};

export default conditionsFunc;
// sunny.clear,overcast.partly cloudy,?(contains rain), light rain,mist
