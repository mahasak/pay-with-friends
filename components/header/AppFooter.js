

import React, { Component } from 'react';
import { Container,Badge, Text, Content , Header, Left, Button, Icon, Body, Title, Right, Footer, FooterTab} from 'native-base';

export class AppFooter extends Component {
    render() {
        return (
                <Footer>
                    <FooterTab>
                          <Button badge vertical>
                              <Badge><Text>2</Text></Badge>
                              <Icon name="apps" />
                              <Text>Trips</Text>
                          </Button>
                          <Button active badge vertical>
                              <Badge ><Text>51</Text></Badge>
                              <Icon active name="navigate" />
                              <Text>Entry</Text>
                          </Button>
                          <Button>
                              <Icon name="person" />
                              <Text>My Profile</Text>
                          </Button>
                      </FooterTab>
                </Footer>
        );
    }
}