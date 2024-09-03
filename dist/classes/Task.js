export default class Task {
    //Estado | Atributos
    title = "";
    checked;
    category;
    maxDate;
    taskId;
    constructor(title, category, maxDate) {
        this.taskId = crypto.randomUUID();
        this.setTitle(title);
        this.checked = false;
        this.category = category;
        this.maxDate = maxDate;
    }
    createTaskHTMLElement(currentTask) {
        const taskDiv = document.createElement("div");
        const taskP = document.createElement("p");
        taskP.style.textDecoration = this.getChecked() ? "line-through" : "none";
        taskP.innerText = currentTask.title;
        taskDiv.appendChild(taskP);
        return taskDiv;
    }
    //Comportamento | Metodos
    setTitle(newTitle) {
        if (newTitle.length > 3) {
            this.title = newTitle;
        }
        else {
            this.title = "SEM TITULO";
        }
    }
    getTitle() {
        return this.title;
    }
    getCategory() {
        return this.category;
    }
    getMaxDate() {
        return this.maxDate;
    }
    getID() {
        return this.taskId;
    }
    setChecked(tf) {
        this.checked = tf;
    }
    getChecked() {
        return this.checked;
    }
}
