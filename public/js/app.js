
var form = document.querySelector('form');
var search = document.querySelector('input');
var weather = document.querySelector('.weather');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    weather.textContent = "Loading..."
    fetch(`http://localhost:3000/weather?address=${search.value}`)
    .then(data => data.json())
    .then(obj => {
        console.log(obj);
        if(obj['error']){
            weather.textContent = 'Unable to find the location.Try another place.';
        }else{
            weather.textContent = obj.forecast + ' in ' + obj.location
        }
        
    })
    .catch(e => console.error(e));

})