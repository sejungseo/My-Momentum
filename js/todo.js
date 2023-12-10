const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement; // 삭제하고 싶은 li
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 클릭한 toDo의 id가 li.id와 다른 걸 남기고 싶다
  saveToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;

  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj); // newTodo를 toDos에 push
  paintTodo(newTodoObj); // paintTodo에게 newTodo 보내기
  saveToDos();
}

todoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}