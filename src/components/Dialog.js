import React, { Component } from 'react';
import { List } from 'material-ui/List';
import Comment from './Comment';

export default class Dialog extends Component {

    render() {
        return <div className="row">
                <List>
                    <Comment text="Olá, tudo certo?" entity="CPA"/>
                    <Comment text="Oi" entity="Person"/>
                </List>
            </div>;
    }
}