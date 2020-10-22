// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// EVENT LISTENERS
todoButton.addEventListener('click', addtoDo);
todoList.addEventListener('click', removeItem);


// FUNCTIONS
function addtoDo(event) {
    // prevent form from submitting
    event.preventDefault();
    // toDo Div that will hold the new todoItem
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // create new to do List item from the input
    const newtoDo = document.createElement('li');
    newtoDo.innerText = todoInput.value;
    newtoDo.classList.add('todo-item');
    todoDiv.appendChild(newtoDo);
    // remove the value inside the input
    todoInput.value = "";
    // Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class= "fas fa-check"> <i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class= "fas fa-trash"> <i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // append to do
    todoList.appendChild(todoDiv);

}


function removeItem(e) {
    // Stop browser from refreshing
    e.preventDefault();
    // Saved the node of the item that was clicked
    const itemClicked = e.target;
    // Condition to check whether the item clicked was the trash button.
    // If it was then add a class that has some animation, wait until the
    // transition of the animation is over, i.e. the event listener
    // with the transitionend event and then remove node.
    if (itemClicked.classList[0] === "trash-btn") {
        // Remove the whole div, which is the parent node, not just
        // the value inside the div.
        const todo = itemClicked.parentElement;
        todo.classList.add('trash');
        todo.addEventListener('transitionend', function(){ 
            todo.remove();
        });
    }
    // If the item clicked is the check button then add the fade class 
    if (itemClicked.classList[0] === "complete-btn") {
        const todo = itemClicked.parentElement;
        todo.classList.toggle('fade');
    }
}