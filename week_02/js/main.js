var taskArray = [];

var saveTask = function(){
	
	var newTask =  $('#newTask').val();

    taskArray.push(newTask);
 	
    $('#newTask').val('');
 
	updateTasks();
	
    console.log(taskArray);	
};

var updateTasks = function(){

	$('#taskList').empty();

	$(taskArray).each(function(i){
		
		console.log('task ' + i + ': ' + this);
		
		var deleteButton = $('<button / >');
		$(deleteButton).attr('id', 'deleteButton').text('X').on('click', function(e){
			deleteTask(e);	
		});
		
		var newTask = $('<div/>');
  		$(newTask).attr('id', i).addClass('task').html('<p>' + this + '</p>');
		$(newTask).append(deleteButton);
		
		$('#taskList').append(newTask);
		
	});

};

var deleteTask = function(e){
	
	var taskNumber = e.target.parentElement.id;
	
    taskArray.splice(taskNumber, 1);
 
    updateTasks();
	
};


var init = function(){
	console.log('Let\'s learn Javascript!');
	
	$('#addButton').on('click', function(e){
		e.preventDefault();
		saveTask();
	});
	
};

$( document ).ready(function() {

    init();
    
});