//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    StatusBar,
    BackHandler,
    Image,
    AsyncStorage
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Actions } from 'react-native-router-flux';


// create a component
class OnboardingScreen extends Component {
    constructor() {
        super();
        this.state = { firstLaunch: null };
        AsyncStorage.getItem("alreadyLaunched").then(value => {
            if(JSON.parse(value) == null){
                 AsyncStorage.setItem('alreadyLaunched', JSON.stringify(true));
                 this.setState({ firstLaunch: true });
            }
            else{
                 this.setState({ firstLaunch: false });
            }});
    }

    

    componentWillMount = () => {
        BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
    };


    render() {
        if(this.state.firstLaunch === null){
            return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing.
        } else if(this.state.firstLaunch == true){
            return (
                <Onboarding
                    pages={[
                        {
                            backgroundColor: '#fff',
                            image: <Image source={require('../assets/learning.png')} style={{ height: 100, width: 100}}/>,
                            title: 'E-Learning',
                            subtitle: 'A platform to get your kid coding like never before. A platform for kids.',
                        },
                        {
                            backgroundColor: '#fff',
                            image: <Image source={require('../assets/algorithms.png')} style={{ height: 100, width: 100}}/>,
                            title: 'Algorithms',
                            subtitle: 'Coding is a language every child should learn, we are here to better that process',
                        },
                        {
                            backgroundColor: '#fff',
                            image: <Image source={require('../assets/security.png')} style={{ height: 100, width: 100}}/>,
                            title: 'Security',
                            subtitle: 'Our platform is secure and our data integrity is top of the line',
                        },
                    ]}
                    onSkip={() => Actions.home()}
                    onDone={() => Actions.home()}
                />
            );
        } else{
            Actions.home();
            return <View></View>
        }
    }
}

//make this component available to the app
export default OnboardingScreen;