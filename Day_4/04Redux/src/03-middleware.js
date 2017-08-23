import { applyMiddleware, createStore } from "redux";

const reducer = function(state,action){
    if(action.type === "INC"){
        return state + action.payload;
    }
    else if(action.type === "DEC"){
        return state - action.payload;
    }
    else if(action.type === "MULT"){
        throw new Error("Something wrong with MULT!");
    }
    return state;
}
// middlware function to log the actions
const logger = (store) => (next) => (action) => {
    console.log("action fired ",action);
    next(action);
}

const error = (store) => (next) => (action) => {
    try{
        next(action);
    }catch(e){
        console.log("\nWRONG ",e)
    }    
}

const middleware = applyMiddleware(logger,error);

const store = createStore(reducer,0,middleware);

store.subscribe(()=>{
    console.log("Store changed ",store.getState());
})

store.dispatch({type:"INC",payload:1});
store.dispatch({type:"INC",payload:3});
store.dispatch({type:"INC",payload:25});
store.dispatch({type:"DEC",payload:35});
store.dispatch({type:"INC",payload:34});
store.dispatch({type:"MULT",payload:5});
store.dispatch({type:"DEC",payload:2});
// having type is mandatory, payload is not necessary, 
// you could have name as abc, xyz.
