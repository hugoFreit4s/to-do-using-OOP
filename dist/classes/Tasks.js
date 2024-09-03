import Task from "./Task.js";
let database = [];
const appContainer = document.getElementById("app");
const addTaskBtn = document.getElementById("btn");
const inp = document.getElementById("inp");
const select = document.getElementById("select");
const inpDate = document.getElementById("inp_date");
export default class Tasks {
    constructor() {
        addTaskBtn?.addEventListener("click", () => {
            const date = new Date(inpDate.value);
            const task = new Task(inp.value, select.value, date);
            inp.value = "";
            database.push(task);
            this.createTask();
        });
    }
    createTask() {
        appContainer.innerHTML = "";
        database.forEach((x) => {
            //Elementos HTML da task que ficam dentro da div da task
            const div = x.createTaskHTMLElement(x);
            //Elementos HTML da task que ficam fora da div da task
            const btnsDiv = document.createElement("div");
            const taskCheckbox = document.createElement("input");
            taskCheckbox.type = "checkbox";
            taskCheckbox.checked = x.getChecked();
            taskCheckbox.addEventListener("click", () => {
                this.setSituation(x.getID());
                console.log(x.getChecked());
            });
            const editTaskBtn = document.createElement("button");
            editTaskBtn.innerText = "Editar";
            editTaskBtn.addEventListener("click", () => {
                const editDiv = document.createElement("div");
                const editInp = document.createElement("input");
                const confirmEditBtn = document.createElement("button");
                editDiv.appendChild(editInp);
                editDiv.appendChild(confirmEditBtn);
                btnsDiv.appendChild(editDiv);
                confirmEditBtn.innerText = "Ok!";
                confirmEditBtn.addEventListener("click", () => {
                    this.editTask(x.getID(), editInp.value);
                    setTimeout(() => {
                        btnsDiv?.removeChild(editDiv);
                    }, 1);
                });
            });
            const removeTaskBtn = document.createElement("button");
            removeTaskBtn.innerText = "Remover";
            removeTaskBtn.addEventListener("click", () => {
                this.deleteTask(x.getID());
            });
            btnsDiv?.appendChild(taskCheckbox);
            btnsDiv?.appendChild(removeTaskBtn);
            btnsDiv?.appendChild(editTaskBtn);
            appContainer?.appendChild(div);
            appContainer?.appendChild(btnsDiv);
        });
    }
    deleteTask(id) {
        database = database.filter((x) => x.getID() !== id);
        this.createTask();
    }
    editTask(id, newTitle) {
        database.map((x) => {
            if (x.getID() === id) {
                x.setTitle(newTitle);
            }
        });
        this.createTask();
    }
    setSituation(id) {
        database.forEach((x) => {
            if (x.getID() === id) {
                x.setChecked(!x.getChecked());
            }
        });
        this.createTask();
    }
    getDatabase() {
        return database;
    }
}
