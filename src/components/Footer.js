import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import ActionHome from 'material-ui/svg-icons/communication/chat';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

export default class Footer extends Component {

    render() {
        return <div className="row"  >
            <Divider style={{
                        position: "fixed",
                        bottom: "70px",
                        width: "100%"
                    }}/> 
            <div className="col-md-11" >
                <TextField
                    hintText="Digite a pergunta"
                    style={{
                        position: "fixed",
                        bottom: "10px",
                        width: "90%",
                        padding: "10px",
                    }}
                />
            </div>

            <div className="col-md-1">
                <RaisedButton
                    label="Enviar"
                    labelPosition="before"
                    primary={true}
                    icon={<ActionHome />}
                    style={{
                        position: "fixed",
                        bottom: "15"
                    }}
                />
            </div>
        </div>;
    }
}