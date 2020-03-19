import React from 'react';
import {ScrollView , StyleSheet} from 'react-native';
import {Rules} from './rule';
import {Todos} from './todos';

export const List = ({todo , removeTodo , showRule}) => { 
    if(showRule){
        return (
            <Rules style={styles.rule}/>
        )
    } else {
        return (
                <ScrollView contentContainerStyle={styles.list}>
                    {todo.map( elem => <Todos 
                                            todo={elem}
                                            key={elem.id}
                                            onRemove={removeTodo}/>)}
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'column',
        alignItems: 'center'
      }
})