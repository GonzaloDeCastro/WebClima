var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var nombre = document.querySelector('.nombre');
var desc = document.querySelector('.desc');
var icon = document.querySelector('.icon');
var temp = document.querySelector('.temp');
var pais = document.querySelector('.pais');
var viento = document.querySelector('.viento');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=e30242ec84252ed6796422a415839983')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var nombreValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var iconValue = data['weather'][0]['icon'];
        var vientoValue = data['wind']['speed'];
        var paisValue = data['sys']['country'];

        nombre.innerHTML = nombreValue;
        temp.innerHTML = parseInt(tempValue - 273)+'°'; //Resta 273 que representan los Kelvin para que quede en grados Celsius
        desc.innerHTML = descValue;
        icon.innerHTML = '<img src="imgs/'+iconValue+'.png"></img>'
        viento.innerHTML = 'Wind Speed: '+vientoValue+' m/s';
        pais.innerHTML = 'Country: '+paisValue;
    })
    
    
    .catch(err => alert("La ciudad no se encuentra"))
    })
