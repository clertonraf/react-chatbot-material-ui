import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Person from 'material-ui/svg-icons/social/person';
import BOT from 'material-ui/svg-icons/social/public';
import Divider from 'material-ui/Divider';

export default class Comment extends Component {

    render() {
        let entity = this.props.entity === "CPA" ? {icon:<BOT />,text: "BOT"} : {icon: <Person />,text: "Me"}
        return <div>
            <ListItem
                leftAvatar={<Avatar icon={entity.icon} />}
                primaryText={entity.text}
                secondaryText={
                    <p>
                        {this.props.text}
                    </p>
                }
                secondaryTextLines={2}
            />
            <Divider inset={true} />
        </div>;
    }
}