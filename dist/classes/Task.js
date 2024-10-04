export default class Task {
    title = "";
    checked;
    category;
    maxDate;
    taskId;
    description;
    constructor(task) {
        this.taskId = crypto.randomUUID();
        this.defineTitle = task.title;
        this.checked = false;
        this.category = task.category;
        this.maxDate = task.maxDate;
        this.defineDescription = task.taskDesc;
    }
    createTaskHTMLElement(currentTask) {
        const taskDiv = document.createElement("div");
        const taskP = document.createElement("p");
        taskP.style.textDecoration = this.getChecked ? "line-through" : "none";
        taskP.innerText = currentTask.title;
        taskDiv.appendChild(taskP);
        return taskDiv;
    }
    //Comportamento | Metodos
    set defineTitle(newTitle) {
        if (newTitle.length >= 4) {
            this.title = newTitle;
        }
        else {
            this.title = "No title";
        }
    }
    get taskTitle() {
        return this.title;
    }
    get taskCategory() {
        return this.category;
    }
    get taskMaxDate() {
        return this.maxDate;
    }
    get taskID() {
        return this.taskId;
    }
    set isChecked(tf) {
        this.checked = tf;
    }
    get getChecked() {
        return this.checked;
    }
    get taskDescription() {
        if (this.description !== undefined && this.description.trim().length > 0) {
            return this.description;
        }
        else {
            return "No description";
        }
    }
    set defineDescription(description) {
        this.description = description !== undefined && description.length > 0 ? description : "No description";
    }
}
