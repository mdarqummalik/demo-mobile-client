import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, ScrollView} from 'react-native';
import {TextInput,Button} from 'react-native-paper';

const CreateTicket = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ticketForm}>
        <Text style={{fontSize:25, padding:10, backgroundColor:'#0068AD', color:"white", width:185, borderTopRightRadius:50, borderBottomRightRadius:50 }}>Create Ticket</Text>
        <View style={styles.inputView}>
        <TextInput
        style={styles.inputs}
          mode="outlined"
          label="Requester"
          placeholder="Type requester name"
          activeOutlineColor='#0068AD'
        />
        <TextInput
        style={styles.inputs}
          mode="outlined"
          label="Subject"
          placeholder="Type Subject Here"
          activeOutlineColor='#0068AD'
        />
        <TextInput
        style={styles.inputs}
          mode="outlined"
          label="Location"
          placeholder="Type Location name"
          activeOutlineColor='#0068AD'
        />
        <TextInput
        style={styles.inputs}
          mode="outlined"
          label="Requester"
          placeholder="Type requester name"
          activeOutlineColor='#0068AD'
        />
        <TextInput
        style={styles.inputs}
          mode="outlined"
          label="Department"
          placeholder="Type Department here"
          activeOutlineColor='#0068AD'
        />
         <TextInput
        style={styles.inputDescription}
          mode="outlined"
          label="Description"
          placeholder="Type Description here"
          activeOutlineColor='#0068AD'
        />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.ticketButton} >
            <Text style={{fontSize: 22, color: '#fafafa'}}>Create Ticket</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fafafa"
  },
  ticketForm: {
    marginTop:20,
  },
    inputView:{
        width:390,
        marginLeft:10,
        marginTop:30,
       
    },
    inputs:{
        margin:5,
        
    },
    inputDescription:{
        height:130,
        margin:5
    },
    buttonView: {
      alignItems: 'center',
      margin: 10,
    },
    ticketButton: {
      width: 378,
      height: 53,
      borderRadius: 3,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#039BE5',
    },
});
export default CreateTicket;