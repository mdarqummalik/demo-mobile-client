import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity,ScrollView} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';


//profile

const Profile = ({navigation}) => {
  const onButtonPress= () =>{
    navigation.navigate("Home1")
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Mohd Arqum Malik</Text>
          <Text style={styles.info}>UX Designer / Mobile developer</Text>
        </View>
        <View style={styles.cardBody}>
          <View style={{height: 90, margin: 2}}>
            <Card>
              <Card.Content>
                <Title style={styles.cardTitle}>Email/Username</Title>
                <Paragraph style={styles.cardParagraph}>
                  md.arqummalik@ladybirdweb.com
                </Paragraph>
              </Card.Content>
            </Card>
          </View>
          <View style={{height: 90, margin: 2}}>
            <Card>
              <Card.Content>
                <Title style={styles.cardTitle}>Phone No</Title>
                <Paragraph style={styles.cardParagraph}>7006082958</Paragraph>
              </Card.Content>
            </Card>
          </View>
          <View style={{height: 90, margin: 2}}>
            <Card>
              <Card.Content>
                <Title style={styles.cardTitle}>Website</Title>
                <Paragraph style={styles.cardParagraph}>
                  www.faveohelpdesk.com
                </Paragraph>
              </Card.Content>
            </Card>
          </View>
        </View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={onButtonPress} style={styles.buttonContainer}>
          <Text style={{color: 'white', fontSize: 17} }>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
    height: 180,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 63,
    borderWidth: 3,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 110,
  },
  body: {
    margin: 20,
    marginTop: 50,
  },
  bodyContent: {
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    margin: 3,
  },
  info: {
    fontSize: 13,
    color: 'grey',
  },
  cardBody: {
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 16,
    color: 'grey',
  },
  cardParagraph: {
    color: '#757575',
  },
  buttonView: {
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 2,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 369,
    borderRadius: 3,
    backgroundColor: '#00BFFF',
  },
});

export default Profile;
