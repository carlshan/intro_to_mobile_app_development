import {
  StyleSheet,
  Image,
} from 'react-native';
import React, { Component } from 'react';

export default class Piece extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let img;
    if (this.props.pieceType == "X") {
      img = <Image style={styles.piece} source={require('../images/X.png')} />
    } else if (this.props.pieceType == "O"){
      img = <Image style={styles.piece} source={require('../images/O.png')} />
    } else {
      img = <Image style={styles.piece} />
    }
    return (
      img
    )
  }
}


const styles = StyleSheet.create({
  piece: {
    height: 50,
    width: 50
  }
});
