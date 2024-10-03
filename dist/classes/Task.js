export default class Task {
    title = "";
    checked;
    category;
    maxDate;
    taskId;
    constructor(task) {
        this.taskId = crypto.randomUUID();
        this.defineTitle = task.title;
        this.checked = false;
        this.category = task.category;
        this.maxDate = task.maxDate;
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
            this.title = "SEM TITULO";
        }
    }
    get taskTitle() {
        return this.title;
    }
    get taskCategory() {
        return this.category;
    }
    // getMaxDate() {
    //     return this.maxDate;
    // }
    get taskID() {
        return this.taskId;
    }
    set isChecked(tf) {
        this.checked = tf;
    }
    get getChecked() {
        return this.checked;
    }
}
