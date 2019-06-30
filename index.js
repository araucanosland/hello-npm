function helloWorld(){
    return 'Hello World';
}

function add(a, b){
    return a+b;
}

function substract(a, b){
    return a-b;
}


module.exports = {
    helloWorld,
    ops: {
        add,
        substract
    }
} 