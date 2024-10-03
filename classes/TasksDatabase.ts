import Task from "./Task.js";

export default class TasksDatabase {
    private database: Array<Task>;
    constructor() {
        this.database = [];
    }

    insertTaskInDatabase(task: Task): void {
        this.database.push(task);
    }

    deleteTaskFromDatabase(taskId: string): void {
        const newDb: Array<Task> = []
        this.database.filter(x => {
            if (x.taskID !== taskId) newDb.push(x);
        });
        this.database = [...newDb];
    }

    get db(): Array<Task> {
        return this.database;
    }
}