import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/communication/chat';

export default class Footer extends Component {

    render() {
        return <div className="row" >
            <div className="col-md-11">
                <TextField
                    hintText="Digite a pergunta"
                    style={{ position: "fixed", bottom: "0", width: "90%", padding: "10px" }} />
            </div>

            <div className="col-md-1">
                <IconButton style={{ position: "fixed", bottom: "0" }}>
                    <ActionHome />
                </IconButton>
            </div>
        </div>;
    }
}