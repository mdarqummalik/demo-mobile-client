import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity,View, Image } from "react-native";



const DATA = [
  {
    id: "1",
    title: "Mohd Arqum Malik",
    age:"23",
    prof:'Software Developer (React Native)',
    icon:'https://bootdey.com/img/Content/avatar/avatar1.png',
  },
  {
    id: "2",
    title: "Akash Deep",
    age:'22',
    prof:"Software Developer (Vue Js)",
    icon:'https://bootdey.com/img/Content/avatar/avatar2.png',
  },
  {
    id: "3",
    title: "Achleshwar Dogra",
    age:'22',
    prof:'Software Developer (php)',
    icon:"https://bootdey.com/img/Content/avatar/avatar3.png",
  },
  {
    id: "4",
    title: "Deepak Sharma",
    age:'25',
    prof:'Software Developer (React Native)',
    icon:"https://bootdey.com/img/Content/avatar/avatar4.png",
  },
  {
    id: "5",
    title: "Gagan Deep",
    age:'24',
    prof:'Software Developer (Laravel)',
    icon:"https://bootdey.com/img/Content/avatar/avatar5.png",
  },
  {
    id: "6",
    title: "Keshav",
    age:'26',
    prof:'Software Developer (Senior React Native)',
    icon:"https://bootdey.com/img/Content/avatar/avatar6.png",
  },
  {
    id: "7",
    title: "Saddam Hussain",
    age:'26',
    prof:'Software Developer (php)',
    icon:"https://bootdey.com/img/Content/avatar/avatar2.png",
  },
  {
    id: "8",
    title: "Shreya Sharma",
    age:'20',
    prof:'Software Developer (Laraval)',
    icon:"https://bootdey.com/img/Content/avatar/avatar3.png",
  },
  {
    id: "9",
    title: "Mahima Bali",
    age:'24',
    prof:'Software Developer (Sales and Support)',
    icon:"https://bootdey.com/img/Content/avatar/avatar4.png",
  },
  {
    id: "10",
    title: "Sheetal Sharma",
    age:'21',
    prof:'Software Developer (Software Tester)',
    icon:'https://bootdey.com/img/Content/avatar/avatar1.png',
  },
];

const Item = ({ item, onPress, backgroundColor, textColor ,  }) => (

   <View style={{flex:1, }}>
       <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Image style={styles.icon} source={{uri: item.icon}} />
         <View style={{flex:1, flexDirection:'column'}}>
             <Text style={[styles.titles, textColor]}>{item.title}</Text>
             <Text style={styles.age, textColor}>Age : {item.age}</Text>
            <Text style={styles.prof}>Profession : {item.prof}</Text>
         </View>
      </TouchableOpacity>
   </View>


  
  
);

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#CFD8DC" : "#fafafa";
    const color = item.id === selectedId ? '#039BE5' : 'black';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}  
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        />
      
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:'#CFD8DC',
    
  },
  item: {
    flexDirection:'row',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 12,
    borderRadius:6,
    height:110,
  },
  titles: {
    fontSize: 23,
    fontFamily:"sans-serif-medium",
  },
  age:{
    fontSize:17,
    color:"black",
    opacity:0.8,
  },
  prof:{
    fontSize:15,
    opacity:0.8,
  },
  icon:{
    
    width:70,
    height:70,
    borderRadius:50,
    margin:10,
    marginRight:35
   
  },
});

export default Home;