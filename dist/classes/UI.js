import HTMLBuilder from "./HTMLBuilder.js";
const container = document.getElementById('app_container');
export default class UI {
    static render(database) {
        container.innerHTML = '';
        database.db.forEach(x => {
            this.createTaskElement(x, database);
        });
    }
    static createTaskElement(task, db) {
        const taskContainerBuilder = new HTMLBuilder('div').addClass('task_container');
        const taskTitle = new HTMLBuilder('p').addText(task.taskTitle).build();
        const taskCategory = new HTMLBuilder('div').addText(task.taskCategory).addClass('category_badge').build();
        const delTaskBtn = new HTMLBuilder('button').addText('Delete task').addClass('task-btn').build();
        delTaskBtn.addEventListener('click', () => {
            const outsideModalContainerBuilder = new HTMLBuilder('div').addClass('modal_backdrop');
            const insideModalContainerBuilder = new HTMLBuilder('div').addClass('modal_content');
            const confirmationH1 = new HTMLBuilder('h1').addText('Delete task?').build();
            const confirmationText = new HTMLBuilder('p').addText("This can't be undone.").build();
            const cancelBtn = new HTMLBuilder('button').addText('Cancel').addClass('standard_btn').build();
            const confirmBtn = new HTMLBuilder('button').addText('Delete').addClass('danger_btn').build();
            confirmBtn.addEventListener('click', () => {
                db.deleteTaskFromDatabase(task.taskID);
                this.render(db);
            });
            const modalBtnsContainer = new HTMLBuilder('div').addCss('display: flex; gap: 10px; justify-content: end;').addChildren(cancelBtn, confirmBtn).build();
            const insideModalContainer = insideModalContainerBuilder.addChildren(confirmationH1, confirmationText, modalBtnsContainer).build();
            const outsideModalContainer = outsideModalContainerBuilder.addChildren(insideModalContainer).build();
            taskContainer.appendChild(outsideModalContainer);
        });
        const editTaskBtn = new HTMLBuilder('button').addText('Edit task').addClass('task-btn').build();
        const btnsContainer = new HTMLBuilder('div').addChildren(delTaskBtn, editTaskBtn).build();
        const taskContainer = taskContainerBuilder.addChildren(taskTitle, taskCategory, btnsContainer).build();
        container?.appendChild(taskContainer);
    }
}
