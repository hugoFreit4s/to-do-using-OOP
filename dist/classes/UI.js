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
        const taskTitleElement = new HTMLBuilder('p').addText(task.taskTitle).addClass('primary-text').build();
        const menuContainer = new HTMLBuilder('div').addText('...').addClass('crud_menu').build();
        const optionsContainer = new HTMLBuilder('div').addClass('menu_options').build();
        const deleteBtn = new HTMLBuilder('div').addText('Del task').build();
        const editBtn = new HTMLBuilder('div').addText('Edit text').build();
        optionsContainer.appendChild(editBtn);
        optionsContainer.appendChild(deleteBtn);
        menuContainer.appendChild(optionsContainer);
        const topContainer = new HTMLBuilder('div').addChildren(taskTitleElement, menuContainer).addClass('top_container').build();
        const taskContainer = taskContainerBuilder.addChildren(topContainer).build();
        container?.appendChild(taskContainer);
    }
}
