import Conversation from 'watson-developer-cloud';

import {SET_CONVERSATION, SET_WATSON_RESPONSE} from './../constants';

export function setConversation(config) {
    let result = Conversation.conversation(config);
    return {
        type: SET_CONVERSATION,
        payload: result
    };
}

export function sendMessage(text,context,workspace,config) {
    let responseTxt = '';
    let newContext = {};
    let setup = {
                    workspace_id: workspace,
                    input: { 'text': text},
                    context: context
                }
    const conversation = Conversation.conversation(config); 
    conversation.message(setup, function(err,response){
            if(err) {
                console.log("conversation",conversation)
                console.log('error:', err);
            } else {
                responseTxt = response.output.text[0];
                newContext = response.context;
            }
        }
    );
    return {
        type: SET_WATSON_RESPONSE,
        response: responseTxt,
        context: newContext
    }
}