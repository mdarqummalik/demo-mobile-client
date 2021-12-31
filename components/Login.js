import React,{useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import {Button} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';

const Login = ({navigation}) => {

      const [getEmail, setEmail] = useState('');
      const [getPassword, setPassword] = useState(null);
  
  
    let  UserEmail, UserPassword;
  
    const OnPressLogin = () => {
     
      UserEmail = getEmail;
      UserPassword = getPassword;
  
      if ( UserEmail && UserPassword !== '') {
        function validateEmail(email) {
          return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          );
        }
  
        if (validateEmail(UserEmail)) {
          // Send a POST request
          const params = new URLSearchParams();
          params.append('email', UserEmail);
          params.append('password', UserPassword);
  
          const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          };
  
          axios
            .post(
              'http://restapi.adequateshop.com/api/authaccount/login',
              params,
              config,
            )
            .then(function (response) {
if(response.data !== null &&  response.data !== 0){
  ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
  navigation.navigate("HomeScreen")
 
}else{
  ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
  
}

              
            })
            .catch(function (error) {
              ToastAndroid.show(
                 error,
                ToastAndroid.SHORT,
              );
            });
        } else {
          ToastAndroid.show('Please enter valid email', ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show('All feilds is required ', ToastAndroid.SHORT);
      }
    };





  const onPressForgot = () => {
    navigation.navigate('ForgotScreen')
  };
  const onPressSignup = () => {
    navigation.navigate('SignupScreen')
  };



  return (
    <View>
      <Image
        source={require('../assets/bg.png')}
        style={{width: 415, height: 800, position: 'absolute'}}
      />
      <View style={styles.img}>
        <Image
          source={require('../assets/pic.png')}
          style={{width: 150, height: 150}}
        />
      </View>
      <KeyboardAwareScrollView>
        <View style={styles.section}>
          <View>
            <Text
              style={{
                fontSize: 33,
                marginLeft: 10,
                color: 'white',
                fontWeight: '400',
                color: '#757575',
                fontFamily: 'Roboto',
                padding: 3,
              }}>
             Client Login
            </Text>
          </View>
          <View>         
             <View>
            
          </View>
          <View>
            <TextInput
              style={styles.pword}
              label="password"
              placeholder="   Enter email here"
              onChangeText={setEmail}
              value={getEmail}
            />
          </View>
          <View>
            <TextInput
              style={styles.pword}
              label="password"
              placeholder="   Enter password here"
              onChangeText={setPassword}
              value={getPassword}
            />
          </View>
          <View style={{alignItems: 'flex-end', marginRight: 12, padding: 10}}>
            <TouchableOpacity>
              <Text onPress={onPressForgot} style={{color: '#757575'}}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <Button
              mode="contained"
              onPress={OnPressLogin}
              style={styles.button}>
              <Text style={styles.btnText}>Login</Text>
            </Button>
          </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <TouchableOpacity>
              <Text onPress={onPressSignup} style={{color: '#757575'}}>
                Don't have an account? Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    width: 1000,
    height: 1000,
  },
  body: {},
  img: {
    alignItems: 'center',
    marginTop: 50,
  },
  uname: {
    margin: 6,
    marginTop: 10,
    borderRadius: 25,
    backgroundColor: '#CFD8DC',
    width: 375,
    marginLeft: 10,
    padding: 10,
  },
  pword: {
    margin: 6,
    borderRadius: 25,
    backgroundColor: '#CFD8DC',
    width: 375,
    marginLeft: 10,
    padding: 10,
  },
  button: {
    height: 48,
    margin: 6,
    marginTop: 6,
    backgroundColor: '#039BE5',
    borderRadius: 25,
    width: 370,
  },
  btnText: {
    fontSize: 22,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  section: {
    height: 320,
    width: 395,
    marginLeft: 8,
    marginTop: 140,
  },
});

export default Login;