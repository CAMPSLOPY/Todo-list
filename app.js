
// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoContainer = document.querySelector('.todo-container');
const filterOption = document.querySelector('.filter-todo');
const resetBtn = document.querySelector('.clear-all')


// EVENT LISTENERS

todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteItem);
filterOption.addEventListener('click', filterTodo);
resetBtn.addEventListener('click', resetData);
document.addEventListener('DOMcontentLoaded', getTodos);





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

     // save Localtodos(we are saying anything typed
    //  inside the input should be saved on our local storage)
    // but it is optional tho
    // saveLocalTodos(todoInput.value);
    // clear todo input value
    todoInput.value = "";

}

function deleteItem(e){
    // this is for the trash button
    const item = e.target;
    // this item.classList[0] === "trash-btn" means 
    // the our trash-button has 
    // only one  class in the array list
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        // animation for the trash button
        todo.classList.add('fall');
        // this transitionend listener 
        // is delaying the animation 
        // after running 
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

// this is for the CHECK complete button
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filterTodo(e){
const todos = todoList.childNodes;
todos.forEach(function(todo){
//    using switch statement to control the flow of the dropdown 
    switch(e.target.value){
        
        case "all" :
            todo.style.display = "flex";
            break;

            case "completed" :
                if (todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";
                }
                break;

                case "uncompleted" :
                    if (!todo.classList.contains('completed')){
                        todo.style.display = "flex";
                    } else{
                        todo.style.display = "none";
                    }
                    break;
                    
        }
    });

}
// this is just  a basic way to save our input tag 
// and its values in our local storage after perfomance
function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem()('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    } 
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}



function getTodos(){
    let todos;

    if(localStorage.getItem()('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    } 
    // targetting each todo in the array according to the forEach statement.
    todos.forEach(function (todo){
        const todoDiv = document.createElement('div');
    // we gave the DIV a class of todo
    todoDiv.classList.add('todo');

    // lets create the li's inside the todoDiv

    const newTodo = document.createElement('li');
    // this is just to save our work inside our local storage
    newTodo.innerText = todo;
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
    // append the DIV created  to the UL todoList
    todoList.appendChild(todoDiv);
    });
}

function resetData(){
    localStorage.clear();
    window.location.reload();   

}