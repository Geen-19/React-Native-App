import * as React from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const HomeScreen = ({navigation}) => {
  return (
    <View style = {styles.centering} >
      <Text>Hello World</Text>
      <Button
        title='Go to details'
        onPress={() => {navigation.navigate('Details', {
          itemId: 87,
          otherParam: 'Cool',
          imp: 'Important',
        })
      }}
       />
    </View>
  );
}
function DetailsScreen({route , navigation}){
  const {itemId, otherParam, imp} = route.params;
  return(
    <View style = {styles.centering}>
        <Text>Details</Text>
        <Text>ItemId: {JSON.stringify(itemId)} </Text>
        <Text>Param: {JSON.stringify(otherParam)}</Text>
        <Text>Fact: {JSON.stringify(imp)} </Text>
        <Button 
        title='Go to details again'
        onPress={() => navigation.push('Details')}/>
        <Button
        title = 'Go Back'
        onPress = {() => navigation.popToTop('Home')}  />
    </View>
  );
}
const Stack = createNativeStackNavigator();
function App() {
  return(
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen} /> 
    <Stack.Screen name='Details' component={DetailsScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  centering: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});

export default App;