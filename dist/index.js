import Task from "./Classes/Task.js";
import TasksDatabase from "./Classes/TasksDatabase.js";
import UI from "./Classes/UI.js";
const insertTaskBtn = document.getElementById('btn');
const inputTaskTitle = document.getElementById('inp');
const inputTaskCategory = document.getElementById('category');
const inputTaskDate = document.getElementById('inp_date');
const container = document.getElementById('app_container');
const db = new TasksDatabase();
insertTaskBtn?.addEventListener('click', () => {
    const taskTitle = inputTaskTitle.value;
    const taskCategory = inputTaskCategory.value;
    const taskDate = new Date(inputTaskDate.value);
    const task = new Task({ title: taskTitle, category: taskCategory, maxDate: taskDate });
    db.insertTaskInDatabase(task);
    UI.render(db);
});
