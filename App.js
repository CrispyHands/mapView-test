import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: 36.5001857,
      longitude: 138.3487105,
    },
    markers: [
      {
        key: 1,
        latlng: {
          latitude: 35.1681151,
          longitude: 139.8765804
        },
        title: 'Nagoya',
        subtitle: 'Nagoya, Aichi Prefecture, Japan'
      },
      {
        key: 2,
        latlng: {
          latitude: 35.7022121,
          longitude: 139.7722703
        },
        title: 'Akihabara',
        subtitle: 'Taito,Tokyo 110-0006'
      },
      {
        key: 3,
        latlng: {
          latitude: 37.3838074,
          longitude: 1395450076
        },
        title: 'Mt. Asahi',
        subtitle: 'Nogiwa Shinden, Shimogou, Minamiazu, Fukushima Prefecture 969-5341, Japan'
      },
      ,
      {
        key: 4,
        latlng: {
          latitude: 36.5262757,
          longitude: 139.2200619
        },
        title: 'Mount Akagi',
        subtitle: 'Fujimimachi Akagisan, Maebashi, Gunma Prefecture 371-0101, Japan'
      }
    ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
          <Text style={styles.textHeader}>
            Peta Perjalanan ke Jepang
            </Text>
        </View>
        <View style={styles.contMaps}>
          <MapView
            style={styles.map}
            region={this.state.region}
          >
            {this.state.markers.map(mark => (
              <Marker
                key={mark.key}
                coordinate={mark.latlng}
                title={mark.title}
                description={mark.subtitle}
              />
            ))}
          </MapView>
        </View>
        <View style={styles.contFooter}>
          <Text style={styles.textFooter}> Dewaman </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
    flex: 1
  },
  contHeader: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps: {
    flex: 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
