const renderFunc = (data) => {
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = data.main.temp;
};
export default renderFunc;
