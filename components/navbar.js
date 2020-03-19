import React from 'react';
import {View , Text , StyleSheet} from 'react-native';

export const Navbar = () => {
    return (
        <View style={styles.contNav}>
            <Text style={styles.text}>React Native Android App!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#4fd9fb',
        fontSize: 33,
        textAlign: 'center'
    },
    contNav:{
       marginTop: 10
    }
})