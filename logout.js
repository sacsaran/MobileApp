         
import React, {Component} from 'react'; 
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Logout extends Component{

handleLogout=async()=>{
return fetch ("http://localhost:3333/api/1.0.0/logout",{

method: "post",
headers:{
    'X-Authorization': await AsyncStorage.getItem("whatsthat_session_token"),
}
})
.then(async(response)=>{
if(response.status===200){
    await AsyncStorage.removeItem("whasthat_session_token")
    await AsyncStorage.removeItem("whatsthat_user_id")
    this.props.navigation.navigate("Login")

}else if (response.status===401){
    console.log("unauthorised")
    await AsyncStorage.removeItem("whasthat_session_token")
    await AsyncStorage.removeItem("whatsthat_user_id")
    this.props.navigation.navigate("Login")
}else{
    throw "Something went Wrong"
}


})
.catch((error)=>{
this.setState({"error":error})
this.setState({"submitted":false});
})

}

    render(){
return(

  

<View style={styles.container}>
        <TouchableOpacity onPress={this.handleLogout} style={styles.button}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>

);


    }
}

const styles= StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'violet',
    },
    button: {
      backgroundColor: 'purple',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    }
  });