import {SET_INPUT} from './../constants';

const watsonReducer = (state = {
  inputTxt: '',
  dialogLst: []
}
, action) => {
  switch (action.type) {
    case SET_INPUT:
      state = {...state,inputTxt: action.payload};
      break;
    default: break;
  }
  return state;
};

export default watsonReducer;