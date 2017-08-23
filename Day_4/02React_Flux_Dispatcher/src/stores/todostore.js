import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

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

    handleActions(action){
        console.log('TodoStore received an action ',action);
        switch(action.type){
            case "CREATE_TODO":{
                this.createTodo(action.text);
                break;
            }
        }
    }
}

const todoStore = new TodoStore;

// Just want to test todoStore events are working or not
// exposing todoStore globally
//window.todoStore = todoStore;

//dispatcher.register - to register listner to the dispatcher - todoStore
//dispatcher.dispatch - this will be ued to dispatch actions

dispatcher.register(todoStore.handleActions.bind(todoStore));

window.dispatcher = dispatcher;
// at browser's console
//dispatcher.dispatch({type:"CRETE_TODO",text:"Do investment"})

export default todoStore;