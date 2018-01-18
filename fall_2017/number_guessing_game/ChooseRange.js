import React, { Component} from 'react';
import { Text, TextInput, View, Button, StyleSheet} from 'react-native';

export default class ChooseRange extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{fontSize: 22}}> Please choose a range of numbers to guess between. </Text>
        </View>
        <View style={styles.choiceContainer}>
          <TextInput
            placeholder="Low"
            onSubmitEditing={this.props.handleLow}
          />
          <TextInput
            placeholder="High"
            onSubmitEditing={this.props.handleHigh}
          />
        </View>
        <View>
          <Button
            style={styles.button}
            title="Choose"
            onPress={this.props.chooseRange}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      justifyContent: 'space-around',
      alignItems: 'stretch',
    },
    choiceContainer: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'steelblue'
    }

  }
)
