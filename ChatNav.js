

// import React, {Component} from 'react'; 
// import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
//  import { createNativeStackNavigator} from '@react-navigation/native-stack';

// import allchat from './AllChat';
// import SingleChat from './SingleChat';

// const Stack = createNativeStackNavigator();

// export default class Tabchat extends Component{
//     render(){
//       return (
//     <Stack.Navigator
//     screenOptions={{
//       headerShown: false
//     }}
//     >
//         <Stack.Screen name="allchat" component={allchat} />
//         <Stack.Screen name="singlechat" component={SingleChat} />
//      </Stack.Navigator>
//       )
//     };
//   };

// const styles= StyleSheet.create({

// container:{
// flex:1,
// alignItems: 'center',
// justifyContent:'center',
// backgroundColor:'violet',
// },

// });



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatList from './ChatList';
import SingleChat from './SingleChat';


const Stack = createStackNavigator();

const ChatNav = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="ChatList" component={ChatList} options={{ title: 'Chats' }} />
        <Stack.Screen name="SingleChat" component={SingleChat} options={{ title: 'Chat' }} />

      </Stack.Navigator>
  );
};

export default ChatNav;

