import React from "react";
import Todo from "./todo";
import TodoStore from "../stores/todostore";
import * as TodoActions from "../actions/todoactions";

//TodoActions = {
//     CreateAction,
//     DeleteAction,
//     ReceiveAction
// }

export default class Todos extends React.Component {
    constructor() {
        super();
        this.state = {
            value:"",
            todos: TodoStore.getAll(),
            //    // have Todo collection here
            //    todos: [
            //        {
            //            id:1113456755,
            //            text:"Go Shopping",
            //            complete:false
            //        },
            //        {
            //            id:2223456755,
            //            text:"Pay Water Bill",
            //            complete:true
            //        }
            //    ]
        };
    }
    componentWillMount() {
        TodoStore.on("change", () => {
            this.setState({ todos: TodoStore.getAll() });
        })
    }
    handleChange(evt){
        this.setState({value:evt.target.value});
    }
    createTodo(){
        var txt = document.getElementById("todoInput").value;
        TodoActions.createTodo(txt);
        this.setState({value:""});// clearing the tex box
        document.getElementById("todoInput").focus();
    }
    reloadTodos(){
        // propogating actions from Component
        TodoActions.reloadTodos();
    }
    render() {
        const { todos } = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />;
        });

        return (
            <div>
                <button onClick={this.reloadTodos.bind(this)}>
                    Reload
                </button><br /><br />
                <button onClick={this.createTodo.bind(this)}>
                    Create
                </button><br /><br />
                Todo:- <input type="text"
                    value={this.state.value}
                    id="todoInput"
                    onChange={this.handleChange.bind(this)} />
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        );

        // return (
        //     <div id="todosDiv">
        //         <h1>Todos</h1>
        //         <ul>{TodoComponents}</ul>
        //     </div>
        // );
    }
}
