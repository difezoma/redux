import { Action } from '../ngrx-fake/ngrx';

export const addAction: Action = {
    type: 'ADD'
};

export const subtractAction: Action = {
    type: 'SUBTRACT'
};

export const multiplyAction: Action = {
    type: 'MULTIPLY',
    payload: 5
};

export const divideAction: Action = {
    type: 'DIVIDE',
    payload: 2
};

export const resetAction: Action = {
    type: 'RESET'
};