let taskInput = document.querySelector("input.form-input");
let mainBtn = document.querySelector("button.main-btn");
let tasksDiv = document.querySelector(".container #tasks");
let span = document.querySelector("span");
console.log(span);
tasksDiv.innerHTML = "";

let allTasks = [];

// Render User inputs
// Create

let renderTask = () => {
    let data = taskInput.value;
    if(data.trim() == ''){
        alert("Please enter valid data!")
    }else{
        singleTask = {
            tsk: data.trim(),
        };
        allTasks.push(singleTask);
        taskInput.value = "";
        getTasks();
        console.log(allTasks);
    }
};

// Delete task from all
// Delete

let deleteTsk = (index) =>{
    allTasks.splice(index , 1);
    getTasks();
}

// Read task from all
// Read

let getTasks = () => {
    tasksDiv.innerHTML = "";
    span.innerText = allTasks.length ;
    allTasks.forEach((element, index) => {
        tasksDiv.innerHTML += `
        <div class="row">
            <div class="caption">
                <h2>${element.tsk}</h2>
            </div>
            <div class="action">
                <button class="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onclick="deleteTsk(${index})" class="del-btn"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    `;
    });
}
mainBtn.addEventListener('click', renderTask);