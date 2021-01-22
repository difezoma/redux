import { Action } from "./ngrx-fake/ngrx";
import { addAction, subtractAction, multiplyAction, divideAction, resetAction } from './counter/counter.actions';

function reducer(state = 10, action: Action){

    switch (action.type) {
        case 'ADD':
            return state += 1;

        case 'SUBTRACT':
            return state -= 1;
            
        case 'MULTIPLY':
            return state * action.payload;

        case 'DIVIDE':
            return state / action.payload;

        case 'RESET':
            return state = 0;
    
        default:
            return state;
    }
}

console.log(reducer(10, addAction));

console.log(reducer(10, subtractAction));

console.log(reducer(10, multiplyAction));

console.log(reducer(10, divideAction));

console.log(reducer(10, resetAction));