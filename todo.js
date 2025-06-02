let todoMainContainer = document.getElementById("todo-main-container");
let addBtnEle = document.getElementById("addEleId");

let todoList = [{
        text: "learn FRONTEND",
        uniqueNo: 1,
    },
    {
        text: "learn SQL",
        uniqueNo: 2,
    },
    {
        text: "learn BACKEND",
        uniqueNo: 3,
    }
];

let todoCnt = todoList.length;

function ontodoStatesChange(checkboxId, labelId) {
    let labelEle = document.getElementById(labelId);
    labelEle.classList.toggle('checked');
}

function createTodoItemsContainer(todo) {
    let todoId = "todo" + todo.uniqueNo;
    let checkboxId = "check" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;

    let todoContainerEle = document.createElement("li");
    todoContainerEle.classList.add("d-flex", "flex-row", "align-items-center", "mb-2");
    todoContainerEle.id = todoId;
    todoMainContainer.appendChild(todoContainerEle);

    let inputEle = document.createElement("input");
    inputEle.type = "checkbox";
    inputEle.id = checkboxId;
    inputEle.classList.add("input-tickbox", "mr-2");
    todoContainerEle.appendChild(inputEle);

    inputEle.onclick = function() {
        ontodoStatesChange(checkboxId, labelId);
    };

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "justify-content-between", "align-items-center", "flex-grow-1");
    todoContainerEle.appendChild(labelContainer);

    let labelEle = document.createElement("label");
    labelEle.textContent = todo.text;
    labelEle.setAttribute("for", checkboxId);
    labelEle.id = labelId;
    labelContainer.appendChild(labelEle);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon", "ml-3");
    deleteIcon.style.cursor = "pointer";
    labelContainer.appendChild(deleteIcon);

    deleteIcon.onclick = function() {
        todoMainContainer.removeChild(todoContainerEle);
        todoList = todoList.filter(item => item.uniqueNo !== todo.uniqueNo);
    };
}


function ontodoAdd() {
    let userInputEle = document.getElementById("inputId");
    let userInputVal = userInputEle.value;

    if (userInputVal === "") {
        alert("enter the valid text");
        return;
    }
    todoCnt++;
    let newTodo = {
        text: userInputVal,
        uniqueNo: todoCnt
    };
    todoList.push(newTodo);
    createTodoItemsContainer(newTodo);
    userInputEle.value = "";
}

addBtnEle.onclick = function() {
    ontodoAdd();
};

for (let todo of todoList) {
    createTodoItemsContainer(todo);
}