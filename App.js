/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

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

import {
  StackNavigator,
} from 'react-navigation';

import {
  createAppContainer,
} from 'react-navigation';

import {
  createStackNavigator,
} from 'react-navigation-stack';



//FunctionToOpenNext = () => {
//  this.props.navigation.navigate("Second");
//}

{/*export default class ButtonBasics extends Component {
  _onPressButton() {
  //  this.props.navigation.navigate("Second");
  alert('You tapped the button!')
  }
}

*/}

class HomeScreen extends Component {
    static navigationOptions = {
      title: "Welcome",
    };
  
  

  render() {
    const {navigate} = this.props.navigation;
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
           <Text style={styles.niceText}> YOUR PERSONAL FRIDGE </Text>
            <Text style={styles.sectionDescription}> Please enter a food item: </Text>
            <TextInput

              style={{height:50,
                      paddingHorizontal: 50,
                      marginLeft: 20,
                      marginTop: 100,
                      
            }}
              placeholder='Food item'
            />
            
            
            <TextInput style={{height:40,
            paddingHorizontal: 40,
            marginLeft: 20,
            marginTop: 60,
            }}
            placeholder='Password'
            />

            
            
            <Image 
            style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}}
            source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
            />

        <View style={styles.buttonContainer}>
              <Button
                style={{padding: 40}}
                onPress={
                 // this.FunctionToOpenNext
                () => navigate('Next', {name: Next})
                  
                
                //  alert('You have logged in');
                
            
                }
              
                title="NEXT"
                color='black'
              />
            </View>
            
            </View>
    );
  }
}


class NextScreen extends Component {
  static navigationOptions = {
    title: 'SecondPage',
  };
render()
{
  return(
    <View>
    <Text style = { styles.niceText }> This is the Second Page </Text>
    </View>
  );
}
}

const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  Next: NextScreen,

},
{
  initialRouteName: 'Home',
}
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render(){
    return <AppContainer />;
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
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Helvetica',
    fontStyle: 'italic',
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
