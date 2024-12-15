const divweather=document.querySelector('.weather');
const urlWeather =`http://cdn.weatherapi.com/weather/64x64/night/113.png`
const apiKey='fa9cd5233eb64891ad4221449240612'
const city='Elche';
const endPointCurrent=`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`
const endPointForecast=`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=yes`




    const getcurrentWeather=async ()=>{
    try{
        const respuesta=await fetch(endPointCurrent,{
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(response => {
            if (!response.ok){
                throw new Error ('Ha surgido un error', response.status);
            }
           return response.json();
          })
          .catch(error => console.error(error));

          return respuesta;
    }catch{
          console.log('Error al consultar el tiempo');
    }
    }

function paintWeather(currentWeather){

    const plantilla=`<div class='currentWeather' class='currentWeather'>
                       <h2>${currentWeather.location.name} / ${currentWeather.location.country}</h2> 
                       <p>${currentWeather.current.condition.text}</p>
                       <div class='current-data'>
                            <div class='current-grades'>
                                <img class='weather-icon' src='${currentWeather.current.condition.icon}' alt='${currentWeather.current.condition.text}'>
                                <div>${currentWeather.current.temp_c}<img src='./assets/img/celsius.png' alt='grados'></div>
                            </div>
                            <ul>
                                <li>Precipitaciones: ${currentWeather.current.precip_mm}% </li>
                                <li>Humedad: ${currentWeather.current.humidity}% </li>
                                <li>Viento: ${currentWeather.current.wind_kph}Km </li>
                            </ul>
                       </div>
                    </div>`

                  divweather.innerHTML=plantilla;
                 //  console.log(plantilla);
}

getcurrentWeather().then((currentWeather)=> paintWeather(currentWeather));



//forecast
const getforecasttWeather=async ()=>{
    try{
        const respuesta=await fetch(endPointForecast,{
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(response => {
            if (!response.ok){
                throw new Error ('Ha surgido un error', response.status);
            }
           return response.json();
          })
          .catch(error => console.error(error));

          return respuesta;
    }catch{
          console.log('Error al consultar el tiempo');
    }
    }

function paintForecast(forecastWeather){

    const ulElement =document.createElement('ul');
    ulElement.id='forecastWeather';
    ulElement.classList.add('forecastWeather');
    const longElement=forecastWeather.forecast.forecastday[0].hour.length
      for(let i=0; i<longElement;i++){
      
        //La fecha es de tipo string  console.log(typeof Fecha);
        const dateHour= forecastWeather.forecast.forecastday[0].hour[i].time ; 
        const hour =dateHour.substr(dateHour.indexOf(" "));
        const imgSrc ='http:' + forecastWeather.forecast.forecastday[0].hour[i].condition.icon;
        const imgAlt = forecastWeather.forecast.forecastday[0].hour[i].condition.text;
        const pTemp = forecastWeather.forecast.forecastday[0].hour[i].temp_c;

        let liElement  =document.createElement('li');
        liElement.classList.add('forecast-grades');
        
        let plantilla =`<span>
                            ${hour}
                            <span>
                                <img class='weather-icon' src='${imgSrc}' alt='${imgAlt}'>
                            </span>
                            <p>${pTemp} °C</p>
                        </span>`;
        liElement.innerHTML=plantilla;
        ulElement.appendChild(liElement);
     
      }

      divweather.appendChild(ulElement);
}

  getforecasttWeather().then((forecastWeather)=> paintForecast(forecastWeather));