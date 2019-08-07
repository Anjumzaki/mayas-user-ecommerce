import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet
  
} from 'react-native';
import { Card,Icon,Button } from 'react-native-elements';
export default class MyListItem extends React.PureComponent {

  render() {
    const textColor = this.props.selected ? 'red' : 'black';
    return (

      <View style={{ width: 200,borderColor:'#F3703C' }}>
        <Card
        borderRadius={20}
          image={{uri:this.props.img}}>
          <Text >
          {this.props.title}
          </Text>
          <Text style={{ marginBottom: 10 }}>
          {this.props.title}
          
          </Text>
         <Icon name='plus-circle' type='font-awesome' color='#F3703C' />
        </Card>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#F3703C",
  },
  container: {

  },
 
  text: {
    marginVertical: 16,
  },
});