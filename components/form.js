import React , {useState} from 'react';
import {View , Alert , TextInput , Button, StyleSheet , TouchableHighlight} from 'react-native';

export const AddTodo = ({addNewTodo}) => {
    const [val , setVal] = useState('')
    const [empty , setEmpty] = useState(0)
    const addNew = () => {
        if(val.trim()){
            addNewTodo(val)
            setVal('')
        } else {
            setEmpty( empty => empty + 1)
            if(empty >= 2) {
                Alert.alert('You don`t entered your todo. String is empty')
                setEmpty(0)
            } else return
        } 
    }
    return(
        <View style={styles.v}>
            <TextInput value={val} onChangeText={text => setVal(text)} placeholder="Enter your to do" style={styles.inp} />
                <TouchableHighlight style ={styles.btn}>
                    <Button title="add new" onPress={addNew} />
                </TouchableHighlight> 
        </View>
    )
}

const styles = StyleSheet.create({
      inp: {
        marginTop: 20,
        borderRadius: 30,
        width: '80%',
        height: 60,
        fontSize: 24,
        backgroundColor: '#455663',
        color: '#D3D3D3',
        textAlign: 'center'
      },
      btn: {
         height: 35,
         width:100,
         borderRadius: 10,     
         marginLeft :50,
         marginRight:50,
         marginTop :22
      },
      v: {
          alignItems: 'center',
          height: 130,
          justifyContent: 'space-between'
      }
  });