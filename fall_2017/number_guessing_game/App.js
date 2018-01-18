import React, { Component} from 'react';
import { Text, TextInput, View, Button, StyleSheet} from 'react-native';
import ChooseRange from './ChooseRange'

export default class Game extends Component {
  constructor (props) {
    super(props);
    this.getRandomRange = this.getRandomRange.bind(this);
    this.checkCorrect = this.checkCorrect.bind(this);
    this.state = {
      myNumber: null,
      hint: '',
      guess: 0,
      winner: false,
      numGuesses: 0,
      lowRange: 0,
      highRange: 100
    }
  }

  handleLow = (event) => {this.setState({lowRange: parseInt(event.nativeEvent.text)})}
  handleHigh = (event) => {this.setState({highRange: parseInt(event.nativeEvent.text)})}
  chooseRange = () => { this.setState({
    myNumber: this.getRandomRange(this.state.lowRange, this.state.highRange)
  })
}

  getRandomRange(min, max) {
    let chosen = Math.random() * (max - min) + min;
    chosen = Math.floor(chosen);
    return chosen;
  }

  checkCorrect() {
    this.setState({numGuesses: this.state.numGuesses += 1})
    let guess = this.state.guess;
    if (guess == this.state.myNumber) {
      this.setState({ winner: true, hint: '' });
    } else if (guess < this.state.myNumber) {
      this.setState({hint: 'Your guess is too low! Try again.'})
    } else {
      this.setState({hint: 'Your guess is too high! Try again.'})
    }
  }


  render() {

    // add code that renders the "number choosing screen"
    if (this.state.myNumber == null) {
      return (<ChooseRange />)
    }

    if (this.state.winner == true) {
      return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text> You win! </Text>
          <Text> It took you {this.state.numGuesses} guesses to guess the correct number of {this.state.myNumber}. </Text>
          <Text> Do you want to play again? </Text>
          <Button title="Yes" onPress={() => this.setState(
            {winner: false,
             myNumber: this.getRandomRange(this.state.lowRange, this.state.highRange),
             hint: '',
             guess: 0,
             numGuesses: 0
            }
        )} />
          <Button title="No" onPress={() => this.setState({myNumber: null, winner: false, hint: '', guess: 0, numGuesseS: 0})} />
        </View>
      )
    } else {
      return (
  	    <View style={styles.container}>
            <Text style={{fontSize: 10}}>Answer: {this.state.myNumber}</Text>
            <Text style={{fontSize: 10}}>Number of Guesses: {this.state.numGuesses}</Text>
            <Text style={{fontSize: 18}}>I have chosen a number between {this.state.lowRange} and {this.state.highRange}. What do you want to guess? </Text>
            <Text style={{fontsize: 10}}>Hint: {this.state.hint} </Text>
            <TextInput placeholder="Enter a guess" onChangeText={(guess) => {this.setState({guess: guess })}}/>
            <Button
                style={{color: 'white', marginTop: 30, borderWidth: 1, borderColor: 'white', marginLeft: 20, marginRight: 20, height: 40, padding: 10}}
                onPress = {this.checkCorrect}
                title='Guess'
            />
  	    </View>
      );
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold'
  },
});
