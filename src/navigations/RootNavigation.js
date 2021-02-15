import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginForm from '../components/LoginForm';
import EmployeeCreate from '../components/EmployeeCreate';
import EmployeeList from '../components/EmployeeList';

const Stack = createStackNavigator();

class RootNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {!this.props.user ? (
            <Stack.Screen
              name="authscreen"
              component={LoginForm}
              options={{title: 'Auth Screen'}}
            />
          ) : (
            <>
              <Stack.Screen name="EmployeeList" component={EmployeeList} />
              <Stack.Screen name="EmployeeCreate" component={EmployeeCreate} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};
export default connect(mapStateToProps)(RootNavigation);
