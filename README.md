# Todo App

A simple, interactive todo app built with vanilla JavaScript, HTML, and CSS.  
Users can view starter tasks, add new tasks through a popup form, and manage task completion with a clean card-based interface.

## Functionality

- Displays an initial list of todo items on page load
- Opens and closes an Add Todo popup modal
- Adds a new todo item using form input (task name and date)
- Generates unique IDs for new todos using uuid
- Toggles task completion state with a checkbox
- Deletes todo items
- Validates form inputs with a FormValidator class (error states + submit button state)

## Technology

- HTML5 for structure
- CSS3 with modular block files for styling
- JavaScript (ES6 modules, classes, DOM manipulation)
- UUID via jspm CDN import
- Component-based architecture:
  - Todo item rendering and behavior in [components/Todo.js](components/Todo.js)
  - Form validation in [components/FormValidator.js](components/FormValidator.js)
  - App initialization and event wiring in [pages/index.js](pages/index.js)
  - Static data and validation config in [utils/constants.js](utils/constants.js)

## Deployment

This project is deployed on GitHub Pages:

- https://dylan-tex.github.io/se_project_todo-app/
