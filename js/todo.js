const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('button');
  button.innerText = '\u00A0  ❎';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

// function sayHello(item) {
//     console.log("this is the turn of", item);
// }

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  // parsedToDos.forEach(sayHello); // 위와 같이 사용한 "sayHello" 함수, 대신 아래 화살표 함수로 축약할수 있다
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
