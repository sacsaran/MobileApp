import * as React from 'react'
import {NavigationContainer}from '@react-navigation/native';
import {createStackNavigation}from '@react-navigation/stack';

import login from './Components/login';
import SignUP from './Components/SignUp';

const stack=createStackNavigation();

const Navigation =props=>{

return(

<NavigationContainer>
<stack.navigator initailRouteName='Home'>
<stack.screen name='Home' component={login}options={{headerShown:false}}/>
<stack.screen name= 'SignUp' component={SignUP}option={{headerShown:false}}/>
</stack.navigator>
</NavigationContainer>




) ;
};

export default navigation;

