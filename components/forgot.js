import React from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';
import {Button} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Forgot = ({navigation}) => {
  const onPressHandler = () => {
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
          source={require('../assets/forgot.png')}
          style={{width: 140, height: 140}}
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
            Forgot Password?
          </Text>
          <View>
            <TextInput
              style={styles.uname}
              label="Enter Email to Proceed"
              placeholder="  Enter Your Email here"
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Button
              mode="contained"
              onPress={onPressHandler}
              style={styles.button}>
              <Text style={styles.btnText}>Proceed</Text>
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
  uname: {
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
    margin: 6,
    marginTop: 6,
    backgroundColor: '#039BE5',
    borderRadius: 25,
    width: 370,
  },
  btnText: {
    fontSize: 20,
    fontWeight: '400',
  },
  section: {
    height: 320,
    width: 395,
    marginLeft: 8,
    marginTop: 280,
  },
});

export default Forgot;
