import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { updateDoc, doc,deleteDoc } from 'firebase/firestore';
import { firestore } from '../firebaseConfig';
import {useNavigation} from '@react-navigation/native'

const EditFood = ({ route }) => {
    const navigation = useNavigation();
  const { item } = route.params;
  const docId=item.id
  const [foodName, setFoodName] = useState(item.data.foodName);
  const [foodPrice, setFoodPrice] = useState(item.data.foodPrice);
  const [foodRatings, setFoodRatings] = useState(item.data.foodRatings);
  const [foodStatus, setFoodStatus] = useState(item.data.foodStatus);

  const handleDelete = async () => {
    try {
      const foodDocRef = doc(firestore, "FoodCollection", docId);
      await deleteDoc(foodDocRef);
      console.log("Document deleted successfully");
      navigation.goBack()
    } catch (error) {
      console.error("Error deleting document: ", error.message);
    }
  };

  const handleSave = async () => {
    try {
      const foodDocRef = doc(firestore, "FoodCollection", docId);
      const updateData = {
        foodName,
        foodPrice,
        foodRatings,
        foodStatus,
      };
  
      await updateDoc(foodDocRef, updateData);
        navigation.goBack()
      console.log("Document updated successfully");
    } catch (error) {
      console.error("Error updating document: ", error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Food</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Food Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter food name"
          value={foodName}
          onChangeText={setFoodName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Food Price</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter food price"
          value={foodPrice}
          onChangeText={setFoodPrice}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Food Ratings</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter food ratings"
          value={foodRatings}
          onChangeText={setFoodRatings}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Food Status</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter food status"
          value={foodStatus}
          onChangeText={setFoodStatus}
        />
      </View>
      <View style={{marginVertical:20,display:'flex',gap:10}}>
      <Button title="Delete" onPress={handleDelete} color="#FF3333" />
      <Button title="Save" onPress={handleSave} color="#4CAF50" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
  },
});

export default EditFood;
