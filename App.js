import React , {useState} from 'react';
import { StyleSheet,  View} from 'react-native';
import {Navbar} from './components/navbar';
import {AddTodo} from './components/form';
import {List} from './components/list';

export default function App() {
  const [listElem , setListElem] = useState([])
  const [rules , setRules] = useState(true) 

  const addTodo = title => {
    setListElem(list => [...list , {
        id: Date.now().toString(),
        title: title
    }])
    setRules(rules => rules = false)
  }

  const removeTodo = id => setListElem(prev => prev.filter(todo => todo.id !== id))
  
  return (
    <View style={styles.all}>
      <View style={styles.containerNav}>
        <View style={styles.hr}></View>
        <Navbar />
      </View>
      <View>
        <AddTodo addNewTodo={addTodo}/>
      </View>
        <List todo={listElem} removeTodo={removeTodo} showRule={rules}/>
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
    }
})