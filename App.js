import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import tw from 'twrnc';

//screen imports
import HomeScreen from './screens/HomeScreen';

//routing imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//initiate Routing Stack
const Stack = createNativeStackNavigator();


function LogoTitle() {
  return(
    <Image
      style={tw`w-[40px] h-[40px]`}
      source={require('./assets/logo.png')}
    />
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}  
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: "#1e293b",
            },
            headerTitle: (props) => <LogoTitle {...props} />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//un-used stylesheet from initial installation  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
