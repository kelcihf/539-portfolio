var button = document.querySelector('#weather')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function () {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Kathmandu,np&APPID=32d5add5e320b16f2b17350cbea8140e')
        // response is an http response (so the data dictionary is being received)     
        .then(response => response.json())
        // 'data' is the json dictionary
        .then(data => {
            // grabbing the main object and looking at the value of temp
            var tempValue = data['main']['temp'];
            // grabbing the weather object and looking at the first index item for the desciption
            var descValue = data['weather'][0]['description'];
            // convert from kalvins to celcius 
            temp.innerHTML = (tempValue - 272.15) + " C";
            desc.innerHTML = descValue;
        })

        .catch(err => alert("didn't work, sorry!"))
})

var conversion_button = document.querySelector('#conversion')

conversion_button.addEventListener('click', function () {
    // needs to select all elevation spans so querySelectorAll
    var elevation = document.querySelectorAll('#elevation');

    //    if the inner html of the button says meters then do feet instead
    var ismetric = elevation[0].innerHTML == "meters";
    // defining new variable that means that everything is in metric currently
    var newconversion = "";
    // define the variable but it will be set in the if statement
    var ratio = 0;

    // 1 meter = 3.28084 ft
    if (ismetric == true) {
        newconversion = "feet";
        ratio = 3.28084
    }
    else {
        newconversion = "meters";
        ratio = 1 / 3.28084;
    }


    //  starting with the first item in the array then look at the number of items in the array and loop through each item
    for (var index = 0; index < elevation.length; index++) {
        // take the value and apply whichever ratio depending on the current metric as defined in if statement
        elevation[index].innerHTML = elevation[index].innerHTML * ratio
    }
    // needs to select all elevation spans so querySelectorAll
    var metric = document.querySelectorAll('#metric');
    //  starting with the first item in the array then look at the number of items in the array and loop through each item
    for (var index = 0; index < metric.length; index++) {
        metric[index].innerHTML = newconversion
    }
});

