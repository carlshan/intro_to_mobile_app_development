import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Button
} from 'react-native';
import React, { Component } from 'react';
import Piece from './Piece';

const {width, height} = require('Dimensions').get('window');
const SIZE = 3; // 3-by-3 grid for Tic-Tac-Toe
const SQUARE_SIZE = Math.floor(width * 0.25);
const SQUARE_PADDING = Math.floor(SQUARE_SIZE * 0.05);
const BORDER_RADIUS = SQUARE_PADDING * 2;

export default class Board extends Component {
  constructor(props){
    super(props);
    this.renderBoard = this.renderBoard.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.checkWin = this.checkWin.bind(this);
    this.state = {
      lastPlaced: '',
      gamePositions: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]
    }
  }

  restartGame () {
    this.setState({
      lastPlaced: '',
      gamePositions: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]
    })
  }

  checkWin() {
    let currentGame = this.state.gamePositions;
    for (let row = 0; row < SIZE; row++) {
      if (currentGame[row][0] !== '' && currentGame[row][0] === currentGame[row][1] &&
          currentGame[row][0] === currentGame[row][2]) {
        return true;
      }
    }

    for (let col = 0; col < SIZE; col++) {
      if (currentGame[0][col] !== '' && currentGame[0][col] === currentGame[1][col] &&
          currentGame[0][col] === currentGame[2][col]) {
        return true;
      }
    }

    if (currentGame[0][0] !== '' && currentGame[0][0] === currentGame[1][1] &&
        currentGame[0][0] === currentGame[2][2]) {
      return true;
    }

    if (currentGame[0][2] !== '' && currentGame[0][2] === currentGame[1][1] &&
        currentGame[0][2] === currentGame[2][0]) {
      return true;
    }

    return false;
  }

  updatePosition(row, col) {
    // the below line makes a copy of this.state.gamePositions
    let newPositions = Object.assign({}, this.state.gamePositions);
    let toPlace = this.state.lastPlaced == 'X' ? 'O' : 'X'
    let currentPiece = newPositions[row][col];
    if (currentPiece == '') {
      // since currentPiece is '', we can put down a piece
      newPositions[row][col] = toPlace

      this.setState({
        gamePositions: newPositions,
        lastPlaced: toPlace
      })
    } else {
      // there's already a piece there so we can't put anything down.
      // so this function should just return nothing.
      return null
    }
  }


  renderBoard() {
    let result = [];

    for (let row = 0; row < SIZE; row++) {
      for (let col = 0; col < SIZE; col++) {
        let square_key = row * SIZE + col;
        let position = {
          left: col * SQUARE_SIZE + SQUARE_PADDING + 40,
          top: row * SQUARE_SIZE + SQUARE_PADDING + 200
        }

        let square = <View key={square_key} style={[styles.square, position]}>
                        <TouchableOpacity onPress={(e) => this.updatePosition(row, col)} >
                          <Piece pieceType={this.state.gamePositions[row][col]} />
                        </TouchableOpacity>
                     </View>
        result.push(square);

      }

    }

    return result;
  }

  render() {

    let win = this.checkWin();
    if (win) {
      return <View style={styles.container}>
                <Text style={styles.instructionText}> {this.state.lastPlaced} has won! </Text>
                <Button
                  title="Restart Game"
                  onPress={this.restartGame}
                  color="white"
                  style={styles.restartButton}
                />
              </View>
    }

    let currentPlayer = this.state.lastPlaced == 'X' ? 'O' : 'X';
    return (
      <View style={styles.container}>
        <Text style={styles.instructionText}> It is currently {currentPlayer}'s turn. </Text>
          {this.renderBoard()}
          <Button
            title="Restart Game"
            onPress={this.restartGame}
            color="white"
            style={styles.restartButton}
          />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#644B62',
    alignItems: 'center',
    justifyContent: 'center',
  },
  restartButton: {
    bottom: 150
  },
  instructionText: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 150,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  pickText: {
    opacity: 0.4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  square: {
    flex: 1,
    position: 'absolute',
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    borderRadius: BORDER_RADIUS,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2'
  }
});
