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
  Image,
  AppRegistry,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native';

import Slider from "react-native-slider";


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
        <View style={{flexDirection: "row"}}>
        <TouchableOpacity 
        activeOpacity={5.0}
        onPress={() => { alert('10 days till I go bad!');
            
                }}>
          <Image 
          style={{marginLeft: 10, width: 100, height: 100}}
          source={require('./tupperware2.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity 
        activeOpacity={5.0}
        onPress={() => { alert('10 days till I go bad!');}}>
          <Image 
          style={{marginLeft: 40, width: 100, height: 100}}
          source={require('./tupperware2.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity 
        activeOpacity={5.0}
        onPress={() => { alert('10 days till I go bad!');}}>
          <Image 
          style={{marginLeft: 40, width: 100, height: 100}}
          source={require('./tupperware2.png')}
          />
        </TouchableOpacity>

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
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  },
  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: .5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5 ,
    margin: 5,
   
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
