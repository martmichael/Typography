/**
* This is the Search file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Container, Content, View, Header, Body, Icon, Item, Input, Thumbnail, Button, Right, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Product from '../component/Product';

export default class Search extends Component {
  constructor(props) {
      super(props);
      this.state = {
        searchText: '',
        items: []
      };
  }

  componentWillMount() {
    if(this.props.searchText) {
      this.setState({searchText: this.props.searchText});
      this.search(this.props.searchText);
    }
  }

  render() {
    return(
      <Container style={{backgroundColor: '#fdfdfd'}}>
        <Header
          searchBar
          rounded
          style={{backgroundColor: Colors.navbarBackgroundColor}}
          backgroundColor={Colors.navbarBackgroundColor}
          androidStatusBarColor={Colors.statusBarColor}
          noShadow={true}
        >
            <Item>
              <Button transparent onPress={() => Actions.pop()}>
                <Icon name="ios-close" size={32} style={{fontSize: 32}} />
              </Button>
              <Input
                placeholder="Search..."
                value={this.state.searchText}
                onChangeText={(text) => this.setState({searchText: text})}
                onSubmitEditing={() => this.search(this.state.searchText)}
                style={{marginTop: 9}}
              />
              <Icon name="ios-search" onPress={() => this.search(this.state.searchText)} />
            </Item>
          </Header>
          {this.state.items.length <=0 ?
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="ios-search" size={38} style={{fontSize: 38, color: '#95a5a6', marginBottom: 7}} />
              <Text style={{color: '#95a5a6'}}>Search a product...</Text>
            </View>
            :
            <Content padder>
                  {this.renderResult()}
            </Content>
          }
      </Container>
    );
  }

  renderResult() {
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

  search(text) {
    var searchResult = [
        {id: 1, title: 'BUSINESS CARDS', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'https://www.solopress.com/thumbnails/0/8554/48/business-cards-laminated1.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 2, title: 'DOCUMENTS', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'http://www.upsctoday.com/wp-content/uploads/2018/05/Documents.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 15, title: 'PHOTOS', categoryId: 5, categoryTitle: 'MEN', price: '16$', image: 'https://cewe-photoworld.com/wp-content/uploads/2014/06/photo_prints_fan.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 11, title: 'CALENDARS', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'https://sc01.alicdn.com/kf/UT8vgJLXBRXXXagOFbXg/A3-Custom-Spiral-Monthly-Wall-Calendar-Planner.jpg_350x350.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 22, title: 'FLYERS', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'https://edinburghbanners.co.uk/wp-content/uploads/2016/07/Edinburgh-Banners-Flyers-a5.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 100, title: 'POSTCARDS', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: 'https://static1.squarespace.com/static/5771709e893fc09ddd54f8ba/5785674f3e00be94f0362e7f/57e3522203596ee89c1037f0/1474515532157/postcards3.png?format=500w', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 215, title: 'BOOKLETS', categoryId: 5, categoryTitle: 'MEN', price: '12$', image: 'https://static3.uprinting.com/product-page/110014/active/jpeg/20160504bulkbooklets_450x450.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 12, title: 'LEAFLETS', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'https://www.entuk.org/sites/default/files/FullSizeRender_0.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
    ];
    this.setState({items: searchResult});
  }

}
