### Weather App Project

## Concept
- Use and external API
- Retrieve weather data
- Prompt user to enter zip code
- If successful: Display current weather information for that location
- If error: display a friendly message that zipcode is not found

## User Journey
- Arrives at landing page
- Enters 5 digit zip code into input field
- Clicks button to retrieve weather data
- isplayed on screen:
	- City name
	- Current Temperature
		- Kelvin
		- Fahrenheit
		- Celsius
	- Current Condition
		- Sunny/Rainy/Snowing/etc.
	- Other info
		- Image

//Start Program
    START

    INIT getWeather function

    INPUT user types in zip code
    INPUT user clicks getWeatherBtn

    GET weather data from API
    CALCULATE kelvin, fahrenheit, celsius
    DISPLAY city name
    DISPLAY temperature in kelvin, fahrenheit, celsius
    DISPLAY condition
    DISPLAY other info

    END
//End Program

## HTML Elements
**Page**
- `<container>` entire app
“appContainer”
**Organism**
**Molecule**
- `<div>` top input area “inputContainer”
- `<input>` field for zip code
- `<button>` get weather
**Molecule**
- `<div>` displayed elements “outputContainer”
- `<div>` city data “cityContainer”
- `<div>` temperature data “tempContainer”
- `<div>` condition data“conditionContainer”
- `<div>` other info data“otherInfoContainer”
**Atoms**
- `<h2>` data headers
- `<p>` data text


## Objects
- getWeatherBtn
- cityHeader
- cityText
- tempHeader
- kelvinText
- farenText
- celsiusText
- conditionHeader
- conditionText
- otherHeader
- otherImage

## Functions
- init()
- getData (.then .catch)
- displayData
