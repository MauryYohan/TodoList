import "./css/style.css";

// VARIABLES
const ul = document.querySelector('ul');
const form = document.querySelector('form');
const input = document.querySelector('form > input');

const todos = [
    {
        text: 'Je suis une todo',
        done: false,
        editMode: false
    }, 
    {
        text: 'faire du JS',
        done: true,
        editMode: false
    }
]

// EVENTS
form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let value = input.value;
    if (!value)
        value = "Todo par defaut";
    input.value = '';
    addTodo(value);
})

// FONCTIONS
const displayTodo = () => {
    const todosNode = todos.map((todo, index) => {
        if (todo.editMode)
            return createTodoEditElement(todo, index);
        else
            return createTodoElement(todo, index);
    })
    ul.innerHTML = '';
    ul.append(...todosNode);
}

const addTodo = (text) => {
    todos.push({
        text,
        done: false,
        editMode: true
    });
    displayTodo();
}

const createTodoEditElement = (todo, index) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const btnCancel = document.createElement('button');
    const btnSave = document.createElement('button');

    input.type = 'text';
    input.value = todo.text;

    btnSave.innerHTML = "Save";
    btnCancel.innerHTML = "Cancel";

    btnSave.addEventListener("click", (evt) => {
        evt.stopPropagation();
        editTodo(index, input);
    })

    btnCancel.addEventListener('click', (evt) => {
        evt.stopPropagation();
        toggleEditMode(index);
        // Function editTodo()
    });

    li.append(input, btnSave, btnCancel);
    return li;
}

const createTodoElement = (todo, index) => {
    const li = document.createElement('li');
    const editBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    editBtn.innerHTML = "Editer";
    delBtn.innerHTML = "Supprimer";

    editBtn.addEventListener('click', (evt) => {
        evt.stopPropagation();
        console.log("dfgrfhtgh");
        toggleEditMode(index);
        // Function editTodo()
    });
    
    delBtn.addEventListener('click', (evt) => {
        evt.stopPropagation();
        delTodo(index);
    });
    li.innerHTML = `
    <span class="todo ${ todo.done ? 'done' : '' }"></span>
    <p>${ todo.text }</p>
    `;
    // Changer ce <li> 
    li.addEventListener('click', (evt) => {
        toggleTodo(index);
    })
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    return li;
}

const toggleTodo  = (index) => {
    todos[index].done = !todos[index].done;
    displayTodo();
}

const toggleEditMode = (index) => {
    todos[index].editMode = !todos[index].editMode;
    displayTodo();
}

const editTodo = (index, input) => {
    const value = input.value;
    todos[index].text = value;
    toggleEditMode(index);
    displayTodo();
}

const delTodo = (index) => {
    todos.splice(index, 1);
    displayTodo();
}

displayTodo();