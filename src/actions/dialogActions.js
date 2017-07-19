import {SET_INPUT} from './../constants';

export function setInput(txt){
    return {
        type: SET_INPUT,
        payload: txt
    };
}