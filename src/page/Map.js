/**
* This is the Store finder page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Container, Content, View, Icon, Left, Button, Item, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';

// Our custom files and classes import
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import Colors from '../Colors';


export default class Map extends Component {
  map = null;

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 50.440252,
        longitude: 30.545670,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      marker: {
        title: 'Kyiv typography',
        address: 'Levandovska str. 6',
        coord: {
          latitude: 50.440252,
          longitude: 30.545670
        }
      }
    };
  }

  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button transparent onPress={() => Actions.pop()}>
          <Icon name="ios-close" size={38} style={{fontSize: 38}} />
        </Button>
      </Left>
    );
    return(
      <Container style={{backgroundColor: '#fdfdfd'}}>
          <MapView
            ref={map => { this.map = map }}
            region={this.state.region}
            style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
          >
          <MapView.Marker
              title={this.state.marker.title}
              description={this.state.marker.address}
              coordinate={this.state.marker.coord}
            />
          </MapView>
          <Navbar left={left} title="FIND US" />
      </Container>
    );
  }


}
