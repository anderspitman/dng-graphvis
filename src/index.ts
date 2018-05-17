import * as graphml from 'graphml-js';

function oldGreeter(message: string) {
    return "Hi " + message;
}

let message = "there";

console.log(graphml);

document.body.innerHTML = oldGreeter(message);
