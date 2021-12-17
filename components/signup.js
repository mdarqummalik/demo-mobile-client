import React from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';
import {Button} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Signup = ({navigation}) => {
  const onPressCreate = () => {
    navigation.navigate('');
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
            />
          </View>
          <View>
            <TextInput
              style={styles.form}
              placeholder="   Enter Your Email here"
            />
          </View>
          <View>
            <TextInput
              style={styles.form}
              label="password"
              placeholder="   Enter Your password here"
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Button
              mode="contained"
              onPress={onPressCreate}
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
