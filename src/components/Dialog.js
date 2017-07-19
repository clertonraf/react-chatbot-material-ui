import React, { Component } from 'react';
import { connect } from 'react-redux';
import { printBOTDialog } from './../actions/dialogActions';
import { List } from 'material-ui/List';
import Comment from './Comment';

class Dialog extends Component {
    componentWillMount() {
        let dialog = {
            "text": "Olá. Com que processo posso te ajudar?",
            "entity": "BOT"
        };
        this.props.printBOTDialog(dialog);
    }

    render() {
        let commentLst = this.props.dialog.dialogLst.map(
            (item,index) => <Comment comment={item} key={index}/>
        );
        return <div className="row">
            <List>
                {commentLst}
            </List>
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
        printBOTDialog: (dialog) => {
            dispatch(printBOTDialog(dialog));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);