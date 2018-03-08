import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import PlaceMap from './components/PlaceMap'
import AddPlace from './components/AddPlace'

// TODO: Center the map to be wherever the new latitude and longitude is
// TODO: Parse the input to ensure it's not empty and also valid

const TabNav = TabNavigator(
  {
    FavoritePlaces: { screen: PlaceMap },
    AddPlace: { screen: AddPlace },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'FavoritePlaces') {
          let suffix = focused == true ? '' : '-outline';
          iconName = 'ios-map' + suffix;

        } else if (routeName === 'AddPlace') {
          let suffix = focused == true ? '' : '-outline';
          iconName = 'ios-add-circle' + suffix;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        // You can see the full list of icons here: https://ionicframework.com/docs/ionicons/
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)

export default class App extends Component {
  constructor() {
    super()
    this.updateMarkers = this.updateMarkers.bind(this)
    this.state = {
      markers: []
    }
  }

  updateMarkers(marker) {
    this.setState({
      markers: [marker, ...this.state.markers]
    })
  }

  render() {
    return(
      <TabNav
        screenProps={{markers: this.state.markers, updateMarkers: this.updateMarkers}}
      />
  )
  }
}
