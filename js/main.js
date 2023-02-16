//Declare globally scoped variable to target input id
let inputField = document.getElementById("inputField");

//Figure out how to assign value from input field zipCode variable
//Possible string literal or string cat
let zipCode;

//Declare globally scoped variable to target input id
let getWeatherBtn = document.getElementById("getWeatherBtn");

//Declare globally scoped variables to target html id's
let cityText = document.getElementById("cityText");
let kelvinText = document.getElementById("kelvinText");
let farenText = document.getElementById("farenText");
let celsiusText = document.getElementById("celsiusText");
let conditionText = document.getElementById("conditionText");
let otherInfoText = document.getElementById("otherInfoText");


//Delcare variable holding api url
const url = 'https://api.openweathermap.org/data/2.5/weather?zip=40517,us&appid=68793cbcde883e015990d3ae3a5f2cee';
//Delcare variable holding api key
/* const apiKey = '68793cbcde883e015990d3ae3a5f2cee'; */

//Initialize function to display inputField and getWeatherBtn on page load
//function onLoad() {
  //initializes on page load
  //hides html outputContainer, shows html inputContainer

//}


//function getWeatherData() {
    //If zipCode input doesn't work globally, place locally in function
    //possible gotcha**
  //Run axios function to get api data
  axios.get(url)
    .then(function (response) {
      // handle success
      console.log(response);
      populateText(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
//}

  
//Create function to populate html id's (populateText)
function populateText(arr) {
  for(cityField of arr) {
  //Variable city creates p element
  let city = document.createElement('p');
  //Weather name data is passed as string into p
  city.innerText = `${cityField.name}`;
  console.log(populateText);
  city.appendChild(city);
  }
}

  //Event listener on getWeatherBtn click
  document.getElementById("getWeatherBtn").addEventListener("click", getWeatherData);
    //takes zipcode from input
    //gets data from api
    //runs populateText function

//