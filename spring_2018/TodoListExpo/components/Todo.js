import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import {CheckBox} from 'react-native-elements';

export default class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      checked: this.props.checked
    }
  }

  render() {
    return (
      <View
        style={styles.item}
      >
        <Text>{this.props.todo}</Text>

        <CheckBox
          title='Done'
          checked={this.state.checked}
          onPress={() => {this.props.toggleChecked(this.props.todo)}}
        />
    </View>
    )

  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    padding: 15,
  },
})
