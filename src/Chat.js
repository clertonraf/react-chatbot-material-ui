import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/communication/chat';

export default class App extends Component {

    render() {
        return <div>
            <AppBar
                title="Chatbot"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <div>
                <List>
                    <ListItem
                        leftAvatar={<Avatar />}
                        primaryText="Watson"
                        secondaryText={
                            <p>
                                Olá, tudo certo?
                            </p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider inset={true} />
                    <ListItem
                        leftAvatar={<Avatar />}
                        primaryText="Me"
                        secondaryText={
                            <p>
                                Oi
                            </p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider inset={true} />
                </List>
            </div>
            <div >
                <TextField
                    hintText="Digite a pergunta"
                    fullWidth={true}
                    style={{ position: "fixed", bottom: "0px" }}
                >
                    <IconButton >
                        <ActionHome />
                    </IconButton>
                </TextField>
            </div>
        </div>;
    }
}