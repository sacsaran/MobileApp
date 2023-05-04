
// import { NavigationContainer } from '@react-navigation/native';
// //import { createNativeStackNavigator} from '@react-navigation/native-stack';
// import React, {Component}from 'react';
// import { View,StyleSheet } from 'react-native';
// import { createNativeStackNavigator} from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import TabNav from './Components/TabNav';
// import Login from './Components/login';
// import SignUPScreen from './Components/SignUp';
// import Tabchat from'./Components/chat';
// //import ProfileScreen from './Components/profile';


// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// export default class App extends Component{

//   render(){
//     return (
// <NavigationContainer>
//   <Stack.Navigator>
//       <Stack.Screen name="Login" component={Login}/>
//       <Stack.Screen name="TabNav" component={TabNav}/>
//       <Stack.Screen name="Tabchat" component={Tabchat}/>
//       <Tab.Screen name="SignUPScreen" component={SignUPScreen}/>
      

//       {/* <Stack.Screen name="profilescreen" component={ProfileScreen}/>  */}
//   </Stack.Navigator>
// </NavigationContainer>
//     );
//   }

// }


import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabNav from './Components/tabNav';
import Login from './Components/login';
import SignUPScreen from './Components/SignUp';
import Tabchat from'./Components/ChatNav';
import cameratakePicture from './Components/CameraTakePhoto';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#1c1c1c' },
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name="TabNav"
            component={TabNav}
            options={{ title: 'Tab Nav' }}
          />
          <Stack.Screen
            name="Tabchat"
            component={Tabchat}
            options={{ title: 'Chat' }}
          />
          <Tab.Screen
            name="SignUPScreen"
            component={SignUPScreen}
            options={{ title: 'Sign Up' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

