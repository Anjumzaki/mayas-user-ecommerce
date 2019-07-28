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
import { Header } from 'react-native-elements'
import { Button, Layout, Text } from 'react-native-ui-kitten';
import { SearchBar } from 'react-native-elements';
import { Constants } from 'expo';
import { Icon } from 'react-native-elements'


import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  state = {
    search: '',
  };
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
          <Text style={styles.text} category='h4'>Welcome to UI Kitten</Text>
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
