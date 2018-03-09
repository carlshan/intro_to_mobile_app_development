import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { CheckBox } from 'react-native-elements';
import Todo from './Todo'

export default class List extends Component {

  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
  }

  renderItem (text, i) {
    const item = text.item
    return (
        <Todo
          todo={item.key}
          checked={item.checked}
          toggleChecked={this.props.toggleChecked}
        />
    )
  }

  render() {
    return (
      <ScrollView>
        <FlatList
          data={this.props.todos}
          renderItem={this.renderItem}
        />
      </ScrollView>
    )
  }
}
