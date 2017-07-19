import React, { Component } from 'react';
import InputText from './InputText';
import Divider from 'material-ui/Divider';
import SendButton from './SendButton';

export default class Footer extends Component {

    render() {
        return <div className="row"  >
            <Divider style={{
                position: "fixed",
                bottom: "70px",
                width: "100%"
            }} />
            <InputText />
            <SendButton />
        </div>;
    }
}