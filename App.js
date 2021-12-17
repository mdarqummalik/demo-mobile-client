import 'react-native-gesture-handler';
import React  from "react";
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from "./components/Login";
import Home from "./components/Home";
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Forgot from './components/forgot';
import Signup from './components/signup';
import CreateTicket from './components/createTicket';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerMenu = () => {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
        name="CreateTicket" 
        component={CreateTicket} />
        <Drawer.Screen 
        name="Home" 
        component={Home} />
       <Drawer.Screen 
        name="ScreenA" 
        component={Screen1} />
        <Drawer.Screen 
        name="ScreenB" 
        component={Screen2} />
        <Drawer.Screen 
        name="Logout" 
        component={Login}
        options={{
          header: () => null
        }} />
      </Drawer.Navigator>
      
  );
}


const Main = () => {
  return(
// main function
    <View style={{flex:1}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
           <Stack.Screen
              name="LoginScreen"
              component={Login}
              options={{
                header: () => null
              }}
            />  
            <Stack.Screen
              name="ForgotScreen"
              component={Forgot}
              options={{
                header: () => null
              }}
            /> 
            <Stack.Screen
              name="SignupScreen"
              component={Signup}
              options={{
                header: () => null
              }}
            /> 
           <Stack.Screen
             name="HomeScreen"
             component={DrawerMenu}
             options={{
              header: () => null
            }}
           />  
           
          </Stack.Navigator>
        </NavigationContainer>
    </View>
  )
}

export default Main;