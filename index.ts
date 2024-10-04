import Task from "./Classes/Task.js";
import TasksDatabase from "./Classes/TasksDatabase.js";
import UI from "./Classes/UI.js";

const insertTaskBtn = document.getElementById('btn');
const inputTaskTitle = document.getElementById('inp') as HTMLInputElement;
const inputTaskDescription = document.getElementById('description_inp') as HTMLInputElement;
const inputTaskCategory = document.getElementById('category') as HTMLInputElement;
const inputTaskDate = document.getElementById('inp_date') as HTMLInputElement;
const container = document.getElementById('app_container');
const db = new TasksDatabase();

insertTaskBtn?.addEventListener('click', () => {
    const taskTitle = inputTaskTitle.value;
    const taskCategory = inputTaskCategory.value;
    const taskDate = new Date(inputTaskDate.value);
    const taskDescription = inputTaskDescription.value

    const task = new Task({ title: taskTitle, category: taskCategory, maxDate: taskDate, taskDesc: taskDescription });
    db.insertTaskInDatabase(task);
    UI.render(db);
    inputTaskTitle.value = '';
    inputTaskDescription.value = '';
});