import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    setInterval(() => {
        this.setState(previousState => {
          return {showText: !previousState.showText };
        }
      )
    }, 1000);
  }

	render() {
    let display = this.state.showText ? this.props.name : ' ';
		return (
			<Text style={this.props.style}>{display}</Text>
		)
	}
}
