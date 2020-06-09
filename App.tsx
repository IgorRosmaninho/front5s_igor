import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
import Assessment from './pages/Assessment/assessment'
import NewAssessment from './pages/Assessment/NewAssessment/Config'
import Login from './pages/Login/login'
import Limpeza from './pages/Assessment/NewAssessment/limpeza'
import Organizacao from './pages/Assessment/NewAssessment/organizacao';
import Utilizacao from './pages/Assessment/NewAssessment/utilizacao';
import Higiene from './pages/Assessment/NewAssessment/higiene';
import Disciplina from './pages/Assessment/NewAssessment/disciplina';
import Resultado from './pages/Assessment/NewAssessment/resultado'

import Info from './pages/Info/info'
import Formularios from './pages/Formularios/formularios'
import Ranking from './pages/Ranking/ranking'
import Perfil from './pages/Perfil/perfil'


 
 const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const App: () => React$Node = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator>
       <Tab.Screen name="Avaliação" component={Assessment} />
       <Tab.Screen name="Ranking" component={Ranking} />
       <Tab.Screen name="Formulários" component={Formularios} />
       <Tab.Screen name="Info" component={Info} />
       <Tab.Screen name="Perfil" component={Perfil} />
     </Tab.Navigator>
    </NavigationContainer>
 
    //   <Stack.Navigator initialRouteName = "Login">
    //     <Stack.Screen name="Login" component={Login}/>
    //     <Stack.Screen name="Assessment" component={Assessment} options={{ title: 'Avaliação' }}/>
    //     <Stack.Screen name="NewAssessment" component={NewAssessment} options={{title: 'Nova avaliação'}}/>
    //     <Stack.Screen name="Limpeza" component={Limpeza} options={{title: 'Nova avaliação'}}/>
    //     <Stack.Screen name="Organizacao" component={Organizacao} options={{title: 'Nova avaliação'}}/>
    //     <Stack.Screen name="Utilizacao" component={Utilizacao} options={{title: 'Nova avaliação'}}/>
    //     <Stack.Screen name="Higiene" component={Higiene} options={{title: 'Nova avaliação'}}/>
    //     <Stack.Screen name="Disciplina" component={Disciplina} options={{title: 'Nova avaliação'}}/>
    //     <Stack.Screen name="Resultado" component={Resultado} options={{title: 'Nova avaliação'}}/>
    //   </Stack.Navigator>
    // 
  );
};
// 


export default App;
