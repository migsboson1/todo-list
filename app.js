// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// EVENT LISTENERS
todoButton.addEventListener('click', addtoDo);
todoList.addEventListener('click', removeItem);


// FUNCTIONS
function addtoDo(event) {
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    const newtoDo = document.createElement('li');
    newtoDo.innerText = todoInput.value;
    newtoDo.classList.add('todo-item');
    todoDiv.appendChild(newtoDo);
    todoInput.value = "";
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class= "fas fa-check"> <i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class= "fas fa-trash"> <i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);

}


function removeItem(e) {
    e.preventDefault();
    const itemClicked = e.target;
    if (itemClicked.classList[0] === "trash-btn") {
        const todo = itemClicked.parentElement;
        todo.classList.add('trash');
        todo.addEventListener('transitionend', function(){ 
            todo.remove();
        });
    }
    if (itemClicked.classList[0] === "complete-btn") {
        const todo = itemClicked.parentElement;
        todo.classList.toggle('fade');
    }
}
