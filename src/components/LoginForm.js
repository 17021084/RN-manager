import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {emailChange, passwordChange, loginUser} from '../actions';
import {ButtonLearnMore, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component {
  onEmailChange(email) {
    this.props.emailChange(email);
  }
  onPasswordChange(password) {
    this.props.passwordChange(password);
  }
  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }
  renderFailError() {
    if (this.props.error)
      return (
        <CardSection>
          <Text style={{color: 'red', alignSelf: 'center'}}>
            {this.props.error}
          </Text>
        </CardSection>
      );
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
        {this.renderFailError()}
        <CardSection>
          {this.props.loading ? (
            <Spinner />
          ) : (
            <ButtonLearnMore onPress={this.onButtonPress.bind(this)}>
              Login
            </ButtonLearnMore>
          )}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
  };
};

export default connect(mapStateToProps, {
  emailChange,
  passwordChange,
  loginUser,
})(LoginForm);
