import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {ButtonLearnMore, Card, CardSection, Input} from './common';
export default class LoginForm extends Component {
  onEmailChange(text) {}
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input label="password" placeholder="secret" secureTextEntry />
        </CardSection>

        <CardSection>
          <ButtonLearnMore>Login</ButtonLearnMore>
        </CardSection>
      </Card>
    );
  }
}
