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
var contenedorDias = document.querySelector(".contenedorDias");
var sem0 = document.getElementById('sem0'); 

for (var i = 1; i < 8; i++) {
        var sem = document.createElement('div');
        var par = document.createElement('p');
        var parimg = document.createElement('img');
        var par2 = document.createElement('p');
        sem.id = 'sem'+ i;
        sem.appendChild(par)
        sem.appendChild(parimg)
        sem.appendChild(par2)
        contenedorDias.appendChild(sem);
    }

var semanas = [
    {
        sem1:document.getElementById('sem1')
    },
    {
        sem2:document.getElementById('sem2')
    },
    {
        sem3:document.getElementById('sem3')
    },
    {
        sem4:document.getElementById('sem4')
    },
    {
        sem5:document.getElementById('sem5')
    },
    {
        sem6:document.getElementById('sem6')
    },
    {
        sem7:document.getElementById('sem7')
    },

];


//Valores por defecto traidor por la API seleccionando la ciudad de Rosario
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Rosario&appid=e30242ec84252ed6796422a415839983`)
.then(response => response.json())
.then(data => {
    var nombreValue = data.name;
    var tempValue = data.main.temp;
    var humedadValue = data.main.humidity;
    var presionValue = data.main.pressure;
    var descValue = data.weather[0].description;
    var iconValue = data.weather[0].icon;
    var vientoValue = data.wind.speed;
    var paisValue = data.sys.country;
    var visibilidadValue = data.visibility;
    var termicaValue = data.main.feels_like;
    var lonValue = data.coord.lon;
    var latValue = data.coord.lat;
    
    nombre.innerHTML = nombreValue;
    temp.innerHTML = parseInt(tempValue - 273)+'°C'; //Resta 273 que representan los Kelvin para que quede en grados Celsius
    humedad.innerHTML = `Humidity: ${humedadValue}%`;
    presion.innerHTML = `Pressure: ${presionValue/1000}`;
    desc.innerHTML = `${descValue}`;
    icon.innerHTML = `<img src="imgs/${iconValue}.png"></img>`;
    viento.innerHTML = `WindStatus ${vientoValue}m/s`;
    pais.innerHTML = `Country: ${paisValue}`;
    visibilidad.innerHTML = `Visibility: ${visibilidadValue/1000}km`;
    sensacionTermica.innerHTML = `Feel like: ${parseInt(termicaValue - 273)}°`;
    longitud.innerHTML = `Longitud: ${lonValue}`;
    latitud.innerHTML = `Latitud: ${latValue}`;

//Usando como parametros la longitud y latitud traida de la anterior API consulta a una nueva API para traer datos de dias futuros   
fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latValue}&lon=${lonValue}&appid=e30242ec84252ed6796422a415839983`)
    .then(response => response.json())
    .then(datoFuturo => {
        console.log(datoFuturo)
        var dia0 = new Date(datoFuturo.daily[0].dt*1000).toLocaleString();
        for (i = 1; i<= 7; i++){
            semanas[i] = [new Date(datoFuturo.daily[i].dt*1000).toLocaleString(),datoFuturo.daily[i].weather[0].icon,datoFuturo.daily[i].temp.day];
        }

        sem0.innerHTML = `<p>${dia0.substring(0,9)}</p>`;
        sem1.innerHTML = `<p>${semanas[1][0].substring(0,4)}</p><img src="imgs/${semanas[1][1]}.png"></img><p>${parseInt(semanas[1][2] - 273)}°C</p>`;
        sem2.innerHTML = `<p>${semanas[2][0].substring(0,4)}</p><img src="imgs/${semanas[2][1]}.png"></img><p>${parseInt(semanas[2][2] - 273)}°C</p>`;
        sem3.innerHTML = `<p>${semanas[3][0].substring(0,4)}</p><img src="imgs/${semanas[3][1]}.png"></img><p>${parseInt(semanas[3][2] - 273)}°C</p>`;
        sem4.innerHTML = `<p>${semanas[4][0].substring(0,4)}</p><img src="imgs/${semanas[4][1]}.png"></img><p>${parseInt(semanas[4][2] - 273)}°C</p>`;
        sem5.innerHTML = `<p>${semanas[5][0].substring(0,4)}</p><img src="imgs/${semanas[5][1]}.png"></img><p>${parseInt(semanas[5][2] - 273)}°C</p>`;
        sem6.innerHTML = `<p>${semanas[6][0].substring(0,4)}</p><img src="imgs/${semanas[6][1]}.png"></img><p>${parseInt(semanas[6][2] - 273)}°C</p>`;
        sem7.innerHTML = `<p>${semanas[7][0].substring(0,4)}</p><img src="imgs/${semanas[7][1]}.png"></img><p>${parseInt(semanas[7][2] - 273)}°C</p>`;

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
        icon.innerHTML = `<img src="imgs/${iconValue}.png"></img>`;
        viento.innerHTML = `WindStatus ${vientoValue}m/s`;
        pais.innerHTML = `Country: ${paisValue}`;
        visibilidad.innerHTML = `Visibility: ${visibilidadValue/1000}km`;
        sensacionTermica.innerHTML = `Feel like: ${parseInt(termicaValue - 273)}°`;
        longitud.innerHTML = `Longitud: ${lonValue}`;
        latitud.innerHTML = `Latitud: ${latValue}`;

    //Usando como parametros la longitud y latitud traida de la anterior API consulta a una nueva API para traer datos de dias futuros
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latValue}&lon=${lonValue}&appid=e30242ec84252ed6796422a415839983`)
        .then(response => response.json())
        .then(datoFuturo => {
            var dia0 = new Date(datoFuturo.daily[0].dt*1000).toLocaleString();
            var dia1 = [new Date(datoFuturo.daily[1].dt*1000).toLocaleString(),datoFuturo.daily[1].weather[0].icon,datoFuturo.daily[1].temp.day];
            var dia2 = [new Date(datoFuturo.daily[2].dt*1000).toLocaleString(),datoFuturo.daily[2].weather[0].icon,datoFuturo.daily[2].temp.day];
            var dia3 = [new Date(datoFuturo.daily[3].dt*1000).toLocaleString(),datoFuturo.daily[3].weather[0].icon,datoFuturo.daily[3].temp.day];
            var dia4 = [new Date(datoFuturo.daily[4].dt*1000).toLocaleString(),datoFuturo.daily[4].weather[0].icon,datoFuturo.daily[4].temp.day];
            var dia5 = [new Date(datoFuturo.daily[5].dt*1000).toLocaleString(),datoFuturo.daily[5].weather[0].icon,datoFuturo.daily[5].temp.day];
            var dia6 = [new Date(datoFuturo.daily[6].dt*1000).toLocaleString(),datoFuturo.daily[6].weather[0].icon,datoFuturo.daily[6].temp.day];
            var dia7 = [new Date(datoFuturo.daily[7].dt*1000).toLocaleString(),datoFuturo.daily[7].weather[0].icon,datoFuturo.daily[7].temp.day];
            sem0.innerHTML = `<p>${dia0.substring(0,9)}</p>`;
            sem1.innerHTML = `<p>${dia1[0].substring(0,4)}</p><img src="imgs/${dia1[1]}.png"></img><p>${parseInt(dia1[2] - 273)}°C</p>`;
            sem2.innerHTML = `<p>${dia2[0].substring(0,4)}</p><img src="imgs/${dia2[1]}.png"></img><p>${parseInt(dia2[2] - 273)}°C</p>`;
            sem3.innerHTML = `<p>${dia3[0].substring(0,4)}</p><img src="imgs/${dia3[1]}.png"></img><p>${parseInt(dia3[2] - 273)}°C</p>`;
            sem4.innerHTML = `<p>${dia4[0].substring(0,4)}</p><img src="imgs/${dia4[1]}.png"></img><p>${parseInt(dia4[2] - 273)}°C</p>`;
            sem5.innerHTML = `<p>${dia5[0].substring(0,4)}</p><img src="imgs/${dia5[1]}.png"></img><p>${parseInt(dia5[2] - 273)}°C</p>`;
            sem6.innerHTML = `<p>${dia6[0].substring(0,4)}</p><img src="imgs/${dia6[1]}.png"></img><p>${parseInt(dia6[2] - 273)}°C</p>`;
            sem7.innerHTML = `<p>${dia7[0].substring(0,4)}</p><img src="imgs/${dia7[1]}.png"></img><p>${parseInt(dia7[2] - 273)}°C</p>`;
        })      
    })   
    .catch(err => alert("La ciudad no se encuentra"))
    })


const unixTimestamp = 1626121380

const milliseconds = 1626120000 * 1000 

const dateObject = new Date(milliseconds)

const humanDateFormat = dateObject.toLocaleString()

console.log(humanDateFormat)


const abrevio = new Date(1626120000 * 1000).toLocaleString()

