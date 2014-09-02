var init,
	saveTask,
	updateTaskList,
	deleteTask;

var taskArray = [];

saveTask = function(){
	var taskInput = document.getElementById('newTask');
	var newTask = taskInput.value;

	taskArray.push(newTask);
	taskInput.value = "";

	console.log(taskArray);
	updateTaskList();
}

updateTaskList = function() {
	var taskListHolding = document.getElementById('taskList');
	taskListHolding.innerHTML = "";

	var len = taskArray.length;

	for (var i = 0; i < len; i++) {
		var newTask = document.createElement("div");

		newTask.id = i;
		newTask.className = "task";

		var task = document.createElement("p");
		task.innerText = taskArray[i];

		newTask.appendChild(task);
		//taskListHolding.appendChild(newTask);

		var deleteButton = document.createElement('button');

		deleteButton.id = "deleteButton";
		deleteButton.innerText = "X";

		deleteButton.addEventListener('click', function(e) {
			e.preventDefault();
			deleteTask(e);
		});

		newTask.appendChild(deleteButton);
		taskListHolding.appendChild(newTask);

	}
}

deleteTask = function(e) {
	var taskNumber = e.target.parentElement.id;
	taskArray.splice(taskNumber, 1);
	updateTaskList();
	console.log(taskArray);
}

init = function(){
	console.log("I'm ready!");
	var addButton = document.getElementById('addButton');

	addButton.addEventListener('click', function(e) {
		e.preventDefault();
		saveTask();
	});

}

init();






































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





























