import { combineReducers, createStore } from "redux";

const userReducer = function(state = {},action){
    switch(action.type){
        case "CHANGE_NAME":{
            // store is immutable
            //state.name = action.payload;
            //newState.name = action.payload;
            state = {...state,name:action.payload}
            break;
        }
        case "CHANGE_AGE":{
            state = {...state,age:action.payload}
        }
    }
    return state;
    //return newState;
}

const tweetsReducer = function (state = [],action){
    switch(action.type){
        case "ADD_TWEET":{
            return state.concat({
                id:Date.now(),
                text:action.payload
            });
        }
    }
    return state;
}

const reducers = combineReducers({
    user:userReducer,
    tweets:tweetsReducer
})

const store = createStore(reducers);

store.subscribe(()=>{
    console.log("Store changed ",store.getState());
})

store.dispatch({type:"CHANGE_NAME",payload:"Abhijeet"})
store.dispatch({type:"CHANGE_AGE",payload:35})
store.dispatch({type:"ADD_TWEET",payload:"This is my first Tweet!"})
store.dispatch({type:"ADD_TWEET",payload:"Learning Flux and Redux!"})