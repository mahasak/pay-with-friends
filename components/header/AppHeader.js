import React, { Component } from 'react';
import { Container, Content , Header, Left, Button, Icon, Body, Title, Right, Footer, FooterTab} from 'native-base';

export class AppHeader extends Component {
    render() {
        return (
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>PayWithFriend</Title>
                    </Body>
                    <Right />
                </Header>
        );
    }
}