import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'



export default class Footer extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.removeText}> Remove completed items </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  removeText: {
    color: 'red'
  }
})
