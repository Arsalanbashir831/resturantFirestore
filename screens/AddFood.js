import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect,useState } from 'react';
import { getDocs, collection,addDoc } from '@firebase/firestore';
import { firestore } from '../firebaseConfig';

import {useNavigation} from '@react-navigation/native'

export default function AddFood() {
    const navigation = useNavigation();
  const [foodData , setFoodData] = useState({
    foodName:'',
    foodPrice:'',
    foodRatings:'',
    foodStatus:''
  })
  const handleFoodChange = (fieldName,text) => {

      setFoodData((prevData) => ({
        ...prevData,
        [fieldName]: text,
      }));
    
  };

  const handleAddFood=()=>{
    console.log(foodData)
    addDoc(collection(firestore, 'FoodCollection'), {
      foodName: foodData.foodName,
      foodPrice: foodData.foodPrice,
      foodRatings: foodData.foodRatings,
      foodStatus: foodData.foodStatus,
    });
setFoodData({
  foodName:'',
  foodPrice:'',
  foodRatings:'',
  foodStatus:''

})
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{display:'flex',gap:10}}>
      <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>Add Resturant Food in Firestore</Text>
      <TextInput
      value={foodData.foodName}
      onChangeText={(text) => handleFoodChange('foodName', text)}
       style={{
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1
      }} placeholder="Enter Food Name " />
      <TextInput
      value={foodData.foodPrice}
      onChangeText={(text) => handleFoodChange('foodPrice', text)}
       style={{
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1
      }} placeholder="Enter Food Price " />
      <TextInput
      value={foodData.foodRatings}
      onChangeText={(text) => handleFoodChange('foodRatings', text)}
       style={{
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1
      }} placeholder="Enter Food Ratings " />
      <TextInput
      value={foodData.foodStatus}
      onChangeText={(text) => handleFoodChange('foodStatus', text)}
       style={{
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1
      }} placeholder="Enter Food Status (T/F) " />
    <Button  title="Add Food" onPress={()=>{
    handleAddFood()
    }}/>
    </View>
    <View style={{marginVertical:50}}>

     <Button onPress={()=>navigation.navigate('ViewFood')} title='View Food Items'/>
    </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
