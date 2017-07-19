import React, { Component } from 'react';
import ChatButton from 'material-ui/svg-icons/communication/chat';
import RaisedButton from 'material-ui/RaisedButton';

export default class SendButton extends Component {

    render() {
        return <div className="col-md-1">
                <RaisedButton
                    label="Enviar"
                    labelPosition="before"
                    primary={true}
                    icon={<ChatButton />}
                    style={{
                        position: "fixed",
                        bottom: "15px"
                    }}
                />
            </div>;
    }
}