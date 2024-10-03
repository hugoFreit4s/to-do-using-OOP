import Task from "./Classes/Task.js";
import TasksDatabase from "./Classes/TasksDatabase.js";
import UI from "./Classes/UI.js";

const insertTaskBtn = document.getElementById('btn');
const inputTaskTitle = document.getElementById('inp') as HTMLInputElement;
const inputTaskCategory = document.getElementById('category') as HTMLInputElement;
const inputTaskDate = document.getElementById('inp_date') as HTMLInputElement;
const container = document.getElementById('app_container');
const db = new TasksDatabase();

const t1 = new Task({title: 'teste 1', category: 'work', maxDate: new Date()})
const t2 = new Task({title: 'teste 2', category: 'work', maxDate: new Date()})

insertTaskBtn?.addEventListener('click', () => {
    const taskTitle = inputTaskTitle.value;
    const taskCategory = inputTaskCategory.value;
    const taskDate = new Date(inputTaskDate.value);

    const task = new Task({title: taskTitle, category: taskCategory, maxDate: taskDate});
    db.insertTaskInDatabase(task);
    UI.render(db);
});