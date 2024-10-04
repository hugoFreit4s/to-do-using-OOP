import Task from "./Classes/Task.js";
import TasksDatabase from "./Classes/TasksDatabase.js";
import UI from "./Classes/UI.js";

const newTaskBtn = document.getElementById('new_task_btn');
const insertTaskBtn = document.getElementById('add_btn');
const cancelTaskBtn = document.getElementById('cancel_btn');

const inputTaskTitle = document.getElementById('inp') as HTMLInputElement;
const inputTaskDescription = document.getElementById('description_inp') as HTMLInputElement;
const inputTaskCategory = document.getElementById('category') as HTMLInputElement;
const inputTaskDate = document.getElementById('inp_date') as HTMLInputElement;
const db = new TasksDatabase();
db.insertTaskInDatabase(new Task({ title: 'Task teste', category: 'work', maxDate: new Date(), taskDesc: 'Task description' }));
UI.render(db);

const inputModalBackdrop = document.getElementById('inputs_modal_backdrop');
const inputModalContent = document.getElementById('inputs_modal_content');

newTaskBtn?.addEventListener('click', () => {
    inputModalBackdrop!.style.opacity = '1';
    inputModalBackdrop!.style.pointerEvents = 'initial';
});

insertTaskBtn?.addEventListener('click', () => {
    const taskTitle = inputTaskTitle.value;
    const taskCategory = inputTaskCategory.value;
    const taskDate = new Date(inputTaskDate.value);
    const taskDescription = inputTaskDescription.value
    if (taskTitle.length > 20) {

    } else {

        const task = new Task({ title: taskTitle, category: taskCategory, maxDate: taskDate, taskDesc: taskDescription });
        db.insertTaskInDatabase(task);
        UI.render(db);
        inputTaskTitle.value = '';
        inputTaskDescription.value = '';
    }

    closeTaskInsertionModal();
});

cancelTaskBtn?.addEventListener('click', () => {
    closeTaskInsertionModal();
});

function closeTaskInsertionModal() {
    inputModalBackdrop!.style.opacity = '0';
    inputModalBackdrop!.style.pointerEvents = 'none';
}