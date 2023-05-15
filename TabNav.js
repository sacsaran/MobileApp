
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React, { Component } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import ContactScreen from './ContactAll/Contact';
// import Tabchat from './ChatNav';
// import Profile from './CameraScreen/Profile';
// import Logout from './logout';
// //import ContactScreen from './ContactAll/Contact';
// import ContactsListScreen from './ContactAll/ContactListScreen';
// import BlockedContactScreen from './ContactAll/BlockedContactScreen';

// const Tab = createBottomTabNavigator();

// export default class TabNav extends Component {
//   render() {
//     return (     
//         <Tab.Navigator
//           tabBarPosition="bottom"
//           tabBarOptions={{
//             style: {
//               backgroundColor: 'violet',
//             },
//             labelStyle: {
//               fontSize: 20,
//               fontWeight: 'bold',
//               color: 'white',
//             },
//           }}
//         >
//           <Tab.Screen name="Profile" component={Profile} />
//           <Tab.Screen name="ContactScreen" component={ContactScreen} />
//           <Tab.Screen name="ContactsListScreen"component={ContactsListScreen}/>
//           <Tab.Screen name="TabChat" component={Tabchat} />
//           <Tab.Screen name="Setting" component={Logout} />
//           <Tab.Screen name="BlockedContactScreen" component={BlockedContactScreen} />
//         </Tab.Navigator>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'violet',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });


// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React, { Component } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import ContactScreen from './ContactAll/Contact';
// import Tabchat from './ChatNav';
// import Profile from './CameraScreen/Profile';
// import Logout from './logout';
// import ContactsListScreen from './ContactAll/ContactListScreen';
// import BlockedContactScreen from './ContactAll/BlockedContactScreen';

// const Tab = createBottomTabNavigator();

// export default class TabNav extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Tab.Navigator
//           tabBarOptions={{
//             style: styles.tabBar,
//             labelStyle: styles.tabLabel.tabname,
//           }}
//         >
//           <Tab.Screen
//             name="Profile"
//             component={Profile}
//             options={{
//               tabBarLabel: 'Profile',
//             }}
//           />
//           <Tab.Screen
//             name="ContactScreen"
//             component={ContactScreen}
//             options={{
//               tabBarLabel: 'Contacts',
//             }}
//           />
//           <Tab.Screen
//             name="ContactsListScreen"
//             component={ContactsListScreen}
//             options={{
//               tabBarLabel: 'Contact List',
//             }}
//           />
//           <Tab.Screen
//             name="TabChat"
//             component={Tabchat}
//             options={{
//               tabBarLabel: 'Chat',
//             }}
//           />
//           <Tab.Screen
//             name="Setting"
//             component={Logout}
//             options={{
//               tabBarLabel: 'Settings',
//             }}
//           />
//           <Tab.Screen
//             name="BlockedContactScreen"
//             component={BlockedContactScreen}
//             options={{
//               tabBarLabel: 'Blocked Contacts',
//             }}
//           />
//         </Tab.Navigator>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   tabBar: {
//     backgroundColor: '#3F51B5',
//     borderTopColor: '#FFFFFF',
//     borderTopWidth: 1,
//   },
//   tabLabel: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     margin: 8,
//   },
// });


// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React, { Component } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import ContactScreen from './ContactAll/Contact';
// import Tabchat from './ChatNav';
// import Profile from './CameraScreen/Profile';
// import Logout from './logout';
// import ContactsListScreen from './ContactAll/ContactListScreen';
// import BlockedContactScreen from './ContactAll/BlockedContactScreen';

// const Tab = createBottomTabNavigator();

// export default class TabNav extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Tab.Navigator
//           tabBarOptions={{
//             style: styles.tabBar,
//             labelStyle: styles.tabLabel,
//           }}
//         >
//           <Tab.Screen
//             name="Profile"
//             component={Profile}
//             options={{
//               tabBarLabel: 'Profile',
//             }}
//           />
//           <Tab.Screen
//             name="ContactScreen"
//             component={ContactScreen}
//             options={{
//               tabBarLabel: 'Contacts',
//             }}
//           />
//           <Tab.Screen
//             name="ContactsListScreen"
//             component={ContactsListScreen}
//             options={{
//               tabBarLabel: 'Contact List',
//             }}
//           />
//           <Tab.Screen
//             name="TabChat"
//             component={Tabchat}
//             options={{
//               tabBarLabel: 'Chat',
//             }}
//           />
//           <Tab.Screen
//             name="Setting"
//             component={Logout}
//             options={{
//               tabBarLabel: 'Settings',
//             }}
//           />
//           <Tab.Screen
//             name="BlockedContactScreen"
//             component={BlockedContactScreen}
//             options={{
//               tabBarLabel: 'Blocked Contacts',
//             }}
//           />
//         </Tab.Navigator>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//   flex: 1,
//   backgroundColor: 'red', // Change to your desired background color
//   },
//   tabBar: {
//   backgroundColor: 'blue', // Change to your desired tab bar color
//   borderTopColor: 'white', // Change to your desired top border color
//   borderTopWidth: 1,
//   },
//   tabLabel: {
//   fontSize: 14,
//   fontWeight: 'bold',
//   color: 'white', // Change to your desired tab label color
//   margin: 8,
//   tabName: {
//   color: 'white', // Change to your desired tab name color
//   },
//   },
//   });
  
  
  
  
  
  
/// working code: 


// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React, { Component } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import ContactScreen from './ContactAll/Contact';
// import Tabchat from './ChatNav';
// import Profile from './CameraScreen/Profile';
// import Logout from './logout';
// import ContactsListScreen from './ContactAll/ContactListScreen';
// import BlockedContactScreen from './ContactAll/BlockedContactScreen';
// import ChatNav from './ChatNav';
// const Tab = createBottomTabNavigator();

// export default class TabNav extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//           <Tab.Navigator
//             screenOptions={{
//               tabBarLabelStyle: {
//                 fontSize: 14,
//                 fontWeight: 'bold',
//                 color: 'white',
//                 margin: 8,
//               },
//               tabBarStyle: {
//                 display: 'flex',
//               },
//             }}
//             tabBarOptions={{
//               style: styles.tabBar,
//               labelStyle: styles.tabLabel,
//             }}
//           >
//             <Tab.Screen
//               name="Profile"
//               component={Profile}
//               options={{
//                 tabBarLabel: 'Profile',
//               }}
//             />
//             <Tab.Screen
//               name="ContactScreen"
//               component={ContactScreen}
//               options={{
//                 tabBarLabel: 'Contacts',
//               }}
//             />
//             <Tab.Screen
//               name="ContactsListScreen"
//               component={ContactsListScreen}
//               options={{
//                 tabBarLabel: 'Contact List',
//               }}
//             />
//              <Tab.Screen
//               name="ChatNav"
//               component={ChatNav}
//               options={{
//                 tabBarLabel: 'Chat',
//               }}
//             /> 
//             <Tab.Screen
//               name="Setting"
//               component={Logout}
//               options={{
//                 tabBarLabel: 'Settings',
//               }}
//             />
//             <Tab.Screen
//               name="BlockedContactScreen"
//               component={BlockedContactScreen}
//               options={{
//                 tabBarLabel: 'Blocked Contacts',
//               }}
//             />
//           </Tab.Navigator>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'red', // Change to your desired background color
//   },
//   tabBar: {
//     backgroundColor: 'blue', // Change to your desired tab bar color
//     borderTopColor: 'white', // Change to your desired top border color
//     borderTopWidth: 1,
//   },
//   tabLabel: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: 'white', // Change to your desired tab label color
//     margin: 8,
//     tabName: {
//       color: 'white', // Change to your desired tab name color
//     },
//   },
// });


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ContactScreen from './ContactAll/Contact';
import Tabchat from './ChatNav';
import Profile from './CameraScreen/Profile';
import Logout from './logout';
import ContactsListScreen from './ContactAll/ContactListScreen';
import BlockedContactScreen from './ContactAll/BlockedContactScreen';
import ChatNav from './ChatNav';

const Tab = createBottomTabNavigator();

export default class TabNav extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: 'bold',
              color: 'white',
              margin: 8,
            },
            tabBarStyle: {
              backgroundColor: '#f4511e',
              borderTopWidth: 1,
              borderTopColor: '#ccc',
            },
          }}
        >
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
            }}
          />
          <Tab.Screen
            name="ContactScreen"
            component={ContactScreen}
            options={{
              tabBarLabel: 'Contacts',
            }}
          />
          <Tab.Screen
            name="ContactsListScreen"
            component={ContactsListScreen}
            options={{
              tabBarLabel: 'Contact List',
            }}
          />
          <Tab.Screen
            name="ChatNav"
            component={ChatNav}
            options={{
              tabBarLabel: 'Chat',
            }}
          />
          <Tab.Screen
            name="Setting"
            component={Logout}
            options={{
              tabBarLabel: 'Settings',
            }}
          />
          <Tab.Screen
            name="BlockedContactScreen"
            component={BlockedContactScreen}
            options={{
              tabBarLabel: 'Blocked Contacts',
            }}
          />
        </Tab.Navigator>
        
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#f2f2f2',
   backgroundColor: '#fff',
    paddingHorizontal:8,
    paddingTop: 20,
  },
});
