import {SET_INPUT, PRINT_USER_DIALOG, PRINT_BOT_DIALOG} from './../constants';

export function setInput(txt){
    return {
        type: SET_INPUT,
        payload: txt
    };
}

export function printUserDialog(dialog) {
    return {
        type: PRINT_USER_DIALOG,
        payload: dialog
    };
}

export function printBOTDialog(dialog) {
    return {
        type: PRINT_BOT_DIALOG,
        payload: dialog
    };
}