// 修改提示
// 1. 變數名稱、函式名稱
// 2. 函式只做一件事
// 3. 簡化 if 邏輯

let todoData = []; // 1. 變數名稱、函式名稱

const submitButton = document.getElementById("todo-btn"); // 1. 變數名稱、函式名稱
submitButton.addEventListener("click", () => todos());

// 2. 函式只做一件事
function addTodoList() {
  const todoInput = document.getElementById("todo-input").value;
  const todoSelect = document.getElementById("todo-status").value;
  todo.push({name: todoInput, status: todoSelect});
}
function renderTodoList() {
  const todoListContainer = document.getElementById("todo-list");
  let html = "";
  // 3. 簡化 if 邏輯
  todo.forEach((item) => {
    switch (item.status) {
      case "done":
        html += `<li><del>${item.name}</del></li>`;
        break;
      case "undone":
        html += `<li><b>${item.name}</b> <input type="checkbox"></li>`;
        break;
      case "doing":
        html += `<li>${item.name} <input type="checkbox"></li>`;
        break;
    }
    todoListContainer.innerHTML = html;
  });
}
function todos() {
  addTodoList();
  renderTodoList();
}
