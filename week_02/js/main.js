//the array to hold our tasks
var taskArray = [];

//our save function
var saveTask = function() {

	//get the value of our prompt, the input tag in the HTML
	var newTask = $('#newTask').val();

	//put that value in our array
	taskArray.push(newTask);

	//empty that prompt for the next task
	$('#newTask').val('');

	//call the update tasks functions
	updateTasks();

	//log the task array to make sure everything went alright
	console.log(taskArray);

}

var updateTasks = function() {

	//first, empty the task list
	$('#taskList').empty();

	//this is an "each" loop. It goes through every object in an array, one by one
	//like a for loop that starts in 0 and adds 1 every round
	$(taskArray).each(function(i){

		//log our current task. "This" will call the contents of the current element
		//of the array being looped
		console.log('task ' + i + ': ' + this);

		//make a delete button for our task. Start by creating an HTML element
		var deleteButton = $('<button / >');

		//you can chain many functions in a JS variable using Jquery
		//here we are defining an ID, inserting a text "X" and adding a listener
		//to a click event that will call the delete function
		$(deleteButton).attr('id', 'deleteButton').text('X').on('click', function(e){
			deleteTask(e);
		});

		//make a div to hold the task being considered in this loop
		var newTask = $ ('<div/>');

		//add and ID to it and add a <p> element that constains the task, taken
		//from our array using the "This" variable
		$(newTask).attr('id', i).addClass('task').html('<p>' + this + '</p>');

		//put our delete button in the task div
		$(newTask).append(deleteButton);

		//put our task in the tasklist div
		$('#taskList').append(newTask);

	});

}

var deleteTask = function(e) {
	//get the ID of the parent element to the delete button
	//the parent element is the div where the button sits
	var taskNumber = e.target.parentElement.id;

	//this ID is the place of that task in the array, remember?
	//we defined it in the updateTasks function
	//use the index to take that element out of the array
	taskArray.splice(taskNumber, 1);

	//update tasks again
	updateTasks();

}

var init = function() {
	//make sure JS loaded nicely
	console.log('Let\'s learn Jquery!');

	//add a listener to our add button to call the save function
	$('#addButton').on('click', function(e){
		e.preventDefault();
		saveTask();
	});


}

//Jquery is really good at effects... fade is one of them
//You can call a fade on your entire website by attaching it to the body element.
//You could also call fades in different elements by calling them by ID
var fadeIn = function() {

	//make the vody invisible for starters
	$('body').css("display", "none");

	//fade it in. the value here is milliseconds
	//3000 of them makes 3 seconds.
	$('body').fadeIn(3000);

}

//when document is ready, call the init and fade in functions.
$( document ).ready(function(){

	init();
	fadeIn();

});














