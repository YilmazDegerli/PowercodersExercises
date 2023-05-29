/* 1. we are using geocoding api to find latitude & longtitude of our cities.
2. We use 


*/

const apiUrlTemp = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m"

const apiUrlLoc = "https://geocoding-api.open-meteo.com/v1/search?name=Zurich&count=1&language=en&format=json&name="

const cityInput = document.querySelector('input[type="search"]');
const h2output = document.querySelector("h2");

cityInput.addEventListener("change", e=>{
    fetch(apiUrlLoc+e.target.value)
        .then(response => response.json())
        .then(data => {
            if(typeof(data.results) !== "undefined"){
                let lat = data.results[0].latitude;
                let long = data.results[0].longitude;
                
                fetch(`${apiUrlTemp}&latitude=${lat}&longitude=${long}`)
                    .then(tempResponse => tempResponse.json())
                    .then(tempData => {
                        let currentTemp =tempData.current_weather.temperature;
                        let spanElm =document.createElement("span");
                        spanElm.textContent = `${currentTemp} C`;

                        if(currentTemp < 0){
                            spanElm =`class="cold"`;
                        } else if(currentTemp > 20){
                            spanElm = `class="hot"`;
                        }
                        h2output.textContent = `The current weather in ${e.target.value} is`;
                    });
            } else {
                h2output.textContent = `There is no weather data in ${e.target.value} city`
            }
        });
});