// Rest Parameter - Aggregation of remaining arguments into single parameter

function log(message, what, ...args){
    console.log('\n');
    console.log(message);
    console.log(what);
    console.log(args);
}

log('Hello');
log('Hello','Reply');
log('Hello','Reply','How are you');
log('Hello','Reply','How are you','Where are you');