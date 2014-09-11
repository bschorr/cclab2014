
//global variables
var city = '';
var state = '';
var APIKey = '2f35ce84e498c3cd';

var setLocation = function(){
	
	//set the global variable 'city' to the value of .currentCity
	city = $('.currentCity').val()
	
	//if the city is null or it equals '', alert the user and
	//stop running the function.
	if(city == null || city == ''){
		alert('You need to list a city!');
		return;
	};
	
	//set the global variable 'state' to the value of .currentState
	state = $('.currentState').val()
	
	console.log('You want the weather for ' + city + ', ' + state);

	//get the weather using the city and state
	getWeather();

};

//getWeather
var getWeather = function(){

	//define the call URL with your API key, city + state
	var thisURL = "http://api.wunderground.com/api/" + APIKey + "/geolookup/conditions/q/" + state + "/" + city + ".json"

	//run the ajax call and load weather on success
	$.ajax({
		url : thisURL,
		dataType : "jsonp",
		success : function(response) {
			console.log(response);
			loadWeather(response);			
		}
	});

};

var loadWeather = function(response){
	
	//log the response object
	//console.log(response);
	
	//add an error catch
	if(response.response.error){
		alert(response.response.error.description);
		return;
	};
	
	//set variables to elements of your repsonse object
	var responseCity = response.location.city;
	var temp = Math.round(response.current_observation.temp_f) + '°';
	var weather = response.current_observation.weather;
	var icon = response.current_observation.icon_url;
	
	//console.log("The current weather in " + responseCity + " is " + weather + " with a temperature of " + temp);

	//set text of HTML elements to your variables
	$('.temperature').html(temp);
	$('.weather').text(weather);
	$('.weatherIcon').html('<img src="' + icon + '">');

	//set value of city input to response city.
	$('.currentCity').val(responseCity);

	
	
};

//init
var init = function(){
	
	console.log('What\'s the weather?');
	
	
	$('#submit').click(function(e){
		e.preventDefault();
		setLocation();
	});
	
};


//document load listener
$( document ).ready(function() {

    init();
    
});
