import React from 'react';
import { Text, ScrollView, StyleSheet, TextInput } from 'react-native';

import Bx from './boxResults'

export default props=>{
    return(
        <ScrollView>

            <Text style={styles.appContent}>Digite o termo a ser traduzido:</Text>

            <TextInput style={styles.txtType} onChangeText={text=>props.textChange(text)}></TextInput>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    appContent:{ marginTop:20,fontSize:25, },
    txtType:{ borderColor:'#000',borderWidth:2,borderRadius:5,paddingBottom:100, },
}); 