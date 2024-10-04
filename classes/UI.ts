import HTMLBuilder from "./HTMLBuilder.js";
import Task from "./Task.js";
import TasksDatabase from "./TasksDatabase.js";

const container = document.getElementById('app_container');
export default class UI {
    static render(database: TasksDatabase) {
        container!.innerHTML = '';
        database.db.forEach(x => {
            this.createTaskElement(x, database);
        });
    }

    static createTaskElement(task: Task, db: TasksDatabase) {
        const taskContainerBuilder = new HTMLBuilder('div').addClass('task_container');
        const taskTitle = new HTMLBuilder('p').addText(task.taskTitle).addClass('title').build();
        const taskDescription = new HTMLBuilder('p').addText(task.taskDescription).addClass('description').build();
        const delIcon = new HTMLBuilder('div').addText('Del Task').addClass('icon').build();
        delIcon.addEventListener('click', () => {
            outsideDeleteModalContainer.style.opacity = '1';
            outsideDeleteModalContainer.style.pointerEvents = 'initial';
        });
        const editIcon = new HTMLBuilder('div').addText('Edit Task').addClass('icon').build();
        editIcon.addEventListener('click', () => {
            outsideEditModalContainer.style.opacity = '1';
            outsideEditModalContainer.style.pointerEvents = 'initial';
        });
        const threeDots = new HTMLBuilder('div').addClass('del_popup').addText('...').addChildren(delIcon, editIcon).build();
        threeDots.addEventListener('click', () => {
            delIcon.style.opacity = delIcon.style.opacity == '1' ? '0' : '1';
            delIcon.style.pointerEvents = delIcon.style.pointerEvents == 'initial' ? 'none' : 'initial';
            editIcon.style.opacity = editIcon.style.opacity == '1' ? '0' : '1';
            editIcon.style.pointerEvents = editIcon.style.pointerEvents == 'initial' ? 'none' : 'initial';
        });
        const titleAndDotsContainer = new HTMLBuilder('div').addChildren(taskTitle, threeDots).addClass('title_and_dots').build();
        const topContainerTask = new HTMLBuilder('div').addChildren(titleAndDotsContainer, taskDescription).addClass('top_container_task').build();
        const taskCategory = new HTMLBuilder('div').addText(task.taskCategory).build();
        const taskCategoryContainer = new HTMLBuilder('div').addChildren(taskCategory).addClass('category_badge').build();
        const delTaskBtn = new HTMLBuilder('button').addText('Delete task').addClass('task-btn').build();
        delTaskBtn.addEventListener('click', () => {
        });

        /**Delete modal ******************************************/
        const outsideDeleteModalContainerBuilder = new HTMLBuilder('div').addClass('modal_backdrop');
        const insideDeleteModalContainerBuilder = new HTMLBuilder('div').addClass('modal_content');
        const deleteConfirmationH1 = new HTMLBuilder('h1').addText('Delete task?').build();
        const deleteConfirmationText = new HTMLBuilder('p').addText("This can't be undone.").build();
        const hrElement = new HTMLBuilder('hr').build();
        const deleteModalTexts = new HTMLBuilder('div').addChildren(deleteConfirmationH1, hrElement, deleteConfirmationText).addClass('modal-text').build();
        const cancelDeleteBtn = new HTMLBuilder('button').addText('Cancel').addClass('standard_btn').build();
        const confirmDeleteBtn = new HTMLBuilder('button').addText('Delete').addClass('danger_btn').build();
        confirmDeleteBtn.addEventListener('click', () => {
            db.deleteTaskFromDatabase(task.taskID);
            this.render(db);
        });
        const deleteModalBtnsContainer = new HTMLBuilder('div').addClass('modal_btns').addChildren(cancelDeleteBtn, confirmDeleteBtn).build();
        const insideDeleteModalContainer = insideDeleteModalContainerBuilder.addChildren(deleteModalTexts, deleteModalBtnsContainer).build();
        const outsideDeleteModalContainer = outsideDeleteModalContainerBuilder.addChildren(insideDeleteModalContainer).build();
        cancelDeleteBtn.addEventListener('click', () => {
            outsideDeleteModalContainer.style.opacity = '0';
            outsideDeleteModalContainer.style.pointerEvents = 'none';
        });
        /******************************************************* */

        const editTaskBtn = new HTMLBuilder('button').addText('Edit task').addClass('task-btn').build();
        editTaskBtn.addEventListener('click', () => {
            outsideEditModalContainer.style.opacity = '1';
            outsideEditModalContainer.style.pointerEvents = 'initial';
        });

        /**Edit modal ******************************************/
        const outsideEditModalContainerBuilder = new HTMLBuilder('div').addClass('modal_backdrop');
        const insideEditModalContainerBuilder = new HTMLBuilder('div').addClass('modal_content');
        const inputH1 = new HTMLBuilder('h1').addText('Insert the new task name:').addCss('text-align: left;').build();
        const newTaskNameInp = new HTMLBuilder('input').build() as HTMLInputElement;
        const inpContainer = new HTMLBuilder('div').addCss('text-align: left;').addChildren(inputH1, newTaskNameInp).build();
        const cancelEditBtn = new HTMLBuilder('button').addText('Cancel').addClass('standard_btn').build();
        cancelEditBtn.addEventListener('click', () => {
            outsideEditModalContainer.style.opacity = '0';
            outsideEditModalContainer.style.pointerEvents = 'none';
        });
        const confirmEditBtn = new HTMLBuilder('button').addText('Edit').addClass('danger_btn').build();
        confirmEditBtn.addEventListener('click', () => {
            task.defineTitle = newTaskNameInp.value;
            this.render(db);
        });
        const editModalBtnsContainer = new HTMLBuilder('div').addClass('modal_btns').addChildren(cancelEditBtn, confirmEditBtn).build();
        const insideEditModalContainer = insideEditModalContainerBuilder.addID('inside-edit-modal').addChildren(inpContainer, editModalBtnsContainer).build();
        const outsideEditModalContainer = outsideEditModalContainerBuilder.addChildren(insideEditModalContainer).build();
        /******************************************************* */

        const btnsContainer = new HTMLBuilder('div').addChildren(delTaskBtn, editTaskBtn).build();
        const taskContainer = taskContainerBuilder.addChildren(topContainerTask, taskCategoryContainer, outsideDeleteModalContainer, outsideEditModalContainer).build();
        container?.appendChild(taskContainer);
    }
}