import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('HomeScreen');
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
            <TextInput
              style={styles.uname}
              label="username"
              placeholder="  Enter username here"
            />
          </View>
          <View>
            <TextInput
              style={styles.pword}
              label="password"
              placeholder="   Enter password here"
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
              onPress={onPressHandler}
              style={styles.button}>
              <Text style={styles.btnText}>Login</Text>
            </Button>
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
