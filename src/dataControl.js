const dataControlFunc = async (data) => {
  const city = data.location.name;
  document.querySelector('.city').innerHTML = city;

  const temp = data.current.temp_c;
  document.querySelector('.temp').innerHTML = `${temp}°C`;
};
export default dataControlFunc;
