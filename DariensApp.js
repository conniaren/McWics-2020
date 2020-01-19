/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
// import { TextInput } from 'react-native-paper';
// import { TextField } from '@material-ui/core';
//import PasswordInputText from 'react-native-hide-show-password-input';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class ButtonBasics extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
            <Text style={styles.niceText}>YOUR DIGITAL FRIDGE</Text>

            <Text style={styles.sectionDescription}> Please enter your food item: </Text>
            <TextInput

              style={{height:40,
                      paddingHorizontal: 40,
                      marginLeft: 20,
                      marginTop: 100,
                      
            }}
              placeholder='Food Item'
            />
            
            <TextInput style={{height:40,
            paddingHorizontal: 40,
            marginLeft: 20,
            marginTop: 60,
            marginBottom: 60,
            }}
            placeholder='Date of purchase'
            />
            
            
        <View style={styles.buttonContainer}>
              <Button
                style={{padding: 40}}
                onPress={() => { alert('You have logged in');
            
                }}
                
                title="Next"
                color='black'
              />
            </View>
            
            </View>
    );
  }
}



const styles = StyleSheet.create({
scrollView: {
backgroundColor: Colors.lighter,
  },
    niceText: {
    color: 'black',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
                                 
},
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },

  button: {
    marginTop: 20,
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  }
  
});


// export default App;
