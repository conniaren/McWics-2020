const App = createAppContainer(MainNavigator);
export default App;
class HomeScreen extends React.Component {
  static navigationOptions={
    title:'Welcome',
  };
  _onPressButton() {
    alert('You tapped the button!')
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <SafeAreaView style={{ flex: 1 }}>
     <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <Text style={styles.welcome}> My Fridge </Text>
        <Text style={styles.instructions}>Track your fresh foods the day they sit in. Save Waste. </Text>
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <Button 
            onPress={this._onPressButton}
            title="Press Me"
          />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
    </View>
    </SafeAreaView>
    
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 0,
    backgroundColor: 'powderblue',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 0,
    backgroundColor: 'skyblue',
  },
  buttonContainer: {
    backgroundColor: 'steelblue',

  },
});
