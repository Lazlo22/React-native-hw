import React from 'react';
import {View , Text , StyleSheet} from 'react-native';

export const Rules = () => {
    return( 
        <View style={styles.rulContainer}>
            <Text style={styles.rulText}>
                You don`t yet added any todo. If you want to remove todo item from the list tap and hold it
            </Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    rulText: {
        fontSize: 27,
         width: '100%',
        height: 100,
        color: '#D3D3D3',
       textAlign: 'center'
    },
    rulContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 130,
        marginTop: 23
    }
})