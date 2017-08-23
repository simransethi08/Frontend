import { EventEmitter } from "events";

class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos= [
               {
                   id:1113456755,
                   text:"Go Swimming",
                   complete:false
               },
               {
                   id:2223456755,
                   text:"Pay Electricity Bill",
                   complete:false
               }
           ]
    }
    getAll(){
        return this.todos;
    }
    // Store Event
    createTodo(text){
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete:false
        });
        this.emit("change"); // raising change event
    }
}

const todoStore = new TodoStore;

// Just want to test todoStore events are working or not
// exposing todoStore globally

window.todoStore = todoStore;

// calling in console
//todoStore.createTodo('New Todo');

export default todoStore;