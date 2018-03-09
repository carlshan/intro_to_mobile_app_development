import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
//import Greeting from './Components/Greeting'

export default class App extends React.Component {
  // constructor() {
  //   super();
  //   this.changeState = this.changeState.bind(this)
  //   this.state = {'whatSomeoneTypes': 'this is a new sentence'}
  // }
  //
  // changeState (text) {
  //   var newState = {'whatSomeoneTypes': text}
  //   this.setState(newState)
  //   }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Greeting
  //           firstName={}
  //       />
  //     </View>
  //   );
  // }

  render () {
    return (
      <View style={styles.container}>
        <Text> Here is some chill text </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
