import React from 'react';
import {View , Text , StyleSheet} from 'react-native';

export const Todos = ({title}) => {
    return(
        <View style={styles.vTodos}>
            <Text style={styles.textInp}>{title}</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
      vTodos: {
        marginTop: 30,
        borderColor: '#4fd9fb',
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderRadius: 18,
        width: '88%',
        height: 50,
        backgroundColor: '#455663',
        justifyContent: 'center',
        alignItems: 'center'
      },
      textInp: {
        fontSize: 24,
        color: '#d3d3d3'
      }
  });