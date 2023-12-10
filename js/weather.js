const API_KEY = 'a23bbb56faf1f4654fd219f48bb44dae';


function onGeoOk(position) {
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도
  console.log('lat: ', lat)
  console.log('lon: ', lon)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // units=metric => 온도를 섭씨(°C)와 같은 메트릭 단위 시스템으로 데이터 반환
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector('#weather p:first-child');
    const location = document.querySelector('#weather p:last-child');
    weather.innerText = `${data.weather[0].main} ${Math.round(data.main.temp)}°C`;
    location.innerText = data.name;
    
  });
}

function onGeoError() {
  alert('Cant find you. No weather for you.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);