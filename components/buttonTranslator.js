import React from 'react';
import { View, Button } from 'react-native';

export default props=>{
    return(
    <View>
        <Button title="Traduzir" onPress={props.onPress} style={{padding:20}}></Button>
    </View>
    )
}