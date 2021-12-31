import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TextInput, ToastAndroid} from 'react-native';
import {Button} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';

const Signup = () => {


  const [getName, setName] = useState('');
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState(null);


  let UserName, UserEmail, UserPassword;

  const OnPressRegister = () => {
    UserName = getName;
    UserEmail = getEmail;
    UserPassword = getPassword;

    if (UserName && UserEmail && UserPassword !== '') {
      function validateEmail(email) {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
      }

      if (validateEmail(UserEmail)) {
        // Send a POST request
        const params = new URLSearchParams();
        params.append('name', UserName);
        params.append('email', UserEmail);
        params.append('password', UserPassword);

        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        };

        axios
          .post(
            'http://restapi.adequateshop.com/api/authaccount/registration',
            params,
            config,
          )
          .then(function (response) {
            ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
           
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

  return (
    <View>
      <Image
        source={require('../assets/bg.png')}
        style={{width: 415, height: 800, position: 'absolute'}}
      />
      <View style={styles.img}>
        <Image
          source={require('../assets/signup.png')}
          style={{width: 180, height: 150}}
        />
      </View>
      <KeyboardAwareScrollView>
        <View style={styles.section}>
          <Text
            style={{
              fontSize: 25,
              marginLeft: 10,
              color: 'white',
              fontWeight: '400',
              color: '#757575',
              fontFamily: 'Roboto',
              padding: 3,
            }}>
            User Registration
          </Text>
          <View>
            <TextInput
              style={styles.form}
              placeholder="  Enter Your Name here"
              onChangeText={setName}
        value={getName}

            />
          </View>
          <View>
            <TextInput
              style={styles.form}
              placeholder="   Enter Your Email here"
              onChangeText={setEmail}
        value={getEmail}

            />
          </View>
          <View>
            <TextInput
              style={styles.form}
              label="password"
              placeholder="   Enter Your password here"
              onChangeText={setPassword}
        value={getPassword}

            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Button
              mode="contained"
              onPress={OnPressRegister}
              style={styles.button}>
              <Text style={styles.btnText}>Create New Account</Text>
            </Button>
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
  form: {
    margin: 6,
    marginTop: 10,
    borderRadius: 25,
    backgroundColor: '#CFD8DC',
    width: 375,
    marginLeft: 10,
    padding: 10,
  },
  button: {
    height: 48,
    marginTop: 8,
    backgroundColor: '#039BE5',
    borderRadius: 25,
    width: 370,
  },
  btnText: {
    fontSize: 20,
    fontWeight: '400',
    textTransform: 'capitalize',
    
  },
  section: {
    height: 320,
    width: 395,
    marginLeft: 8,
    marginTop: 150,
  },
});

export default Signup;
