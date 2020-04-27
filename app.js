
// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoContainer = document.querySelector('.todo-container');


// EVENT LISTENERS
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteItem);



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
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    
    // we just added the li inside the todoDiv
    todoDiv.appendChild(newTodo);

    // create a CHECK MARK completedbutton inside the todoDiv

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);


    // create a CHECK trash button inside the todoDiv
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);
    // append to the UL todoList

    todoList.appendChild(todoDiv);

    // clear todo input value
    todoInput.value = "";

}

function deleteItem(e){
    // this is for the trash button
    const item = e.target;
    // this item.classList[0] === "trash-btn" means 
    // the our trash-button has 
    // only one  class in the array list
    if(item.classList.contains("trash-btn")){
        const todo = item.parentElement;
        // animation for the trash button
        todo.classList.add('fall');
        // this transitionend listener 
        // is delaying the animation 
        // after running 
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    };

// this is for the CHECK complete button
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}



