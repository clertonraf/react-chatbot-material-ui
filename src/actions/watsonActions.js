import {MIDDLEWARE_ENDPOINT} from './../constants';
import {printBOTDialog} from './dialogActions';
import Axios from 'axios'; 

export const sendMessage = (text) => {
    return (dispatch) => {Axios.post(MIDDLEWARE_ENDPOINT,{"text":text}).then(
        response => dispatch(printBOTDialog(response.data))).catch(error => { 
                throw (error) 
            });
    }
}