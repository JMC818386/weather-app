//Declare globally scoped variable to target input id
let inputField = document.getElementById("inputField");

//Figure out how to assign value from input field zipCode variable
//Possible string literal or string cat
let zipCode = 40517;

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
const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=68793cbcde883e015990d3ae3a5f2cee`;
//Delcare variable holding api key
/* const apiKey = '68793cbcde883e015990d3ae3a5f2cee'; */

//Initialize function to display inputField and getWeatherBtn on page load
function onLoad() {
  //initializes on page load
  //hides html outputContainer, shows html inputContainer

}

//This function will take take the API temp data (in kelvin) and convert it to fahrenheit
function getInputValue(){
  // Selecting the input element and get its value 
  var inputVal = document.getElementById("inputField").value;
  console.log(inputVal);
  // Displaying the value
  alert(inputVal);
}


function getWeatherData() {
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
}


//Create function to convert k to f and c
  
//Create function to populate html id's (populateText)
function populateText(obj) {
  console.log(obj);
  //Variable city creates p element
  //Weather name data is passed as string into p
  cityHeaderText.innerText = "City";
  cityText.innerText = `${obj.name}`;
  console.log(populateText);

  tempHeaderText.innerText = "Temperature";
  kelvinText.innerText = `${obj.main.temp} K`;
  farenText.innerText = `${obj.main.temp} F`;
  celsiusText.innerText = `${obj.main.temp} C`;

  conditionHeaderText.innerText = "Condition";
  conditionText.innerText = `${obj.weather[0].main}`;

  otherInfoHeaderText.innerText = "Other Information";
  otherInfoText.innerText = `Feels Like: ${obj.main.feels_like}`;



}

  //Event listener on getWeatherBtn click
  getWeatherBtn.addEventListener("click", getWeatherData);
    //takes zipcode from input
    //gets data from api
    //runs populateText function

//