import React, { Component} from 'react';
import { Text, View, Image, StyleSheet, Button, Alert, ScrollView, FlatList} from 'react-native';
import Greeting from './Greeting';
import PizzaTranslator from './Pizza';

export default class LotsOfGreetings extends Component {

  render() {
    return (
	    <View style={styles.container}>
	    	<Greeting style={styles.text} name='Carl' />
	    	<Greeting name='Shan' />
        <PizzaTranslator />
        <Button
          onPress={() => Alert.alert("You tapped me!")}
          title="Press Me"
          color="#841584" />
        <ScrollView horizontal={true}>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
        </ScrollView>
        <FlatList style={styles.flatList}
          data={[
            {key: 'Carl'},
            {key: 'Harrison'}
          ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
          />
	    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
	text: {
		color: 'blue',
		fontSize: 30,
		fontWeight: 'bold'
	},
  flatList: {
    flex: 1,
    paddingTop: 22
  }
});
