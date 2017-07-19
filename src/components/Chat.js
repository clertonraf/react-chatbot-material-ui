import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Footer from './Footer';
import Dialog from './Dialog';

export default class App extends Component {

    render() {
        return <div>
            <AppBar
                title="Chatbot (Protótipo)"
                iconClassNameRight="muidocs-icon-navigation-expand-more" />
            <div className="container-fluid">
                <Dialog />
            </div>
            <div className="container-fluid">
                <Footer />
            </div>
        </div>;
    }
}