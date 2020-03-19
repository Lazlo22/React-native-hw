import React from 'react';
import {Alert , StyleSheet, TouchableOpacity, Text} from 'react-native';

export const Todos = ({todo , onRemove}) => { 

    const removeTodo = () => {
        Alert.alert(  
            'Alert',  
            'Do you want to remove todo?',  
            [  
                {  
                    text: 'CANCEL',  
                    onPress: () => {return},  
                    style: 'cancel',  
                },  
                {
                    text: 'DELETE',
                    onPress: () =>  onRemove(todo.id)
                }  
            ]  
        )
    }
    
    return( <TouchableOpacity activeOpacity={0.5}
                              style={styles.vTodos}
                              onLongPress={removeTodo}>
                <Text style={styles.textInp}>
                     {todo.title}
                </Text> 
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    vTodos: {
      marginTop: 30,
      borderColor: '#4fd9fb',
      borderStyle: 'solid',
      borderWidth: 1.5,
      borderRadius: 18,
      width: '85%',
      height: 52,
      backgroundColor: '#455663',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInp: {
      fontSize: 24,
      color: '#d3d3d3'
    }
});