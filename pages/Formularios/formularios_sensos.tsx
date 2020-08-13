import React, { Component } from 'react';
//import { ScrollView } from 'react-native-gesture-handler';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Button,
    ScrollView,
    
  } from 'react-native';

import styles from '../style/styles'

export default function FormulariosSensos({route, navigation}) {

  const { Cost_center_id, nota, createdAt } = route.params;

  return (
    //<ScrollView>
    <View style={styles.container}>
      <View>
          <Text style={styles.h2}>Centro de custo: {Cost_center_id}</Text>
          <Text style={styles.bodyText}>Nota 5S: {nota}</Text>
          <Text style={styles.bodyText}>Data da avaliação: {createdAt}</Text>

          <View style={styles.divisor}/>

          <Text style={styles.bodyText}>Escolha o senso que deseja detalhar:</Text>
          <View />
          <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate ("FormulariosDetalhes", {Cost_center_id: Cost_center_id, createdAt: createdAt, Question_id_answer_S: "Question_id_answer_u", s: 1})}>
            <Text style={styles.secondaryButtonText}> Utilização </Text>
          </TouchableOpacity>

          <View />

          <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate ("FormulariosDetalhes", {Cost_center_id: Cost_center_id, createdAt: createdAt, Question_id_answer_S: "Question_id_answer_o", s: 2})}>
            <Text style={styles.secondaryButtonText}> Organização </Text>
            </TouchableOpacity>

            <View />

            <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate ("FormulariosDetalhes", {Cost_center_id: Cost_center_id, createdAt: createdAt, Question_id_answer_S: "Question_id_answer_l", s: 3})}>
            <Text style={styles.secondaryButtonText}> Limpeza </Text>
            </TouchableOpacity>

            <View />

            <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate ("FormulariosDetalhes", {Cost_center_id: Cost_center_id, createdAt: createdAt, Question_id_answer_S: "Question_id_answer_p", s: 4})}>
            <Text style={styles.secondaryButtonText}> Padronização </Text>
            </TouchableOpacity>

            <View />

            <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate ("FormulariosDetalhes", {Cost_center_id: Cost_center_id, createdAt: createdAt, Question_id_answer_S: "Question_id_answer_d", s: 5})}>
            <Text style={styles.secondaryButtonText}> Disciplina </Text>
            </TouchableOpacity>

            <View />
      </View>
    </View>
  )}
//</ScrollView>