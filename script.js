var input = document.querySelector('.input_text');
var main = document.querySelector('#city');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var button= document.querySelector('.submition');


button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=cf6d370883b07c71f577e5c7ee928629')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Weather description : "+descValue;
  temp.innerHTML = "Temperature : "+tempValue+'℃';
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})
