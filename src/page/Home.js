/**
* This is the Home page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, View, Button, Left, Right, Icon, Card, CardItem, cardBody } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import SideMenu from '../component/SideMenu';
import SideMenuDrawer from '../component/SideMenuDrawer';
import CategoryBlock from '../component/CategoryBlock';


export default class Home extends Component {
  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>
          <Icon name='ios-menu-outline' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button onPress={() => Actions.search()} transparent>
          <Icon name='ios-search-outline' />
        </Button>
        <Button onPress={() => Actions.cart()} transparent>
          <Icon name='ios-cart' />
        </Button>
      </Right>
    );
    return(
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
          <Container>
            <Navbar left={left} right={right} title="TYPOGRAPHY" />
            <Content>
              {this.renderCategories()}
            </Content>
          </Container>
      </SideMenuDrawer>
    );
  }

  renderCategories() {
    let cat = [];
    for(var i=0; i<categories.length; i++) {
      cat.push(
        <CategoryBlock key={categories[i].id} id={categories[i].id} image={categories[i].image} title={categories[i].title} />
      );
    }
    return cat;
  }

}

var categories = [
  {
    id: 1,
    title: 'BUSINESS CARDS',
    image: 'https://www.solopress.com/thumbnails/0/8554/48/business-cards-laminated1.jpg'
  },
  {
    id: 2,
    title: 'DOCUMENTS',
    image: 'http://www.upsctoday.com/wp-content/uploads/2018/05/Documents.jpg'
  },
  {
    id: 3,
    title: 'PHOTOS',
    image: 'https://cewe-photoworld.com/wp-content/uploads/2014/06/photo_prints_fan.jpg'
  },
  {
    id: 4,
    title: 'FLYERS',
    image: 'https://edinburghbanners.co.uk/wp-content/uploads/2016/07/Edinburgh-Banners-Flyers-a5.jpg'
  }
];
