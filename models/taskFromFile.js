const fs = require('fs');
const path = require('path');
const pathToRegularTaskFile = path.join(path.dirname(process.mainModule.filename), 'data', 'regularTask.json');


//let toDoList = [];

module.exports = class Task {
    constructor(task){
        this.description = task;
    }

    saveTask() {
        fs.readFile(pathToRegularTaskFile, (error, fileContent)=>{
            let tasks = [];

            if(!error){
                tasks = JSON.parse(fileContent);
            } else {
                console.log(error);
            }

            tasks.push(this);
            fs.writeFile(pathToRegularTaskFile, JSON.stringify(tasks), (error) =>{
                console.log('Error', error);
            });         
           
        });
        //toDoList.push(this);
    }

    static fetchTasks(callBack){
        fs.readFile(pathToRegularTaskFile, (error, fileContent) =>{
            if(error){
                callBack([]);
            }

            callBack(JSON.parse(fileContent));
        });
    }

    static deleteItem(description){
        fs.readFile(pathToRegularTaskFile, (error, fileContent) => {
            let tasks = [];
            if(!error){
                tasks = JSON.parse(fileContent);
            }

            for(let i = 0; i < tasks.length; i++) {
                if(tasks[i].description === description){
                    console.log(tasks[i].description, " deleted");
                    tasks.splice(i, 1);
                    break;
                }
            }

            fs.writeFile(pathToRegularTaskFile, JSON.stringify(tasks), (error) => {
                console.log("Error while trying to delete", error);
            })

        });
    }
}