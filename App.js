import { View, Text } from 'react-native'
import React from 'react'
import AddFood from './screens/AddFood'
import ViewFood from './screens/ViewFood'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditFood from './screens/EditFood';



const Stack = createNativeStackNavigator();
const App = () => {
  return (
<NavigationContainer >
<Stack.Navigator>
<Stack.Screen name="AddFood" component={AddFood} />
<Stack.Screen name="ViewFood" component={ViewFood} />
<Stack.Screen name="EditFood" component={EditFood} />
</Stack.Navigator>
</NavigationContainer>  
  // <ViewFood/>
  //  <AddFood/>
  
     )
}

export default App