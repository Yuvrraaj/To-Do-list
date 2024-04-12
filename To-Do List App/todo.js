function addTask() {
    var taskInput = document.getElementById("taskInput");
    var descriptionInput = document.getElementById("descriptionInput"); 
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "" && descriptionInput.value.trim() !== "") {
        var li = document.createElement("li");

        var taskSpan = document.createElement("span");
        taskSpan.textContent = taskInput.value + ": "; 
        li.appendChild(taskSpan);

        var descSpan = document.createElement("span");
        descSpan.textContent = descriptionInput.value;
        descSpan.className = "task-description"; 
        li.appendChild(descSpan);

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };
        li.appendChild(deleteButton);

        taskList.appendChild(li);

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
