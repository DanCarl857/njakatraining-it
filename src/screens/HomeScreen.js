import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    BackHandler,
    Image,
    TextInput,
    AsyncStorage,
    TouchableWithoutFeedback
} from 'react-native';
import { Card } from './../components/common/Card';

class HomeScreen extends Component {

    state = {
        search: '',
        loggedIn: false,
        visible: false
    }

    componentDidMount() {
        AsyncStorage.getItem('userData').then(value => {
            if(JSON.parse(value) == null) {
                var data = {
                    loggedIn: false
                }
                AsyncStorage.setItem('userData', JSON.stringify(data))
            } else {
                this.setState({ loggedIn: true });
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.sectionStyle}>
                    <Image
                        style={styles.iconStyle}
                        source={require('./../assets/search.png')}
                    />
                    <TextInput
                        style={{flex: 1}}
                        placeholder="Search for Lessons..."
                        autoCapitalize='none'
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        value={this.state.search}
                        onChangeText={(search) => this.setState({ search })}
                    />
                </View>
                <View style={styles.lessonContainer}>
                    <View style={styles.rowStyle}>
                        <Card>
                            <TouchableWithoutFeedback onPress={() => console.warn('test')}>
                                <View>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require('./../assets/algo_pic.jpeg')}
                                    />
                                    <View style={styles.lessonHeaderContainer}>
                                        <Text style={styles.lessonTextStyle}>Algorithms</Text>
                                        <Text style={styles.descriptionStyle}>Introduction to algorithms. 
        Basic stuff to learn</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Card>
                        <Card>
                            <TouchableWithoutFeedback onPress={() => console.warn('test')}>
                                <View>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require('./../assets/algo_pic.jpeg')}
                                    />
                                    <View style={styles.lessonHeaderContainer}>
                                        <Text style={styles.lessonTextStyle}>Algorithms</Text>
                                        <Text style={styles.descriptionStyle}>Introduction to algorithms. 
        Basic stuff to learn</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Card>
                    </View>

                    <View style={styles.rowStyle}>
                        <Card>
                            <TouchableWithoutFeedback onPress={() => console.warn('test')}>
                                <View>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require('./../assets/algo_pic.jpeg')}
                                    />
                                    <View style={styles.lessonHeaderContainer}>
                                        <Text style={styles.lessonTextStyle}>Algorithms</Text>
                                        <Text style={styles.descriptionStyle}>Introduction to algorithms. 
        Basic stuff to learn</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Card>
                        <Card>
                            <TouchableWithoutFeedback onPress={() => console.warn('test')}>
                                <View>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require('./../assets/algo_pic.jpeg')}
                                    />
                                    <View style={styles.lessonHeaderContainer}>
                                        <Text style={styles.lessonTextStyle}>Algorithms</Text>
                                        <Text style={styles.descriptionStyle}>Introduction to algorithms. 
        Basic stuff to learn</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Card>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    lessonContainer: {
        flex: 1,
        alignItems: 'center'
    },
    lessonHeaderContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    lessonTextStyle: {
        marginTop: 10,
        marginBottom: 5,
        fontWeight: '200',
        color: '#252525',
        fontSize: 20
    },
    descriptionStyle: {
        fontSize: 12,
        fontWeight: '100',
        paddingHorizontal: 5,
        marginBottom: 10,
        textAlign: 'center'
    },
    iconStyle: {
        padding: 10,
        margin: 10,
        height: 24,
        width: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#D1D1D1',
        height: 40,
        borderRadius: 5 ,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 5,
        marginTop: 15,
        marginBottom: 15
    },
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
        // flex: 1,
    },
    imageStyle: {
        height: 90,
        width: null
    }
});

export default HomeScreen;