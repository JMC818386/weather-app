
const url = 'https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={68793cbcde883e015990d3ae3a5f2cee}';

axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  .then(function () {
    // always executed
  });