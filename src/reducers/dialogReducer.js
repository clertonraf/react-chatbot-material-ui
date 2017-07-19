import {SET_INPUT, PRINT_BOT_DIALOG, PRINT_USER_DIALOG} from './../constants';

const watsonReducer = (state = {
  inputTxt: '',
  dialogLst: []
}
, action) => {
  switch (action.type) {
    case SET_INPUT:
      state = {...state,inputTxt: action.payload};
      break;
    case PRINT_BOT_DIALOG:
    case PRINT_USER_DIALOG:
      state = {...state, dialogLst:[...state.dialogLst, action.payload]};
      break;
    default: break;
  }
  return state;
};

export default watsonReducer;