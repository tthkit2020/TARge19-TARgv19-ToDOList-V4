let toDoList = [];

module.exports = class Task {
    constructor(task){
        this.description = task;
    }

    saveTask() {
        toDoList.push(this);
    }

    static fetchTasks(){
        return toDoList;
    }
}