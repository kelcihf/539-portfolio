var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('api.openweathermap.org/data/2.5/weather?q=Kathmandu,np&APPID=32d5add5e320b16f2b17350cbea8140e')
    .then(response => response.json())
    .then(data => {
        var tempValue =data['main']['temp'];
        var descValue =data['weather'][0]['description'];

        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })

    .catch(err => alert("didn't work, sorry!")) })
