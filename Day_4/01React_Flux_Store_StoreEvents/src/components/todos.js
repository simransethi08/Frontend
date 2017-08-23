import React from "react";
import Todo from "./todo";
import TodoStore from "../stores/todostore";

export default class Todos extends React.Component {
    constructor() {
        super();
        this.state = {    
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
    componentWillMount(){
        TodoStore.on("change", ()=>{
            this.setState({todos:TodoStore.getAll()});
        })
    }
    render() {
        const { todos } = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />;
        });

        return (
            <div id="todosDiv">
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        );
    }
}
