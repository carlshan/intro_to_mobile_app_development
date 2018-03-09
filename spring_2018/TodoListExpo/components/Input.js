import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet, TextInput } from 'react-native'


export default class Input extends Component {

  constructor() {
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <TextInput
        style={styles.todoInput}
        onChangeText={(text) => this.setState({text})}
        onSubmitEditing={() => {this.props.addTodo(this.state.text)}}
        placeholder="Enter an item!"
      />
    )
  }
}

const styles = StyleSheet.create({
})
