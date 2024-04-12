function addTask() {
    var taskInput = document.getElementById("taskInput");
    var descriptionInput = document.getElementById("descriptionInput"); // Assuming you have this input for descriptions
    var taskList = document.getElementById("taskList");

    // Check both inputs for values
    if (taskInput.value.trim() !== "" && descriptionInput.value.trim() !== "") {
        var li = document.createElement("li");

        // Create and append the task name span
        var taskSpan = document.createElement("span");
        taskSpan.textContent = taskInput.value + ": "; // Added a colon and space for visual separation
        li.appendChild(taskSpan);

        // Create and append the description span
        var descSpan = document.createElement("span");
        descSpan.textContent = descriptionInput.value;
        descSpan.className = "task-description"; // Optional: for styling purposes
        li.appendChild(descSpan);

        // Create and append the delete button
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        // Clear the input fields
        taskInput.value = "";
        descriptionInput.value = "";
    }
}

var outerDiv = document.getElementById('todo-app')
todo-app.addEventListner('mouseout',function(){
    console.log("Mouse Out");
})
todo-app.addEventListner('mouseover',function(){
    console.log("Mouse Over");
})

var outerDiv = document.getElementById('todo-app');

outerDiv.addEventListener('mouseout', function() {
    console.log("Mouse Out");
});

outerDiv.addEventListener('mouseover', function() {
    console.log("Mouse Over");
});
