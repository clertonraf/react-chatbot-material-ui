import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { setInput, printUserDialog } from './../actions/dialogActions';
import { sendMessage } from './../actions/watsonActions';

class InputText extends Component {

    onChangeHandler(event, newValue) {
        this.props.setInput(newValue);
    }

    onKeyPressHandler(ev) {
        if (ev.key === 'Enter') {
            this.props.sendMessage(this.props.dialog.inputTxt);
            this.props.printUserDialog(
                {
                    "text": this.props.dialog.inputTxt,
                    "entity": "User"
                }
            );
            ev.preventDefault();
            this.props.setInput("");
        }
    }

    render() {
        return <div className="col-md-11" >
            <TextField
                hintText="Digite a pergunta"
                style={{
                    position: "fixed",
                    bottom: "10px",
                    width: "90%",
                    padding: "10px",
                }}
                onChange={(event, newValue) => this.onChangeHandler(event, newValue)}
                value={this.props.dialog.inputTxt}
                onKeyPress={(ev) => this.onKeyPressHandler(ev)}
            />
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        dialog: state.dialogReducer,
        watson: state.watsonReducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (txt) => {
            dispatch(sendMessage(txt));
        },
        setInput: (txt) => {
            dispatch(setInput(txt));
        },
        printUserDialog: (dialog) => {
            dispatch(printUserDialog(dialog));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputText);