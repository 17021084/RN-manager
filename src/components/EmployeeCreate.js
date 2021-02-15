import React, {Component} from 'react';
import {Picker, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {employeeNew} from '../actions/EmployeeActions';
import {ButtonLearnMore, Card, CardSection, Input} from './common';

class EmployeeCreate extends Component {
  state = {};
  onNameChange(name) {
    this.setState({name: name});
  }
  onPhoneChange(phone) {
    this.setState({phone: phone});
  }
  onPickChange(picker) {
    this.setState({picker: picker});
  }

  createNewEmployee() {
    this.props.employeeNew(this.state);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={this.onNameChange.bind(this)}
            value={this.state.name}
            label="name"
            placeholder="nguyen van a"
          />
        </CardSection>
        <CardSection>
          <Input
            onChangeText={this.onPhoneChange.bind(this)}
            value={this.state.phone}
            label="phone"
            placeholder="3123-1231-312"
          />
        </CardSection>
        <CardSection>
          <Picker
            style={{flex: 1}}
            selectedValue={this.state.picker}
            onValueChange={this.onPickChange.bind(this)}>
            <Picker.Item label="monday" value="monday" />
            <Picker.Item label="tuesday" value="tuesday" />
            <Picker.Item label="Wednesday" value="wednesday" />
            <Picker.Item label="thursday" value="thursday" />
            <Picker.Item label="Friday" value="friday" />
          </Picker>
        </CardSection>
        <CardSection>
          <ButtonLearnMore onPress={this.createNewEmployee.bind(this)}>
            Create new
          </ButtonLearnMore>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, {employeeNew})(EmployeeCreate);
