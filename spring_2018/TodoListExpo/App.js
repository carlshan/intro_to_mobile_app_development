import React from 'react';
import { StyleSheet, TextInput, ScrollView, Text, View } from 'react-native';
import Title from './components/Title'
import List from './components/List'
import Input from './components/List'
import Footer from './components/Footer'

export default class App extends React.Component {

  constructor() {
    super()
    this.addTodo = this.addTodo.bind(this)
    this.toggleChecked = this.toggleChecked.bind(this)
    this.state = {
      todos: [
        {key: 'Todo A', checked: false},
        {key: 'Todo B', checked: false},
        {key: 'Todo C', checked: false},
        {key: 'Todo D', checked: false},
        {key: 'Todo E', checked: false}
      ]
    }
  }

  toggleChecked(key) {
    let obj = this.state.todos.find((todo) => {return todo.key == key})
    console.log('pressed')
    obj.checked = !obj.checked
    console.log(this.state.todos)
  }

  addTodo(text) {
    if (!text) {
      return
    }
    this.setState({
      todos: [{key: text, checked: false}, ...this.state.todos]
    })
  }

  removeDone() {
    return null
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Title />
          <Input addTodo = {this.addTodo} />
        </View>
        <List
          todos={this.state.todos}
          toggleChecked={this.toggleChecked}
        />
        <View style={styles.removeContainer}>
          <Footer onPress={this.removeDone}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    width: 200,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'powderblue',
    padding: 15
  },
  todoInput: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1
  },

  removeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
