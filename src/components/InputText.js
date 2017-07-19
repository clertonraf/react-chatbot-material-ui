import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { setInput } from './../actions/dialogActions';

class InputText extends Component {

    onChangeHandler(event, newValue) {
        this.props.setInput(newValue);
    }

    onKeyPressHandler(ev) {
        if (ev.key === 'Enter') {
            console.log("ENTER")
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
        dialog: state.dialogReducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setInput: (txt) => {
            dispatch(setInput(txt));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputText);