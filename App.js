import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BlindStructure from './src/screens/BlindStructure';
import RaiseBlind from './src/screens/RaiseBlind';


const Stack = createStackNavigator();
const App = () => {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Raise Blind' component={RaiseBlind}
        options={{
        headerShown: false
        }}/>
        <Stack.Screen name='Blinds Structure' component={BlindStructure}/>
      </Stack.Navigator>
     </NavigationContainer>
  )
}
export default App;