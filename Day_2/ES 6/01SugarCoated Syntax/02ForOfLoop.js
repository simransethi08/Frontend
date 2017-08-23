// function log(message, ...args){
    
//     console.log(message);
//     for(var i in args){
//         console.log(args[i]);
//     }
// }

function log(message, ...args){
    
    console.log(message);
    for(var ele of args){
        console.log(ele);
    }
}

log('Call 1','Hello','Hi',12,34);