var boton = document.querySelector('.boton')
var valorEntrada = document.querySelector('.valorEntrada')
var nombre = document.querySelector('.nombre');
var desc = document.querySelector('.desc');
var icon = document.querySelector('.icon');
var temp = document.querySelector('.temp');
var pais = document.querySelector('.pais');
var viento = document.querySelector('.viento');
var humedad = document.querySelector('.humedad');
var visibilidad = document.querySelector('.visibilidad');
var sensacionTermica = document.querySelector('.sensacionTermica');
var presion = document.querySelector('.presion');
var latitud = document.querySelector('.latitud');
var longitud = document.querySelector('.longitud');
var sun = document.querySelector('.sun');
var mon = document.querySelector('.mon');
var tue = document.querySelector('.tue');
var wed = document.querySelector('.wed');
var thu = document.querySelector('.thu');
var fri = document.querySelector('.fri');
var sat = document.querySelector('.sat');
var hoy = document.querySelector('.hoy');

//Valores por defecto traidor por la API seleccionando la ciudad de Rosario
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Rosario&appid=e30242ec84252ed6796422a415839983`)
.then(response => response.json())
.then(data => {
    var nombreValue = data['name'];
    var tempValue = data['main']['temp'];
    var humedadValue = data['main']['humidity'];
    var presionValue = data['main']['pressure'];
    var descValue = data['weather'][0]['description'];
    var iconValue = data['weather'][0]['icon'];
    var vientoValue = data['wind']['speed'];
    var paisValue = data['sys']['country'];
    var visibilidadValue = data['visibility'];
    var termicaValue = data['main']['feels_like'];
    var lonValue = data['coord']['lon'];
    var latValue = data['coord']['lat'];
    
    nombre.innerHTML = nombreValue;
    temp.innerHTML = parseInt(tempValue - 273)+'°C'; //Resta 273 que representan los Kelvin para que quede en grados Celsius
    humedad.innerHTML = `Humidity: ${humedadValue}%`;
    presion.innerHTML = `Pressure: ${presionValue/1000}`;
    desc.innerHTML = `${descValue}`;
    icon.innerHTML = `<img src="imgs/${iconValue}.png"></img>;`
    viento.innerHTML = `WindStatus ${vientoValue}km/h`;
    pais.innerHTML = `Country: ${paisValue}`;
    visibilidad.innerHTML = `Visibility: ${visibilidadValue/1000}km`;
    sensacionTermica.innerHTML = `Feel like: ${parseInt(termicaValue - 263)}°`;
    longitud.innerHTML = `Longitud: ${lonValue}`;
    latitud.innerHTML = `Latitud: ${latValue}`;

//Usando como parametros la longitud y latitud traida de la anterior API consulta a una nueva API para traer datos de dias futuros   
fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latValue}&lon=${lonValue}&appid=e30242ec84252ed6796422a415839983`)
    .then(response => response.json())
    .then(datoFuturo => {
        console.log(datoFuturo)
        var hoyValue = new Date(datoFuturo['daily'][0]['dt']*1000).toLocaleString();
        var sunValue = [new Date(datoFuturo['daily'][1]['dt']*1000).toLocaleString(),datoFuturo['daily'][1]['weather'][0]['icon'],datoFuturo['daily'][1]['temp']['day']];
        var monValue = [new Date(datoFuturo['daily'][2]['dt']*1000).toLocaleString(),datoFuturo['daily'][2]['weather'][0]['icon'],datoFuturo['daily'][2]['temp']['day']];
        var tueValue = [new Date(datoFuturo['daily'][3]['dt']*1000).toLocaleString(),datoFuturo['daily'][3]['weather'][0]['icon'],datoFuturo['daily'][3]['temp']['day']];
        var wedValue = [new Date(datoFuturo['daily'][4]['dt']*1000).toLocaleString(),datoFuturo['daily'][4]['weather'][0]['icon'],datoFuturo['daily'][4]['temp']['day']];
        var thuValue = [new Date(datoFuturo['daily'][5]['dt']*1000).toLocaleString(),datoFuturo['daily'][5]['weather'][0]['icon'],datoFuturo['daily'][5]['temp']['day']];
        var friValue = [new Date(datoFuturo['daily'][6]['dt']*1000).toLocaleString(),datoFuturo['daily'][6]['weather'][0]['icon'],datoFuturo['daily'][6]['temp']['day']];
        var satValue = [new Date(datoFuturo['daily'][7]['dt']*1000).toLocaleString(),datoFuturo['daily'][7]['weather'][0]['icon'],datoFuturo['daily'][7]['temp']['day']];
        hoy.innerHTML = `<p>${hoyValue.substring(0,9)}</p>`;
        sun.innerHTML = `<p>${sunValue[0].substring(0,4)}</p><img src="imgs/${sunValue[1]}.png"></img><p>${parseInt(sunValue[2] - 273)}°C</p>`;
        mon.innerHTML = `<p>${monValue[0].substring(0,4)}</p><img src="imgs/${monValue[1]}.png"></img><p>${parseInt(monValue[2] - 273)}°C</p>`;
        tue.innerHTML = `<p>${tueValue[0].substring(0,4)}</p><img src="imgs/${tueValue[1]}.png"></img><p>${parseInt(tueValue[2] - 273)}°C</p>`;
        wed.innerHTML = `<p>${wedValue[0].substring(0,4)}</p><img src="imgs/${wedValue[1]}.png"></img><p>${parseInt(wedValue[2] - 273)}°C</p>`;
        thu.innerHTML = `<p>${thuValue[0].substring(0,4)}</p><img src="imgs/${thuValue[1]}.png"></img><p>${parseInt(thuValue[2] - 273)}°C</p>`;
        fri.innerHTML = `<p>${friValue[0].substring(0,4)}</p><img src="imgs/${friValue[1]}.png"></img><p>${parseInt(friValue[2] - 273)}°C</p>`;
        sat.innerHTML = `<p>${satValue[0].substring(0,4)}</p><img src="imgs/${satValue[1]}.png"></img><p>${parseInt(satValue[2] - 273)}°C</p>`;

    })       
})
        

//Valores que traerá la API a partir de que escribamos  una nueva ciudad
boton.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valorEntrada.value}&appid=e30242ec84252ed6796422a415839983`)
    .then(response => response.json())
    .then(data => {
        var nombreValue = data['name'];
        var tempValue = data['main']['temp'];
        var humedadValue = data['main']['humidity'];
        var presionValue = data['main']['pressure'];
        var descValue = data['weather'][0]['description'];
        var iconValue = data['weather'][0]['icon'];
        var vientoValue = data['wind']['speed'];
        var paisValue = data['sys']['country'];
        var visibilidadValue = data['visibility'];
        var termicaValue = data['main']['feels_like'];
        var lonValue = data['coord']['lon'];
        var latValue = data['coord']['lat'];
        
        nombre.innerHTML = nombreValue;
        temp.innerHTML = parseInt(tempValue - 273)+'°C'; //Resta 273 que representan los Kelvin para que quede en grados Celsius
        humedad.innerHTML = `Humidity: ${humedadValue}%`;
        presion.innerHTML = `Pressure: ${presionValue/1000}`;
        desc.innerHTML = `${descValue}`;
        icon.innerHTML = `<img src="imgs/${iconValue}.png"></img>;`
        viento.innerHTML = `WindStatus ${vientoValue}km/h`;
        pais.innerHTML = `Country: ${paisValue}`;
        visibilidad.innerHTML = `Visibility: ${visibilidadValue/1000}km`;
        sensacionTermica.innerHTML = `Feel like: ${parseInt(termicaValue - 263)}°`;
        longitud.innerHTML = `Longitud: ${lonValue}`;
        latitud.innerHTML = `Latitud: ${latValue}`;

    //Usando como parametros la longitud y latitud traida de la anterior API consulta a una nueva API para traer datos de dias futuros
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latValue}&lon=${lonValue}&appid=e30242ec84252ed6796422a415839983`)
        .then(response => response.json())
        .then(datoFuturo => {
            var hoyValue = new Date(datoFuturo['daily'][0]['dt']*1000).toLocaleString();
            var sunValue = [new Date(datoFuturo['daily'][1]['dt']*1000).toLocaleString(),datoFuturo['daily'][1]['weather'][0]['icon'],datoFuturo['daily'][1]['temp']['day']];
            var monValue = [new Date(datoFuturo['daily'][2]['dt']*1000).toLocaleString(),datoFuturo['daily'][2]['weather'][0]['icon'],datoFuturo['daily'][2]['temp']['day']];
            var tueValue = [new Date(datoFuturo['daily'][3]['dt']*1000).toLocaleString(),datoFuturo['daily'][3]['weather'][0]['icon'],datoFuturo['daily'][3]['temp']['day']];
            var wedValue = [new Date(datoFuturo['daily'][4]['dt']*1000).toLocaleString(),datoFuturo['daily'][4]['weather'][0]['icon'],datoFuturo['daily'][4]['temp']['day']];
            var thuValue = [new Date(datoFuturo['daily'][5]['dt']*1000).toLocaleString(),datoFuturo['daily'][5]['weather'][0]['icon'],datoFuturo['daily'][5]['temp']['day']];
            var friValue = [new Date(datoFuturo['daily'][6]['dt']*1000).toLocaleString(),datoFuturo['daily'][6]['weather'][0]['icon'],datoFuturo['daily'][6]['temp']['day']];
            var satValue = [new Date(datoFuturo['daily'][7]['dt']*1000).toLocaleString(),datoFuturo['daily'][7]['weather'][0]['icon'],datoFuturo['daily'][7]['temp']['day']];
            hoy.innerHTML = `<p>${hoyValue.substring(0,9)}</p>`;
            sun.innerHTML = `<p>${sunValue[0].substring(0,4)}</p><img src="imgs/${sunValue[1]}.png"></img><p>${parseInt(sunValue[2] - 273)}°C</p>`;
            mon.innerHTML = `<p>${monValue[0].substring(0,4)}</p><img src="imgs/${monValue[1]}.png"></img><p>${parseInt(monValue[2] - 273)}°C</p>`;
            tue.innerHTML = `<p>${tueValue[0].substring(0,4)}</p><img src="imgs/${tueValue[1]}.png"></img><p>${parseInt(tueValue[2] - 273)}°C</p>`;
            wed.innerHTML = `<p>${wedValue[0].substring(0,4)}</p><img src="imgs/${wedValue[1]}.png"></img><p>${parseInt(wedValue[2] - 273)}°C</p>`;
            thu.innerHTML = `<p>${thuValue[0].substring(0,4)}</p><img src="imgs/${thuValue[1]}.png"></img><p>${parseInt(thuValue[2] - 273)}°C</p>`;
            fri.innerHTML = `<p>${friValue[0].substring(0,4)}</p><img src="imgs/${friValue[1]}.png"></img><p>${parseInt(friValue[2] - 273)}°C</p>`;
            sat.innerHTML = `<p>${satValue[0].substring(0,4)}</p><img src="imgs/${satValue[1]}.png"></img><p>${parseInt(satValue[2] - 273)}°C</p>`;
        })      
    })   
    .catch(err => alert("La ciudad no se encuentra"))
    })


const unixTimestamp = 1626121380

const milliseconds = 1626120000 * 1000 

const dateObject = new Date(milliseconds)

const humanDateFormat = dateObject.toLocaleString()

console.log(humanDateFormat)