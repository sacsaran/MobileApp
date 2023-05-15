import React ,{Component} from 'react';
import {View, Text, TextInput,StyleSheet,TouchableOpacity,Alert,ScrollView}from 'react-native';
import * as EmailValidator from 'email-validator';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation} from '@react-navigation/native';


export default class SignUPScreen extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            email: "",
            password: "",
            error: "", 
            confirmPAssword:"",
            FirstName:"",
            LastName:"",
            submitted: false
        }

       this._onPressButton = this._onPressButton.bind(this)
        //this.signup=this.signup.bind(this)
    }

    _onPressButton(){

        this.setState({submitted: true})
        this.setState({error: ""})

        if (!(this.state.FirstName)) {
            this.setState({ error: "Must enter first name" })
            return;
        }

        if (!(this.state.LastName)) {
            this.setState({ error: "Must enter last name" })
            return;
        }

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

        

        if (this.state.password!==this.state.confirmPAssword){
            this.setState({error:"Passwords do not match"})
            return;

       }

        
    //    console.log("Button clicked: " + this.state.email + " " + this.state.password)
    //    console.log("Validated and ready to send to the API")
       

        return fetch ("http://localhost:3333/api/1.0.0/user",
        {
        method:'Post',
        headers:{
        
          'Content-Type':'application/json'
        },
        body: JSON.stringify(
            
            {
          "first_name":this.state.FirstName,
          "last_name":this.state.LastName,
          "email":this.state.email,
          "password":this.state.password

            }
            )
        
        })
        .then((response)=>{
        if(response.status===201){
            console.log("API sent")
          return response.json()
        }else if(response.status===400){
        
          throw'Failed Validation';
        } else {
        
          throw'Something went wrong'
        }

        })
        .then((responseJson)=>{
        console.log("user Created with ID", responseJson);
        this.props.navigation.navigate("Login")
        })
        .catch((error)=>{
        
          console.log(error);
        })

        return;

        
    
    }


        render(){
    
    return (
    <View style={styles.container}>
 <View style={styles.formContainer}>

<Text>FirstName </Text>
    <TextInput
       style={{height: 40, borderWidth: 1, width: "100%"}}
       placeholder=""
       onChangeText={FirstName => this.setState({FirstName})}
       defaultValue={this.state.FirstName}
    />

    <Text>LastName</Text>
    <TextInput
       style={{height: 40, borderWidth: 1, width: "100%"}}
       placeholder=""
       onChangeText={LastName => this.setState({LastName})}
       defaultValue={this.state.LastName}
    />


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
    
    <View style={styles.confirmPAssword}></View>
    <Text>confirmPAssword</Text>

    <TextInput
     style={{height: 40, borderWidth: 1, width: "100%"}}
     placeholder="Comfirm Password"
     onChangeText={confirmPAssword=> this.setState({confirmPAssword})}
     defaultValue={this.state.password}
     secureTextEntry
     />

    <>

     {this.state.submitted && !this.state.password &&
     <Text style={styles.error}>*Password is required</Text>
    }
    </>


    <View style={styles.signup}>
       <TouchableOpacity onPress={this._onPressButton}>
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


     <View style={styles.signup}></View>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
         <View style={styles.button}>
           <Text style={styles.buttonText}>Login Instead</Text>
          </View>
      </TouchableOpacity> 


        

    <>
     {this.state.error &&
    <Text style={styles.error}>{this.state.error}</Text>
    }
     </>
    </View>
    </View>
    
    )
    }
     
}  




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
        FirstName:{

            marginBottom: 5

        },

        LastName:{

            marginBottom: 5

        },

        email:{
            marginBottom: 5
            
          },

        password:{
          marginBottom: 10
        },

        
        confirmPAssword:{
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