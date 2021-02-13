import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    //avoid duplicated error...
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyBThfhPiMg27lqa_PQ_y-vFwaekCtOpfVs',
        authDomain: 'rn-manager-app.firebaseapp.com',
        projectId: 'rn-manager-app',
        storageBucket: 'rn-manager-app.appspot.com',
        messagingSenderId: '531977213932',
        appId: '1:531977213932:web:888cde441ba7f42880d2c9',
        measurementId: 'G-BSFLE94LLG',
      });
    } else {
      firebase.app(); // if already initialized, use that one
    }
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Header headerText="ManagerApp" />
        <LoginForm />
      </Provider>
    );
  }
}
