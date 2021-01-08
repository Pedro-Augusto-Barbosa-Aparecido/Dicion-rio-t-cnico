import React from 'react';
import { ScrollView, TouchableHighlight, Text, StyleSheet } from 'react-native';

export default function(){
    return(
        <ScrollView>
            <TouchableHighlight>
                <Text style={styles.test}>teste</Text>
            </TouchableHighlight>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    test:{fontSize:50,marginTop:50}
})