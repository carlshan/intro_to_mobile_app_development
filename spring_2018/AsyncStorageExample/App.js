import React from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()
    this.setName = this.setName.bind(this);
    this.state = {name: ''}
  }

  componentDidMount() {
    AsyncStorage.getItem('name').then((result) => {
      this.setState({ name: result })
    })
  }

  setName(text) {
      AsyncStorage.setItem('name', text)
      this.setState({'name': text})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.name}</Text>
        <TextInput
          placeholder="What is your name?"
          onChangeText={this.setName}
        />
      </View>
    );
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
