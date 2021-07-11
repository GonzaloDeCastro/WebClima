var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var nombre = document.querySelector('.nombre');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');


button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=e30242ec84252ed6796422a415839983')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var nombreValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        nombre.innerHTML = nombreValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })
    
    
    .catch(err => alert("La ciudad no se encuentra"))
    })
