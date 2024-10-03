export default class Task {
    private title: string = "";
    private checked: boolean;
    private category: string;
    private maxDate: Date;
    private taskId: string;

    constructor(task: {title: string, category: string, maxDate: Date}) {
        this.taskId = crypto.randomUUID();
        this.defineTitle = task.title;
        this.checked = false;
        this.category = task.category;
        this.maxDate = task.maxDate;
    }

    createTaskHTMLElement(currentTask: Task) {
        const taskDiv = document.createElement("div");
        const taskP = document.createElement("p");
        taskP.style.textDecoration = this.getChecked ? "line-through" : "none";
        taskP.innerText = currentTask.title;

        taskDiv.appendChild(taskP);
        return taskDiv;
    }

    //Comportamento | Metodos
    set defineTitle(newTitle: string) {
        if (newTitle.length >= 4) {
            this.title = newTitle;
        } else {
            this.title = "SEM TITULO"
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

    set isChecked(tf: boolean) {
        this.checked = tf;
    }

    get getChecked() {
        return this.checked;
    }
}