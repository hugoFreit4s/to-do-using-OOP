export default class TasksDatabase {
    database;
    constructor() {
        this.database = [];
    }
    insertTaskInDatabase(task) {
        this.database.push(task);
    }
    deleteTaskFromDatabase(taskId) {
        const newDb = [];
        this.database.filter(x => {
            if (x.taskID !== taskId)
                newDb.push(x);
        });
        this.database = [...newDb];
    }
    get db() {
        return this.database;
    }
}
