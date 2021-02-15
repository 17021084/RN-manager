import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {ButtonLearnMore, Card, CardSection, Input} from './common';

class EmployeeList extends Component {
  componentDidUpdate() {
    console.log('this.props.employeeList');
  }
  render() {
    return (
      <Card>
        {this.props.employeeList.map((emp) => {
          <CardSection>
            <Text>Name</Text>
            <Text>Name</Text>
            <Text>Name</Text>
          </CardSection>;
        })}
        <CardSection>
          <ButtonLearnMore
            onPress={() => {
              this.props.navigation.navigate('EmployeeCreate');
            }}>
            Add new
          </ButtonLearnMore>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    employeeList: state.employee.employeeList,
  };
};

export default connect(mapStateToProps)(EmployeeList);