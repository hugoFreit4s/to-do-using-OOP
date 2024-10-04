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
        const taskDescriptionElement = new HTMLBuilder('p').addText(task.taskDescription).addClass('secondary-text').build();
        const topTexts = new HTMLBuilder('div').addChildren(taskTitleElement, taskDescriptionElement).addClass('top-texts-container').build();
        const menuBtn = new HTMLBuilder('div').addText('...').addClass('crud_menu').build();
        menuBtn.addEventListener('click', () => {
            optionsContainer.style.opacity = optionsContainer.style.opacity == '1' ? '0' : '1';
            optionsContainer.style.pointerEvents = optionsContainer.style.pointerEvents == 'initial' ? 'none' : 'initial';
        });
        const menuContainer = new HTMLBuilder('div').addClass('crud_menu_container').addChildren(menuBtn).build();
        const optionsContainer = new HTMLBuilder('div').addClass('menu_options').build();
        const deleteBtn = new HTMLBuilder('div').addText('Del task').addClass('menu-texts').addCss('color: red;').build();
        const editBtn = new HTMLBuilder('div').addText('Edit text').addClass('menu-texts').build();
        optionsContainer.appendChild(editBtn);
        optionsContainer.appendChild(deleteBtn);
        menuBtn.appendChild(optionsContainer);
        const categoryElement = new HTMLBuilder('div').addText(task.taskCategory).build();
        const categoryContainer = new HTMLBuilder('div').addClass('category-container').addChildren(categoryElement).build();
        const hrElement = new HTMLBuilder('hr').addCss('width: 90%;').build();
        const checkTextElement = new HTMLBuilder('p').addText('Check task').build();
        const checkboxElement = new HTMLBuilder('input').build();
        checkboxElement.type = 'checkbox';
        checkboxElement.checked = task.isTaskChecked ? true : false;
        taskTitleElement.style.textDecoration = task.isTaskChecked ? 'line-through' : 'none';
        checkboxElement.addEventListener('click', () => {
            const status = checkboxElement.checked ? true : false;
            task.defineCheckedStatus = status;
            console.log(task.isTaskChecked);
            this.render(db);
        });
        const checkboxContainer = new HTMLBuilder('div').addClass('checkbox_container').addChildren(checkTextElement, checkboxElement).build();
        const bottomContainer = new HTMLBuilder('div').addChildren(checkboxContainer).addClass('tb_container').build();
        const topContainer = new HTMLBuilder('div').addChildren(topTexts, categoryContainer, menuContainer).addClass('tb_container').build();
        const taskContainer = taskContainerBuilder.addChildren(topContainer, hrElement, bottomContainer).build();
        container?.appendChild(taskContainer);
    }
}
