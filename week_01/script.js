//Declaring the variables that will hold our functions
var init,
	saveTask,
	updateTaskList,
	deleteTask;

//Declaring the array that will hold the different tasks
var taskArray = [];

//function to take the value from our prompt and putting it into a JS array.
saveTask = function(){
    //get the input prompt element. it's an "input" tag in the HTML with an ID of newtask.
	var taskInput = document.getElementById('newTask');
    
    //get the value it contains, i.e. what the user type in it.
	var newTask = taskInput.value;

    //put that into our array.
	taskArray.push(newTask);
    
    //Make sure the value is set back to nothing once we have it in our array
	taskInput.value = "";

	console.log(taskArray);
    
    //call the update tasklist function
	updateTaskList();
}

//Function to update the tasklist each time a new task is saved.
updateTaskList = function() {
    
    //get the div where our tasks will live
	var taskListHolding = document.getElementById('taskList');
	
    //make sure that div starts empty
    taskListHolding.innerHTML = "";

    //make a variable to hold the size of our array.
	var len = taskArray.length;

    //loop through each eleement of our array.
	for (var i = 0; i < len; i++) {
        
        //create a div to hold each saved task
		var newTask = document.createElement("div");

        //give that div an ID of i
		newTask.id = i;
        
        //give it a class of task to facilitate styling later
		newTask.className = "task";

        //create a p element that will later be inserted into our task div
		var task = document.createElement("p");
        
        //put the text of our task in this p element
		task.innerText = taskArray[i];

        //put the p element inside our task div
		newTask.appendChild(task);

        //create a delete button for each task
		var deleteButton = document.createElement('button');

        //give it and id of deleteButton for styling
		deleteButton.id = "deleteButton";
        
        //put a big X in it, as it is a good universal standard for "delete"
		deleteButton.innerText = "X";

        //add an event listener to it and attach a function to that event.
		deleteButton.addEventListener('click', function(e) {
			e.preventDefault();
			deleteTask(e);
		});

        //put the delete button inside our task div
		newTask.appendChild(deleteButton);
        
        //put our task div inside the holding div for all tasks
		taskListHolding.appendChild(newTask);

	}
}

//function for deleting individual tasks
deleteTask = function(e) {
    //when the event happens and the function is called, get the ID of the task
    //the task holds our button.. It is therefore its "parent element"
	var taskNumber = e.target.parentElement.id;
    
    //delete 1 element from that position in the array
	taskArray.splice(taskNumber, 1);
    
    //call the updateTaskList function again, which will now reflect the absence
    //of the deleted task.
	updateTaskList();
	console.log(taskArray);
}

//our kickoff function, called as soon as the JS is loaded.
init = function(){
    //let us know the JS loaded correctly.
	console.log("I'm ready!");
    
    //create a variable for the add task button
	var addButton = document.getElementById('addButton');

    //attach a listener to the addButton. Every time the event happens, call saveTask() function.
	addButton.addEventListener('click', function(e) {
		e.preventDefault();
		saveTask();
	});

}

//Here is init being called and initiating our app.
init();

/*All the code down here is code that we went through in class
to understand the basics of Javascript. it doesn't do anything
in particular, but serves as a good reminder of the basics of
working with JS*/

/*console.log("i'm a pretty coder");

var text = "awesome coding skills";
console.log(text);

var numberOne = 23;
var numberTwo = 46;

console.log(numberOne+numberTwo);

console.log(text+numberOne);

var textTwo = "46";

console.log(numberTwo === textTwo);

var myArray = [];

for (var i = 0; i < 8; i++) {
	myArray[i] = i*3;
}

console.log(myArray);

var header = document.getElementById('ToDoList');
header.style.color = "red";

var myFunction = function(loops) {

	var node = document.createElement("p");
	var myDiv = document.getElementById('ToDoList');

	for (var i = 0; i < loops; i++){
		var textNode = document.createTextNode(i*3 + " ");
		node.appendChild(textNode);
	}

	myDiv.appendChild(node);
}

myFunction(1000);*/





























