import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, Content ,Text } from 'native-base';
import {AppHeader, AppFooter} from './components';

export default class paywithfriends extends Component {
   constructor() {
     super();
        this.state = {
            active: true
        };
    }

    render() {
        return (
            <Container>
                <AppHeader />
                <Content>
                    <Text>Trips</Text>
                </Content>
                <AppFooter />
            </Container>
        );
    }
}

AppRegistry.registerComponent('paywithfriends', () => paywithfriends);
