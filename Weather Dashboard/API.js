$(document).ready(function(){

  function Kotf(kelvin){
    var temp = Math.round((kelvin-273.15)*(9/5)+32);
  }

var api = "&appid=8988ce4587b71b5353869d036e2f9471";
var location = $("#userInput").val.toLowerCase;
var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" + location + api;
console.log(queryURL);

var locations = [];

function todayWeather() {
  var api = "&appid=8988ce4587b71b5353869d036e2f9471";
  var location = $("#userInput").val().toLowerCase();
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" + location + api;
  console.log(queryURL);

  // current day statistics
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {

    var location = $(".locationDiv").append(city.toUppercase(), ", ", state[1]);
    var tempVal = KtoF(response.main.temp);
    var dayTempEl = $(".tempVal").text(" " + tempVal + "farienheight");
    var humidityValEl = $(".humidityVal").text(response.main.humidity + "%");
    var windSpeedValEl = $(".windSpeedVal").text(response.wind.speed);

    $("#todayWincon").attr('src', iconURL);

    var uvIndexURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + API_KEY + "&l"

    $ajax({
      url: weatherDataURL,
      method: "GET"
    }).then(function(response){
      console.log(response)
    
    })
    
    console.log("#userInput");
    $("#selectedLocation").append(
      currentDateDisplay,
      locationDisplay,
      tempDisplay,
      humidityDisplay
    );
  });
};


// attempt to add previous locations to array to later display
function renderLocation() {
  $("#locationDump").empty();
  for (var i = 0; i < locations.length; i++) {
    var a = $("<button>");
    // Adding a class of movie-btn to our button
    a.addClass("location-btn");
    // Adding a data-attribute
    a.attr("data-name", locations[i]);
    // Providing the initial button text
    a.text(locations[i]);
    // Adding the button to the buttons-view div
    $("#locationDump").append(a);
  };
};

// When submit button is clicked, grab location input and place it inside the locations array.
//  Plus call our 2 functions
$("#submitSearch").on("click", function (event) {
  // add all searched items into a local storage
  event.preventDefault();
  var index = $(this).attr("data-id");
  var inputId = $(".location-btn")[index];
  var value = $(inputId).val();
  console.log(inputId, 'inputID');
  console.log(typeof value);
  weatherArray[index] = value;

  event.preventDefault();
  // This line grabs the input from the textbox
  var location = $("#userInput").val().trim();
  // Adding movie from the textbox to our array
  locations.push(location);
  // Calling renderButtons which handles the processing of our movie array
  renderLocation();
  displayLocationInfo();
});
// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".location-btn", displayLocationInfo);
// Calling the renderButtons function to display the initial buttons

function fiveDayForecast() {
  var api = "&appid=8988ce4587b71b5353869d036e2f9471";
  var location = $("#userInput").val().toLowerCase();
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + api;
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    var numDays = 6;

    var index = 4;

    for (i = 1; i < numDays; i++) {
      var UV = response.list[index]
      var UVDisplay = $("<p>").text("Current Date: " + UV);

      var windSpeed = response.list[index]
      var windSpeedDisplay = $(".windSpeedVal").text

      var currentDate = (response.list[index].dt_txt).split("");
      currentDate = currentDate[0];
      console.log("Day " + i + ": " + currentDate)
      var currentDateDisplay = "#currentDateDiv-" + i;
      var dayDateEl = $(currentDateDisplay).text(currentDate);
      //  $("<p>").text("Current Date: " + currentDate);

      var iconVar = "#fiveDayWincon-" + i;
      var iconCode = response.list[index].weather[0].icon;
      var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
      var iconEl = $(iconVar).attr("src", iconURL);

      // var city = (response.city[];
      // var locationDisplay = $("<p>").text("City Name: " + city);

      var tempVar = "#tempDiv-" + i;
      console.log("kelvin " + resonse.list[index].main.temp)
      var tempVal = KtoF(response.list[index].main.temp);
      var dayTempEl = $(tempVar).text(" " + tempVal + "Farienheight");
      // var tempDisplay = $("<p>").text("Current tempature: " + temp);

      var humidityVar = "#humidityDiv-" + i;
      var humidityEl = $(humidityVar).text(" " + response.list[index].main.humidity + i);
      // var humidityDisplay = $("<p>").text("Current Hummidity: " + humidity);

      index = index + 8;

      console.log("#userInput");

      $("#selectedLocation").append(
        currentDateDisplay,
        locationDisplay,
        tempDisplay,
        humidityDisplay,
        windSpeedDisplay,
        UVDisplay
      );
    }
  });
}
})

