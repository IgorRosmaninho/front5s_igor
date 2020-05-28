import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Assessment from './pages/Assessment'
import NewAssessment from './pages/NewAssessment'
import Login from './pages/Login'
import Limpeza from './pages/NewAssessment/Limpeza'


const Stack = createStackNavigator();

const App: () => React$Node = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Assessment" component={Assessment} options={{ title: 'Avaliação' }}/>
        <Stack.Screen name="NewAssessment" component={NewAssessment} options={{title: 'Nova avaliação'}}/>
        <Stack.Screen name="Limpeza" component={Limpeza} options={{title: 'Nova avaliação'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// 


export default App;
