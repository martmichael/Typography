/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Container, Content, View, Left, Right, Button, Icon, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import SideMenu from '../component/SideMenu';
import SideMenuDrawer from '../component/SideMenuDrawer';
import Product from '../component/Product';


export default class Category extends Component {
  constructor(props) {
      super(props);
      this.state = {
        items: []
      };
  }

  componentWillMount() {
    var products = [
        {id: 1, title: 'BUSINESS CARDS', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'https://www.solopress.com/thumbnails/0/8554/48/business-cards-laminated1.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 2, title: 'DOCUMENTS', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'http://www.upsctoday.com/wp-content/uploads/2018/05/Documents.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 15, title: 'PHOTOS', categoryId: 5, categoryTitle: 'MEN', price: '16$', image: 'https://cewe-photoworld.com/wp-content/uploads/2014/06/photo_prints_fan.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 11, title: 'CALENDARS', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'https://sc01.alicdn.com/kf/UT8vgJLXBRXXXagOFbXg/A3-Custom-Spiral-Monthly-Wall-Calendar-Planner.jpg_350x350.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 22, title: 'FLYERS', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'https://edinburghbanners.co.uk/wp-content/uploads/2016/07/Edinburgh-Banners-Flyers-a5.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 100, title: 'POSTCARDS', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: 'https://static1.squarespace.com/static/5771709e893fc09ddd54f8ba/5785674f3e00be94f0362e7f/57e3522203596ee89c1037f0/1474515532157/postcards3.png?format=500w', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 215, title: 'BOOKLETS', categoryId: 5, categoryTitle: 'MEN', price: '12$', image: 'https://static3.uprinting.com/product-page/110014/active/jpeg/20160504bulkbooklets_450x450.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 12, title: 'LEAFLETS', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'https://www.entuk.org/sites/default/files/FullSizeRender_0.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
    ];
    this.setState({items: products});
  }

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
          <Container style={{backgroundColor: '#fdfdfd'}}>
            <Navbar left={left} right={right} title={this.props.title} />
            <Content padder>
              {this.renderProducts()}
            </Content>
          </Container>
      </SideMenuDrawer>
    );
  }

  renderProducts() {
    let items = [];
    let stateItems = this.state.items
    for(var i=0; i<stateItems.length; i+=2 ) {
      if(stateItems[i+1]) {
        items.push(
          <Grid key={i}>
            <Product key={stateItems[i].id} product={stateItems[i]} />
            <Product key={stateItems[i+1].id} product={stateItems[i+1]} isRight />
          </Grid>
        );
      }
      else {
        items.push(
          <Grid key={i}>
            <Product key={stateItems[i].id} product={stateItems[i]} />
            <Col key={i+1} />
          </Grid>
        );
      }
    }
    return items;
  }
}
