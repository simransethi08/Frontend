import dispatcher from  "../dispatcher";

export function createTodo(text){
    dispatcher.dispatch({type:"CREATE_TODO",text});
}

// Asynchronous Action
export function reloadTodos(){
    // jquery for ajax call
    // axios - promise based http client for brower and node
    // axios("http://someurl/somedatapoint").then((data)=>{
    //     console.log("go to the data",data);
    // })

    //simulating ajax
    dispatcher.dispatch({ type: "FETCH_TODOS" });
    setTimeout(() => {
        dispatcher.dispatch({
            type: "RECEIVE_TODOS", todos: [
                {
                    id: 8484848484,
                    text: "Do Investment",
                    complete: false
                },
                {
                    id: 6262627272,
                    text: "Watch Movie",
                    complete: true
                },
                {
                    id: 9982388388,
                    text: "Play TT",
                    complete: false
                },
                {
                    id: 78273882823,
                    text: "Go to Gym",
                    complete: false
                },
            ]
        });       
    }, 1000);
}