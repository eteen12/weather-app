(()=>{"use strict";const e=async e=>{const t=e.location.name;document.querySelector(".city").innerHTML=t;const n=e.current.temp_c;document.querySelector(".temp").innerHTML=`${n}°C`;const c=e.current.humidity;document.querySelector(".humidity").innerHTML=`${c} %`;const o=e.current.gust_kph;document.querySelector(".wind").innerHTML=`${o} km/h`},t=async t=>{const n=await fetch(`http://api.weatherapi.com/v1/current.json?key=42e9a66ab9ea44fa9b133750242403&q=${t}&aqi=no`),c=await n.json();console.log(c),e(c),(async(e,t)=>{if(document.querySelector("weather-icon"),t){const t=e.current.condition.text;console.log(t)}else console.log("ERROR 404")})(c,t)},n=async()=>{const e=document.querySelector(".search input");document.querySelector(".search button").addEventListener("click",(async()=>{const n=e.value.trim();n?await t(n):console.log("Please enter a city")}))};document.addEventListener("DOMContentLoaded",(()=>{n()})),n(),e()})();