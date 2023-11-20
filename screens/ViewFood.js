import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { getDocs, collection } from "@firebase/firestore";
import { firestore } from "../firebaseConfig";
import {useNavigation} from '@react-navigation/native'

const ViewFood = () => {
    const navigation = useNavigation();
    const [foodData, setFoodData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(
                collection(firestore, "FoodCollection")
            );
            const newData = [];

            querySnapshot.forEach((doc) => {
                newData.push({
                    id: doc.id,
                    data: doc.data(),
                });
            });

            setFoodData(newData);
        };

        fetchData();
    }, [foodData]);


    return (
        <View style={styles.container}>
            {foodData.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                    <TouchableOpacity onPress={()=>navigation.navigate('EditFood',{item})}>
                        <Text style={styles.foodName}>
                            {index + 1}-{item.data.foodName}
                        </Text>
                        <View style={styles.foodDetails}>
                            <Text style={styles.foodPrice}>Price:{item.data.foodPrice}</Text>
                            <Text style={styles.foodRatings}>Rating:{item.data.foodRatings}</Text>
                            <Text style={styles.foodStatus}>Avalibility:{item.data.foodStatus}</Text>
                        </View>
                    </TouchableOpacity>
                    </React.Fragment>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },
    foodName: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    foodDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    foodPrice: {
        fontSize: 16,
        color: "#888",
    },
    foodRatings: {
        fontSize: 16,
        color: "#888",
    },
    foodStatus: {
        fontSize: 16,
        color: "#888",
    },
});

export default ViewFood;
