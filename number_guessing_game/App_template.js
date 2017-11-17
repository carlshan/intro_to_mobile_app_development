import React, { Component} from 'react';
import { Text, TextInput, View, Button, StyleSheet, Image} from 'react-native';

/**
TODO:
  * Button for Yes or No in terms of continuing
  * Allow users to input the range of numbers they want
**/

export default class Game extends Component {
  constructor (props) {
    // You need this constructor class to initialize the Component
    // so that it has a state, which will keep track of things.
    super(props); // ignore this
    this.getRandomRange = this.getRandomRange.bind(this); // this is necessary
    this.checkCorrect = this.checkCorrect.bind(this); // this is also necessary
    this.restart = this.restart.bind(this);
    this.state = {
      number: 55,
      win: false,
      hint: ''
      // your code here
      // you need a state attribute that stores whether the player has won
      // it should begin off as having the value `false`
      // you also need to track what the chosen number is
      // you may also want an attribute called 'hint' that display an empty string
      // at the beginning of the game, but if you guess too high or low, it'll tell you.
    }
  }

  getRandomRange(min, max) {
    // this function returns an integer between min and max
    // you don't need to modify this function
    let chosen = Math.random() * (max - min) + min;
    chosen = Math.floor(chosen);
    return chosen;
  }

  checkCorrect(guess) {
    if (guess == this.state.number) {
      // this should check the case where the guess == the chosen number
      let newState = {
        win: true
      }
      this.setState(newState);
    } else if (guess < this.state.number) {
      // this should execute if your guess is too low
      this.setState(
        {
          hint: 'Your guess was too low'
        }

      );
    } else {
      // this should execute if your guess is too high
      this.setState({hint: 'Your guess is too high'});

    }
  }


  restart() {
    this.setState(
      {
        win: false,
        number: 70,
        hint: ''
      }

    )
  }

  render() {
    if (this.state.win == true) {
      // This condition should run if the player guessed correctly
      return (
        // The below Image component shows a gif that displays when you win :)
        <Image
          style={{width: 300, height: 200}}
          resizeMode='contain'
          source={{uri: 'https://media.giphy.com/media/l46CtynlAiRNzfsA0/giphy.gif' }}
        />
        <Text> Do you want to play again? </Text>
        <Button
          title="Yes"
          onPress={this.restart}
        />


        // **your code here**
      )
    } else {
      // you don't need to modify this else clause
      return (
  	    <View style={styles.container}>
            <Text style={{fontSize:18}}>I have chosen a number between 0 and 100. What do you want to guess?</Text>
            <Text>Hint: {this.state.hint} </Text>
            <TextInput placeholder="Enter a guess: " onChangeText={this.checkCorrect}/>
  	    </View>
      );
    }
  }
}

// you don't need to modify the styles variable either
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
