let todos = [];

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    if (todoInput.value === '' || todoDate.value ==='') {
        alert('Please fill in both the todo item and date.');
    }else{
        const newTodo= {
            task:todoInput.value,
            date:todoDate.value
        };

        todos.push(newTodo);

        renderTodos();

        todoInput.value='';
        todoDate.value='';
    }
}

function renderTodos () {
    const todoList = document.getElementById('todo-list');

    todoList.innerHTML = '';

    todos.forEach((todo, _) => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${todo.task} <span class="text-sm text-gray-500">(${todo.date})</span></p>
            <hr/>
        </li>`;
    });
}

function removeTodo() {
    todos= [];

    renderTodos();
}

function sortByDateNew() {
  todos.sort((a, b) => new Date(a.date) - new Date(b.date));
  renderTodos();
}

function sortByDateOld() {
  todos.sort((a, b) => new Date(b.date) - new Date(a.date));
  renderTodos();
}
