const conditionsFunc = async (data, city) => {
  const weatherIcon = document.querySelector('weather-icon');

  if (city) {
    const conditions = data.current.condition.text;
    console.log(conditions);
  } else {
    console.log('ERROR 404');
  }
};

export default conditionsFunc;
