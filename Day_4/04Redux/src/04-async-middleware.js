import { applyMiddleware, createStore } from "redux";
import axios from "axios"; //promise based HTTP client
import logger from "redux-logger";
import thunk from "redux-thunk";// write action creators that return a function instead of an action
import promise from "redux-promise-middleware";

const initialState = {
    fetching: false,
    fetched: false,
    users: {},
    error: null
}

const reducer = function (state = initialState, action) {
    switch (action.type) 
    {
        case "FETCH_USERS_PENDING": {
            return { ...state, fetching: true }            
        }
        case "FETCH_USERS_REJECTED": {
            return { ...state, fetching: false, error: action.payload }            
        }
        case "FETCH_USERS_FULFILLED": {
            return { ...state, fetching: false, fetched: true, users: action.payload }
        }

        // case "FETCH_USERS_START": {
        //     return { ...state, fetching: true }
        // }
        // case "FETCH_USERS_ERROR": {
        //     return { ...state, fetching: false, error: action.payload }
        // }
        // case "RECEIVE_USERS": {
        //     return { ...state, fetching: false, fetched: true, users: action.payload }
        // }
    }
    return state;
}

const middleware = applyMiddleware(logger,thunk,promise());

const store = createStore(reducer, middleware);

// store.subscribe(()=>{
//     console.log("Store changed ",store.getState());
// })

//store.dispatch({type:"FOO"});

// store.dispatch((dispatch) => {
//     // dispatch({type:"FOO"})
//     // //do something async
//     // dispatch({type:"BAR"})

//     dispatch({ type: "FETCH_USERS_START" });
//     axios.get("https://jsonplaceholder.typicode.com/users")
//         .then((response) => {
//             dispatch({ type: "RECEIVE_USERS", payload: response.data })
//         }).catch((err) => {
//             dispatch({ type: "FETCH_USERS_ERROR", payload: err })
//         })
// })


store.dispatch({
    type:"FETCH_USERS",
    payload:axios.get("https://jsonplaceholder.typicode.com/users")
})
