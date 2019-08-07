import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import { SearchBar,Icon } from 'react-native-elements';
import { Constants } from 'expo';
import { SliderBox } from 'react-native-image-slider-box';
import Categories from '../components/Categories'



export default class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
     
      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree'
      ]
    };
  }
  updateSearch = search => {
    this.setState({ search });
  };
  render(){
  return (
    <View>
        <View style={styles.statusBar} />
       <View >
        <SearchBar
          inputContainerStyle={{ backgroundColor: 'white' }}
          containerStyle={{ backgroundColor: '#F3703C' }}
          value={this.state.search}
          onChange={this.updateSearch}
          placeholderTextColor={'#F3703C'}
          placeholder={'Search products'}
          searchIcon={<Icon
            name='search'
            type='font-awesome'
            color='#F3703C'
          />}
        />
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <Layout style={styles.container}>
        <SliderBox images={this.state.images} />
        <Categories/>
       
          <Button>BUTTON</Button>
        
        </Layout>
      </ScrollView>
    </View>
  );
}
}
HomeScreen.navigationOptions = {
  header:  null ,
};


const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#F3703C",
    height: Constants.statusBarHeight,
  },
  container: {

  },
 
  text: {
    marginVertical: 16,
  },
});
