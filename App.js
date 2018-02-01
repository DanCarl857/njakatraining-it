import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  BackHandler
} from 'react-native';
import { Router, Scene, ActionConst, Actions } from 'react-native-router-flux';
import * as firebase from "firebase";

// import screens/components
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import LessonDetailScreen from './src/screens/LessonDetailScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import LoginScreen from './src/screens/LoginScreen';
import ParentSignupScreen from './src/screens/ParentSignupScreen';

// Lol this is so wrong...
var config = {
  apiKey: "AIzaSyCd6I6ww2ESuZ8WiihEmHk7UmQyoktbszc",
  authDomain: "fir-demo-9573c.firebaseapp.com",
  databaseURL: "https://fir-demo-9573c.firebaseio.com",
  projectId: "fir-demo-9573c",
  // storageBucket: "fir-demo-9573c.appspot.com",
  messagingSenderId: "338860958727"
}

export default class App extends Component{
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
    StatusBar.setBarStyle('light-content', true);

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Router
        navigationBarStyle={{ backgroundColor: '#555555' }} 
        tintColor='white'
        titleStyle={{ color: '#fff' }}>
        <Scene key="root">
          <Scene 
            key="onboarding"
            component={OnboardingScreen}
            hideNavBar={true}
            
          />
          <Scene
            key="home"
            component={HomeScreen}
            type={ActionConst.RESET}
            title="NJAKA"
            onRight={() => Actions.settings()}
            rightButtonImage={require('./src/assets/settings.png')}
          />
          <Scene
            key="lesson"
            component={LessonDetailScreen}
            title="Lesson Details"
            onRight={() => Actions.settings()}
            rightButtonImage={require('./src/assets/settings.png')}
          />
          <Scene
            key="login"
            component={LoginScreen}
            hideNavBar={true}
            initial
          />
          <Scene
            key="settings"
            component={SettingsScreen}
            title="Settings"
            onRight={() => Actions.settings()}
            rightButtonImage={require('./src/assets/settings.png')}
          />
          <Scene
            key="parent_signup"
            title="Create Account"
            onLeft={() => Actions.login()}
            leftButtonImage={require('./src/assets/back_arrow.png')}
            component={ParentSignupScreen}
          />
        </Scene>
      </Router>
    );
  }
}