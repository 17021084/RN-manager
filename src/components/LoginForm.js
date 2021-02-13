import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {emailChange, passwordChange} from '../actions';
import {ButtonLearnMore, Card, CardSection, Input} from './common';

class LoginForm extends Component {
  onEmailChange(email) {
    this.props.emailChange(email);
  }
  onPasswordChange(password) {
    this.props.passwordChange(password);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.props.email}
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.props.password}
            label="password"
            placeholder="secret"
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <ButtonLearnMore>Login</ButtonLearnMore>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  };
};

export default connect(mapStateToProps, {emailChange, passwordChange})(
  LoginForm,
);
