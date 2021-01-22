interface Action{
    type: string;
    payload?: any;
}

/* const addAction: Action = {
    type: 'ADD'
}; */

function reducer(state = 10, action: Action){

    if(action.type === 'ADD'){
        return state += 1;
    }

    switch (action.type) {
        case 'ADD':
            return state += 1;

        case 'SUBTRACT':
            return state -= 1;
            
        case 'MULTIPLY':
            return state * action.payload;

        case 'DIVIDE':
            return state / action.payload;
    
        default:
            return state;
    }
}

const addAction: Action = {
    type: 'ADD'
};

const subtractAction: Action = {
    type: 'SUBTRACT'
};

const multiplyAction: Action = {
    type: 'MULTIPLY',
    payload: 5
};

const divideAction: Action = {
    type: 'DIVIDE',
    payload: 2
};

console.log(reducer(10, addAction));

console.log(reducer(10, subtractAction));

console.log(reducer(10, multiplyAction));

console.log(reducer(10, divideAction));
