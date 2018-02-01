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

// import screens/components
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import LessonDetailScreen from './src/screens/LessonDetailScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import LoginScreen from './src/screens/LoginScreen';
import ParentSignupScreen from './src/screens/ParentSignupScreen';

export default class App extends Component{
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
    StatusBar.setBarStyle('light-content', true);
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
            initial
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
            hideNavBar={true}
            component={ParentSignupScreen}
          />
        </Scene>
      </Router>
    );
  }
}