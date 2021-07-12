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
    humedad.innerHTML = 'Humidity: '+humedadValue+'%';
    presion.innerHTML = 'Pressure: '+presionValue/1000;
    desc.innerHTML = descValue;
    icon.innerHTML = '<img src="imgs/'+iconValue+'.png"></img>'
    viento.innerHTML = 'WindStatus '+vientoValue +' km/h';
    pais.innerHTML = 'Country: '+paisValue;
    visibilidad.innerHTML = 'Visibility: '+visibilidadValue/1000+'km';
    sensacionTermica.innerHTML = 'Feel like: '+parseInt(termicaValue - 273)+'°';
    longitud.innerHTML = 'Lon: '+lonValue;
    latitud.innerHTML = 'Lat: '+latValue;   
})
        

//Valores que traerá la API a partir de que escribamos  una nueva ciudad
boton.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valorEntrada.value}&appid=e30242ec84252ed6796422a415839983`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
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
        humedad.innerHTML = 'Humidity: '+humedadValue+'%';
        presion.innerHTML = 'Pressure: '+presionValue/1000;
        desc.innerHTML = descValue;
        icon.innerHTML = '<img src="imgs/'+iconValue+'.png"></img>'
        viento.innerHTML = 'WindStatus '+vientoValue +' km/h';
        pais.innerHTML = 'Country: '+paisValue;
        visibilidad.innerHTML = 'Visibility: '+visibilidadValue/1000+'km';
        sensacionTermica.innerHTML = 'Feel like: '+parseInt(termicaValue - 273)+'°';
        longitud.innerHTML = 'Lon: '+lonValue;
        latitud.innerHTML = 'Lat: '+latValue;
        
        
    })
    
    
    .catch(err => alert("La ciudad no se encuentra"))
    })


    function pronosticoFuturo(latValue, lonValue){
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+latValue+'&lon='+lonValue+'&exclude=hourly,daily&appid=e30242ec84252ed6796422a415839983')
        .then(response => response.json())
        .then(datoFuturo => {
            console.log(datoFuturo);
        })
    }