import "./css/style.css";

// VARIABLES
const ul = document.querySelector('ul');
const form = document.querySelector('form');
const input = document.querySelector('form > input');

const todos = [
    {
        text: 'Je suis une todo',
        done: false
    }, 
    {
        text: 'faire du JS',
        done: true
    }
]

// EVENTS
form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let value = input.value;
    if (!value) {
        value = "Todo par defaut";
    }
    input.value = '';
    addTodo(value);
})

// FONCTIONS
const displayTodo = () => {
    const todosNode = todos.map((todo, index) => {
        return createTodoElement(todo, index);
    })
    ul.innerHTML = '';
    ul.append(...todosNode);
}

const addTodo = (text) => {
    todos.push({
        text,
        done: false
    });
    displayTodo();
}

const createTodoElement = (todo, index) => {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerHTML = "Supprimer";
    delBtn.addEventListener('click', (evt) => {
        evt.stopPropagation();
        delTodo(index);
    });
    li.innerHTML = `
    <span class="todo ${ todo.done ? 'done' : '' }"></span>
    <p>${ todo.text }</p>
    `;
    li.addEventListener('click', (evt) => {
        toggleTodo(index);
    })
    li.appendChild(delBtn);
    return li;
}

const toggleTodo  = (index) => {
    todos[index].done = !todos[index].done;
    displayTodo();
}

const delTodo = (index) => {
    todos.splice(index, 1);
    displayTodo();
}

displayTodo();