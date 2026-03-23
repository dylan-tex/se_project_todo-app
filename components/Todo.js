class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
  }

  _setupEventListeners() {
    // Set up the delete button handler
    this._todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
    });

    // Set up the checkbox change handler
    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;

    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);
    const todoNameEl = this._todoElement.querySelector(".todo__name");

    const todoDate = this._todoElement.querySelector(".todo__date");

    // assign to instance property so _setupEventListeners can use it
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this._data.name;
    // ToDO Implement Dates
    todoDate.textContent = this._data.dueDate;

    this._generateCheckboxEl();
    this._setupEventListeners();

    return this._todoElement;
  }
}

export default Todo;
