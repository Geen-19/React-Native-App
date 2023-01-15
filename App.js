import 'react-native-gesture-handler';
import {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const HomeScreen = ({navigation}) => { 
  return (
    <View style = {styles.centering} >
      <Text>Home Screen</Text>
      <Button
        title="Go to details"
        onPress={() =>
          navigation.navigate('Details')
        }
      />
     <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}
function NotificationScreen({navigation}) {
  return(
    <View style = {styles.centering}>
      <Text>Notification Screen</Text>
    </View>
  );
}
function DetailsScreen({route , navigation}){
  return(
    <View style = {styles.centering}>  
        <Text>Details Screen</Text>  
    </View>
  );
}
function TabNavImplementation () {
  return(
    <Tab.Navigator >
      <Tab.Screen name = 'Home' component={HomeScreen} options = {{headerShown: false}} />
      <Tab.Screen name = 'Notification' component={NotificationScreen} options = {{headerShown: false}}/>
      <Tab.Screen name = 'Details' component = {DetailsScreen} options = {{headerShown: false}}/>
    </Tab.Navigator>
  )
}
function StackNavImplementation () {
  return(
    <Stack.Navigator> 
      <Stack.Navigator name = 'Home' component = {HomeScreen}/>
      <Stack.Navigator name = 'Details' component = {DetailsScreen}/>
      <Stack.Navigator name = 'Notification' component = {NotificationScreen}/>
    </Stack.Navigator>
  )
}
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function App() {
  return(
  <NavigationContainer>
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='HomeScreen' component={TabNavImplementation} />
      <Drawer.Screen name='Notifications' component={NotificationScreen} />
      <Drawer.Screen name='Detail' component={StackNavImplementation}/>
    </Drawer.Navigator>
    {/* <Stack.Navigator 
    screenOptions={{title: 'My Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    }}>
    <Stack.Screen name='Home' component={HomeScreen}
    options={({ navigation, route }) => ({
      // Add a placeholder button without the `onPress` to avoid flicker
      headerRight: () => (
        <Button title="Update count" />
      ),
    })}
    />
    <Stack.Screen name='Details' component={DetailsScreen} initialParams = {{itemId: 54}} 
    options = {({route}) => ({title: route.params.name})}/>
    </Stack.Navigator> */}
  </NavigationContainer>
  );
}
// Logo for header
const styles = StyleSheet.create({
  centering: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});

export default App;