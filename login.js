         
import React, {Component} from 'react'; 
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as EmailValidator from 'email-validator';
import TabNav from './TabNav';
import asyncStorage from '@react-native-async-storage/async-storage';

export default class Login extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            email: "",
            password: "",
            error: "", 
            submitted: false
        }

        this._onPressButton = this._onPressButton.bind(this)
    }


    _onPressButton(){
        this.setState({submitted: true})
        this.setState({error: ""})

        if(!(this.state.email && this.state.password)){
            this.setState({error: "Must enter email and password"})
            return;
        }

        if(!EmailValidator.validate(this.state.email)){
            this.setState({error: "Must enter valid email"})
            return;
        }

        const PASSWORD_REGEX = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
        if(!PASSWORD_REGEX.test(this.state.password)){
            this.setState({error: "Password isn't strong enough (One upper, one lower, one special, one number, at least 8 characters long)"})
            return;
        }

        return fetch ("http://localhost:3333/api/1.0.0/login",
{
method:'Post',
headers:{
  'Content-Type':'application/json'
},
body: JSON.stringify(
  
  {
            "email": this.state.email,
            "password": this.state.password
            }

  )
})
.then((response)=>{
if(response.status===200){
  return response.json()
}else if(response.status===400){

  throw'invalid email or password';
} else {

  throw'Something went wrong'
}
})
.then(async(responseJson)=>{
console.log(responseJson);

try{

await asyncStorage.setItem("whatsthat_user_id",responseJson.id)
await asyncStorage.setItem("whatsthat_session_token",responseJson.token)
this.setState({"submitted":false});
this.props.navigation.navigate("TabNav")
}catch{
  throw "something went wromg"
}
         console.log("Button clicked: " + this.state.email + " " + this.state.password)
         console.log("Validated and ready to send to the API")

  })}


        render(){
    
    return (
    <View style={styles.container}>

<View style={styles.formContainer}>


    <Text>Email: </Text>

    <TextInput
       style={{height: 40, borderWidth: 1, width: "100%"}}
       placeholder="Enter email"
       onChangeText={email => this.setState({email})}
       defaultValue={this.state.email}
    />
    
    <>
    {this.state.submitted && !this.state.email &&
     <Text style={styles.error}>*Email is required</Text>}
    </>

<View style={styles.password}></View>
    <Text>Password: </Text>

    <TextInput
     style={{height: 40, borderWidth: 1, width: "100%"}}
     placeholder="Enter password"
     onChangeText={password => this.setState({password})}
     defaultValue={this.state.password}
     secureTextEntry
     />
    
    <>
     {this.state.submitted && !this.state.password &&
     <Text style={styles.error}>*Password is required</Text>
    }
    </>

    <View style={styles.loginbtn}>
       <TouchableOpacity onPress={this._onPressButton}>
         <View style={styles.button}>
           <Text style={styles.buttonText}>Login</Text>
           
          </View>
      </TouchableOpacity>
    </View>


      <View style={styles.signup}></View>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUPScreen')}>
         <View style={styles.button}>
           <Text style={styles.buttonText}>SignUP</Text>
          </View>
      </TouchableOpacity> 

    </View>

    <>
     {this.state.error &&
    <Text style={styles.error}>{this.state.error}</Text>
    }
     </>
    </View>

    
    )
        };
            
        };



    const styles = StyleSheet.create({
        container: {
          flex: 1,
          width: "80%",
          alignItems: "stretch",
          justifyContent: "center"
        },
        formContainer: {
      
        },


        image:{
         flex:1,
         justifyContent:'center',
        },
        text: {
            color: 'white',
            fontSize: 42,
            lineHeight: 84,
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: '#000000c0',
          },

        email:{
          marginBottom: 5
          
        },
        password:{
          marginBottom: 10
        },
        loginbtn:{
      
        },
        signup:{
          justifyContent: "center",
          textDecorationLine: "underline"
        },
                button: {
          marginBottom: 30,
          backgroundColor: '#2196F3'
        },
        buttonText: {
          textAlign: 'center',
          padding: 20,
          color: 'white'
        },
        error: {
            color: "red",
            fontWeight: '900'
        }
      });

        