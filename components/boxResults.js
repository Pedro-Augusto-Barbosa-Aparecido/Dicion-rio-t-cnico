import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default props=>{
    return(
        <ScrollView style={styles.boxResult}>
            <Text style={styles.wordTranslated}>Termo: {props.tranWord[0]}</Text>
            <Text style={styles.wordTranslated}>Separação silábica: {props.tranWord[1]}</Text>
            <Text style={styles.wordTranslated}>Tradução: {props.tranWord[2]}</Text>
            <Text style={styles.wordTranslated}>Exemplo: {props.tranWord[3]}</Text>
            <Text style={styles.wordTranslated}>Referência: {props.tranWord[4]}</Text>
        </ScrollView>
    )    
}

const styles = StyleSheet.create({
    
    wordTranslated:{ fontSize:20,color:'#011',fontWeight:'bold',marginLeft:1, },
    boxResult:{ borderWidth:2,borderColor:'#000',backgroundColor:'#fff',marginTop:90, },

}); 