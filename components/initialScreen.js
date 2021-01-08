import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';

export default props=>{
  return(
    <ScrollView style={styles.backgroundApp}>
      
      <Text style={styles.AppDesingTitle}>Dicionário técnico</Text>

      <Text style={styles.textCredits2}>Integrantes: </Text>
      <Text style={styles.nameParticipants}>Esthéfano V. Rosa n°4</Text>
      <Text style={styles.nameParticipants}>Pedro Augusto n°25</Text>
      <Text style={styles.nameParticipants}>Richard L. Ribeiro n°29</Text>
 
      <Text style={styles.textCredits}>Coordenadores: </Text>
      <Text style={styles.nameParticipants}>Pfª Ana Letícia</Text>
      <Text style={styles.nameParticipants}>Pfª Thalita</Text>

      <View style={styles.btnChangeScreen}>
        <TouchableHighlight style={styles.btnTransScreen} onPress={props.onPress}>
           <Text style={styles.txtButton}>Dicionário</Text>
        </TouchableHighlight>
      </View>

       <Text style={styles.nameInstituation}>Escola Técnica em Eletrônica Franscico Moreira Costa</Text>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    AppDesingTitle: { backgroundColor: '#fff',fontSize:40,color:'#009',marginLeft:50,marginTop:20, },
    textCredits:{ fontSize:30,color:'#999',marginLeft:5,marginTop:15, },
    textCredits2:{ fontSize:30,color:'#999',marginLeft:5,marginTop:50, },
    nameParticipants:{ fontSize:26,color:'#004',marginLeft:42,marginTop:0, },
    nameInstituation:{ fontSize:10,marginTop:0,marginLeft:5,fontWeight:'bold', },
    btnTransScreen:{ backgroundColor:'#07f',borderColor:'#000',marginTop:170,marginLeft:255, },
    btnChangeScreen:{ marginLeft:0, },
    txtButton:{ fontSize:25,fontWeight:'bold',color: '#fff',justifyContent:'center',alignItems:'center',marginLeft:5, },
    backgroundApp:{ backgroundColor:'#fff', },
  });