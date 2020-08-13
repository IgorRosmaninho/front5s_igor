import {View, TouchableOpacity, Text} from 'react-native';

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
import Padronizacao from './pages/Assessment/NewAssessment/padronizacao';
import Disciplina from './pages/Assessment/NewAssessment/disciplina';
import Resultado from './pages/Assessment/NewAssessment/resultado';
import ResultadoDetalhes from './pages/Assessment/NewAssessment/resultado_detalhes'

import Info from './pages/Info/info'
import Formularios from './pages/Formularios/formularios'
import FormulariosDetalhes from './pages/Formularios/formularios_detalhes'
import Ranking from './pages/Ranking/ranking'
import RankingDetalhes from './pages/Ranking/ranking_detalhes'
import Perfil from './pages/Perfil/perfil'
import AddPhoto from './AddPhoto';


 
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackAssessment (){
  return(
  <Stack.Navigator>
        <Stack.Screen name="Assessment" component={Assessment} options={{ title: 'Avaliação' }}/>
        <Stack.Screen name="NewAssessment" component={NewAssessment} options={{title: 'Nova avaliação'}}/>
        <Stack.Screen name="Limpeza" component={Limpeza} options={{title: 'Nova avaliação'}}/>
        <Stack.Screen name="Organizacao" component={Organizacao} options={{title: 'Nova avaliação'}}/>
        <Stack.Screen name="Utilizacao" component={Utilizacao} options={{title: 'Nova avaliação'}}/>
        <Stack.Screen name="Padronizacao" component={Padronizacao} options={{title: 'Nova avaliação'}}/>
        <Stack.Screen name="Disciplina" component={Disciplina} options={{title: 'Nova avaliação'}}/>
        <Stack.Screen name="Resultado" component={Resultado} options={{title: 'Nova avaliação'}}/>
        <Stack.Screen name="ResultadoDetalhes" component={ResultadoDetalhes} options={{title: 'Nova avaliação'}}/>
        <Stack.Screen name="Login" component={Login} options={{title: ''}}/>
        <Stack.Screen name="Evidencia" component={AddPhoto} options={{title: 'Evidencia'}}/>
        <Stack.Screen name="RankingDetalhes" component={RankingDetalhes} options={{title: 'Detalhe'}}/>
  </Stack.Navigator>
  )}

function StackRanking (){
  return(
    <Stack.Navigator>
          <Stack.Screen name="Ranking" component={Ranking} options={{ title: 'Ranking' }} />
    </Stack.Navigator>
    )}

function StackFormularios (){
  return(
      <Stack.Navigator>
            <Stack.Screen name="Formularios" component={Formularios} options={{ title: 'Formulários' }} />
            <Stack.Screen name="FormulariosDetalhes" component={FormulariosDetalhes} options={{ title: 'Formulários' }} />
      </Stack.Navigator>
      )}

 function StackInfo (){
  return(
    <Stack.Navigator>
          <Stack.Screen name="Info" component={Info} options={{ title: 'Informações' }} />
    </Stack.Navigator>
    )}

function StackPerfil (){
  return(
    <Stack.Navigator>
            <Stack.Screen name="Perfil" component={Perfil} options={{ title: 'Perfil' }} />
      </Stack.Navigator>
      )}

const App: () => React$Node = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator  initialRouteName={"Login"} tabBarOptions={{
        activeTintColor: '#000',
      }}>
       <Tab.Screen name="Avaliação" component={StackAssessment}/>
       <Tab.Screen name="Ranking" component={StackRanking}/>
       <Tab.Screen name="Formulários" component={StackFormularios} />
       <Tab.Screen name="Info" component={StackInfo} />
       <Tab.Screen name="Perfil" component={StackPerfil} />
     </Tab.Navigator>
    </NavigationContainer>
  
  );
};



export default App;
