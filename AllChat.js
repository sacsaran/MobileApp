

import React, {Component} from 'react'; 
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList } from 'react-native-gesture-handler';
//import TabNav from './Components/TabNav'

export default class AllChat extends Component{

    constructor(props){
    
        super(props);
    
        this.state={
    messages:[],
    loading:true,
    new_message:""
    
        }

    }

    renderMessage(item){
return (

<view style={this.getStyle(item.from)}>
<Text style={styles.message}>{item.msg}</Text>
</view>
)
}

getStyle(from) {
    return from === "me" ? styles.myMessage : styles.otherMessage;
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.chatWindow}>
          <FlatList
            data={this.state.messages}
            renderItem={({ item }) => this.renderMessage(item)}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <View style={styles.typeBox}>
          <TextInput placeholder="Enter a message...." />
        </View>
      </View>
    );
  }
}
 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'violet',
    },
    chatWindow: {
      flex: 1,
      alignSelf: 'stretch',
      padding: 10,
    },








    
    myMessage: {
      alignSelf: 'flex-end',
      backgroundColor: '#DCF8C5',
      borderRadius: 5,
      padding: 5,
      margin: 5,
    },
    otherMessage: {
      alignSelf: 'flex-start',
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      padding: 5,
      margin: 5,
    },




    message: {
      fontSize: 16,
    },
    typeBox: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      padding: 5,
      margin: 5,
    },
  });

  
  
  
  
  
  