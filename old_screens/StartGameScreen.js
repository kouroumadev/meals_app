import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Alert, KeyboardAvoidingView, ScrollView} from 'react-native'
import React from 'react'

import PrimaryButton from '../components/PrimaryButton'
import colors from '../constants/colors'
import Title from '../components/Title'
import Card from '../components/Card'

function StartGameScreen (props) {

  const [enterNumber, setEnterNumber] = useState('')

  function enterNumberHandler(number){
    setEnterNumber(number)
  }
  function resetInput(){
    setEnterNumber('');
  }
  
  function confirmInputHandler(){
    const value = parseInt(enterNumber);

    if(isNaN(value) || value <= 0 || value > 99){
      Alert.alert(
        'Invalid Number',
        'Value must be a number between 0 to 1',
        [{text: 'Okay', style: 'destructive', onPress: resetInput}]
      );
      return ;
    }
    props.onSetScreen(enterNumber);
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior='position' style={{ flex: 1 }}>
        <View style={styles.rootDiv}>
          <View style={{ alignItems:'center' }}>
            <Title>Guess My Number</Title>
          </View>
          
          <View style={styles.container}> 
            <Card>              
              <View style={styles.divInput}>
                <Text style={styles.placeholder}>Enter a Number</Text>
                <TextInput style={styles.inputNumber} maxLength={2} keyboardType="numeric" autoCapitalize='none' autoCorrect={false}
                value={enterNumber}
                onChangeText={enterNumberHandler}
                />
              </View>
              <View style={styles.btnDiv}>
                <View style={styles.btns}>
                  <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
                </View>
                <View style={styles.btns}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
              </View> 
            </Card>        
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    rootDiv:{
      flex: 1,
      marginTop: 100,
      
    },
    container:{
      marginTop: 50,
      marginHorizontal: 20,
  },
    
    divInput:{
      justifyContent: 'center',
      alignItems: 'center'
    },
    placeholder:{
      fontSize: 24,
      color: colors.yell500
    },
    inputNumber:{
      height: 50,
      width: 50,
      textAlign: 'center',
      borderBottomColor: colors.yell500,
      borderBottomWidth: 2,
      marginVertical: 8,
      fontSize: 32,
      fontWeight: 'bold',
      color: colors.yell500,    
    },
    btnDiv:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      // marginHorizontal: 30
    },
    btns:{
      flex: 1,
    }
    
})