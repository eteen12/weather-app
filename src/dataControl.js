const dataControlFunc = async (data) => {
  const city = data.location.name;
  document.querySelector('.city').innerHTML = city;
  console.log(city);
};
export default dataControlFunc;
