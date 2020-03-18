import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Navbar} from './components/navbar';
import {AddTodo} from './components/form';
import {Todos} from './components/todos';

export default function App() {
  const [listElem , setListElem] = useState([])
  const addTodo = (title) => setListElem(list => [...list , {
    id: Date.now().toString(),
    title: title
  }])
  return (
    <View style={styles.all}>
      
      <View style={styles.containerNav}>
      <View style={styles.hr}></View>
        <Navbar />
      </View>
      <View>
        <AddTodo addNewTodo={addTodo}/>
      </View>
      <View style={styles.list}>
      {listElem.map( elem => <Todos title={elem.title} key={elem.id}/>)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
  all: {
    width: '100%',
    flex: 1,
    backgroundColor: '#282c34'
  },
    containerNav: {
      marginTop: 26
    },
    hr: {
      width: '100%',
      height: 2,
      backgroundColor: '#fff'
    },
    list: {
      flexDirection: 'column',
      alignItems: 'center'
    }
});