import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default class PlaceMap extends Component {
  constructor() {
    super()
    this.renderMarkers = this.renderMarkers.bind(this)
  }

  renderMarkers() {
    let allMarkers = this.props.screenProps.markers
    let markerComponents = []

    for (let i = 0; i < allMarkers.length; i++ ) {
      let marker = allMarkers[i]
      let markerComponent = <Marker
                              key={marker.title}
                              title={marker.title}
                              description={marker.description}
                              coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                            />
      markerComponents.push(markerComponent)
    }
    return markerComponents
  }

  render() {
    return (
      <MapView style={styles.map}
        initialRegion={{
          latitude: 37.545135,
          longitude: -122.299969,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
          mapType: 'standard',
          title: "Nueva School"
        }}
        >
        {this.renderMarkers()}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});
