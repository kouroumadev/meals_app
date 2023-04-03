import { useState } from 'react'
import { StyleSheet, TextInput, Button, View, Modal, Image } from 'react-native'


const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
    
  }

  function addGoalHandler() {
    props.addGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  return (
    <Modal 
      visible={props.visible}
      animationType="slide"
      onBackgroundPress={() => console.log('background pressed')}
      >   
      <View style={styles.topDiv}>
        <Image style={styles.img} source={require('../assets/images/goal.png')}/>
        <View style={styles.divInput}>
          <TextInput 
            style={styles.input} 
            placeholder='enter here..' 
            onChangeText={goalInputHandler} 
            value={enteredGoalText}
          />
        </View>
        <View style={styles.divBtn}>
          <View style={styles.btns}>
            <Button title='Add Goal' onPress={addGoalHandler}/> 
          </View>
           
           <View style={styles.btns}>
            <Button title='Cancel' color="red" onPress={props.closeModal}/> 
           </View>
                      
        </View>
      </View>

    </Modal>
    
  )
}

export default GoalInput

const styles = StyleSheet.create({
    divInput:{
        width: '100%',
        marginBottom: 15
    },
    input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    backgroundColor: 'white',
    padding: 4,
    height: 40,
    
    },
    img:{
      width: 100,
      height: 100,
    },
    topDiv: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#311b6b'
    
    },
    divBtn:{
      flexDirection: 'row',
      justifyContent: 'center'
    },
    btns: {
      marginHorizontal: 10
    }
})