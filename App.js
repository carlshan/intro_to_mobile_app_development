import React from 'react';
import { StyleSheet, Image, Text, View, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

// This should probably render the board
// Board holds state, which are the positions of the circles and squares
//

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Board />
      </View>
    );
  }
}

class Board extends React.Component {
  // return (<Image
  //   resizeMode='contain'
  //   source={require('./images/board.png')}
  //   />)

  render() {
    return (
      <TouchableHighlight >
        <View style={styles.tile}>
          <Text style={styles.pickText}> Touch </Text>
        </View>
      </TouchableHighlight>
    )
  }

}


class Piece extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.pieceType == "X") {
      return (
        <Image
        style={styles.piece}
        source={require('./images/X.png')} />
      )
    } else {
    return (
      <Image
        style={styles.piece}
        source={require('./images/O.png')} />
    )
  }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  piece: {
    height: 50,
    width: 50
  },
  pickText: {
    opacity: 0.4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tile: {
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2'
  },
  touchable: {
    borderWidth: 1,
    borderColor: 'black',
  }
});
