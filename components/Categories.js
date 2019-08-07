import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
  Dimensions,
  FlatList
} from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import {Font } from 'expo';
import MyListItem from './MyListItem'


export default class Categories extends React.Component {
    async componentWillMount() {
     await  Font.loadAsync({
          'default': require('../assets/fonts/Montserrat-Medium.ttf'),
        });
        this.setState({ fontLoaded: true });
      }
      _renderItem = ({item}) => (
        <MyListItem
          id={item.key}
          title={item.label}
          img={item.img}
        />
      );
  constructor(props) {
    super(props);
    this.state = {
        fontLoaded:false,
       categ:[{img:'https://source.unsplash.com/WLUHO9A_xik/200x200',label:'Mobile',link:'mobileSearch',key:0},
      {img:'https://source.unsplash.com/user/erondu/200x200',label:'Computers',link:'computerSearch',key:1},
      {img:'https://source.unsplash.com/WLUHO9A_xik/200x200',label:'men',link:'mobileSearch',key:2},
      {img:'https://source.unsplash.com/WLUHO9A_xik/200x200',label:'men',link:'mobileSearch',key:3},
      {img:'https://source.unsplash.com/WLUHO9A_xik/200x200',label:'men',link:'mobileSearch',key:4},
      {img:'https://source.unsplash.com/WLUHO9A_xik/200x200',label:'men',link:'mobileSearch',key:5}],
    };
  }
  render(){
    const dimensions = Dimensions.get('window');
    const imageWidth = dimensions.width;
    const data = [{img:'https://source.unsplash.com/1024x768/?nature',label:'Mobile',link:'mobileSearch',key:0},
    {img:'https://source.unsplash.com/user/erondu/200x200',label:'Computers',link:'computerSearch',key:1},
    {img:'https://source.unsplash.com/WLUHO9A_xik/200x200',label:'men',link:'mobileSearch',key:2},
    {img:'https://source.unsplash.com/WLUHO9A_xik/200x200',label:'men',link:'mobileSearch',key:3},
    {img:'https://source.unsplash.com/WLUHO9A_xik/200x200',label:'men',link:'mobileSearch',key:4},
    {img:'https://source.unsplash.com/WLUHO9A_xik/200x200',label:'men',link:'mobileSearch',key:5}] 
  return (
    <View>
         <View style={styles.text}>
          {
    this.state.fontLoaded ? (
      <Text style={{ fontFamily: 'default', textAlign:'center'}}>
        Hello, world!
      </Text>
    ) : null
  }</View>
      <FlatList data={data}
       style={styles.container}
       renderItem={this._renderItem}
       numColumns={2}
      />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
      flex:1
  },
 
  text: {
    marginVertical: 16,
   
  },
});
