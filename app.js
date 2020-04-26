
// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoContainer = document.querySelector('.todo-container');

// EVENT LISTENERS
todoBtn.addEventListener('click', addTodo);

// FUNCTIONS

function addTodo(e){
    // This is prevent the initial inbuilt html behavior of the button
    e.preventDefault();

    // lets create a todoDiv
    const todoDiv = document.createElement('div');
    // we gave the DIV a class of todo
    todoDiv.classList.add('todo');

    // lets create the li's inside the todoDiv

    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    
    // we just added the li inside the todoDiv
    todoDiv.appendChild(newTodo);

    // create a CHECK MARK completedbutton inside the todoDiv

    const completedButton = document.createElement('button');
    completedButton.classList.add('complete-button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completedButton);


    // create a CHECK trash button inside the todoDiv
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);

}

