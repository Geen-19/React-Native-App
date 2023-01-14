import {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';
const HomeScreen = ({navigation}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c+1)} title = 'update count' />
      ),
    });
  }, [navigation,setCount]);
  return (
    <View style = {styles.centering} >
      <Text>Hello World</Text>
      <Button
        title="Go to details"
        onPress={() =>
          navigation.push('Details', { name: 'Custom profile header' }, 
          {
          itemId: '69',
          otherParam : 'I am 6ft',
          fact: 'Geen',
          cool : 'React'})
        }
      />
      <Text>Count: {count}</Text>
    </View>
  );
}
function DetailsScreen({route , navigation}){
  const {itemId, otherParam, imp, cool} = route.params;
  return(
    <View style = {styles.centering}>
        <Text>Details</Text>
        <Text>ItemId: {JSON.stringify(itemId)} </Text>
        <Text>Param: {JSON.stringify(otherParam)}</Text>
        <Text>Fact: {JSON.stringify(imp)} </Text>
        <Text>Author Name: {JSON.stringify(cool)}</Text>
        <Button 
        title='Go Back'
        onPress={() => navigation.navigate('Home')}/>
      
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return(
  <NavigationContainer>
    <Stack.Navigator 
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
    </Stack.Navigator>
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