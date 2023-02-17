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
let url;
let outputContainer = document.getElementById("outputContainer");
/*-------------------------------------------------*/

function getInputValue(){
  // Selecting the input element and get its value 
  zipCode = document.getElementById("inputField").value;
  url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=68793cbcde883e015990d3ae3a5f2cee`;
  // Console.log the value
  console.log(zipCode);
}

/*-------------------------------------------------*/

//Delcare variable holding api url

//Delcare variable holding api key
/* const apiKey = '68793cbcde883e015990d3ae3a5f2cee'; */

/*-------------------------------------------------*/

//Initialize function to display inputField and getWeatherBtn on page load
function onLoad() {
  //initializes on page load
  //hides html outputContainer, shows html inputContainer
outputContainer.hidden = true;

}

  /*-------------------------------------------------*/

function getWeatherData() {
    //If zipCode input doesn't work globally, place locally in function
    //possible gotcha**
  //Run axios function to get api data
  getInputValue()
  console.log(url);
  axios.get(url)
    .then(function (response) {
      // handle success
      console.log(response);
      populateText(response.data);
      outputContainer.hidden = false;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

/*-------------------------------------------------*/

//Create function to convert kelvin to fahrenheit
/* function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("farenText").innerHTML=((valNum-273.15)*1.8)+32;
} */


//Create function to convert kelvin to celsius
/* function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML=valNum-273.15;
} */

/*-------------------------------------------------*/

//Create function to populate html id's (populateText)
function populateText(obj) {
  //console.log(obj);
  //Variable city creates p element
  //Weather name data is passed as string into p
  cityHeaderText.innerText = "City";
  cityText.innerText = `${obj.name}`;
  //console.log(populateText);

  //Set innerText to header with string
  tempHeaderText.innerText = "Temperature";
   //Set innerText to data + string
  kelvinText.innerText = `${obj.main.temp} K`;
  let farenValue = Math.round((obj.main.temp-273.15)*(9/5)+32);
  farenText.innerText = farenValue + " F";
  let celsiusValue = Math.round((obj.main.temp-273.15));
  celsiusText.innerText = celsiusValue + " C";

  //Set innerText to header with string
  conditionHeaderText.innerText = "Condition";
   //Set innerText to data
  conditionText.innerText = `${obj.weather[0].main}`;

  //Set innerText to header with string
  otherInfoHeaderText.innerText = "Other Information";
  //Set innerText to data
  otherInfoText.innerText = `Feels Like: ${obj.main.feels_like} K`;
}

/*-------------------------------------------------*/

  //Event listener on getWeatherBtn click
     //gets data from api
    //runs populateText function
  getWeatherBtn.addEventListener("click", getWeatherData);
  getWeatherBtn.addEventListener("click", getInputValue);
    //takes zipcode from input
    onLoad()