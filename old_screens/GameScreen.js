import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, FlatList } from 'react-native'
import React from 'react'

import Title from '../components/Title'
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import GuessLogItem from '../components/GuessLogItem';
import Ionicons from '@expo/vector-icons/Ionicons'

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let currentLower = 1;
let currentBigger = 100;

function GameScreen({selectedNumber, gameOver, gessRoundF}) {
  const initialGuess = generateRandomBetween(1, 100, selectedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [roundCount, setCountRound] = useState(0);
  const [guessRounds, setGuessRounds] = useState([currentGuess]);

  useEffect(()=>{
    if(currentGuess == selectedNumber){
      gessRoundF(roundCount);
      gameOver();
    }
  }, [currentGuess, selectedNumber, gameOver]);

  useEffect(() =>{
    currentLower = 1;
    currentBigger = 100; 
  },[]);

  function guessHandler(direction){
    if((direction == 'lower' && currentGuess < selectedNumber) || (direction == 'bigger' && currentGuess > selectedNumber)){
       Alert.alert("Warning","don't lie !!!",[{text: 'Okay', style: 'cancel'}]);
       return;
    }

    if(currentGuess == selectedNumber){
      Alert.alert("Congrats","you got the right number !!!",[{text: 'Okay', style: 'cancel'}]);
       return;
    }

    if(direction === 'lower'){
      currentBigger = currentGuess;    
    } else {
      currentLower = currentGuess + 1;
    }
    setCountRound(prevCount => prevCount + 1);
    const newRdmNumber = generateRandomBetween(currentLower, currentBigger, currentGuess);
    setCurrentGuess(newRdmNumber);
    setGuessRounds(prevGuess => [...prevGuess, newRdmNumber]);

  }

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <View style={styles.numberDiv}>
        <Text style={styles.val}>{currentGuess}</Text>
      </View>
      
        <Card> 
          <View style={{ alignItems: 'center', marginBottom:10 }}>
            <Text style={styles.textRep}>Lower</Text>
          </View>
          <View style={styles.btnDiv}>
            <View style={styles.btns}>
              <PrimaryButton onPress={guessHandler.bind(this, 'lower')}>
                <Ionicons name="md-remove" size={24} color="white"/>
              </PrimaryButton>
            </View> 
            <View style={styles.btns}>
              <PrimaryButton onPress={guessHandler.bind(this, 'bigger')}>
              <Ionicons name="md-add" size={24} color="white"/>
              </PrimaryButton>
            </View> 
          </View>
        </Card> 
        <View style={styles.geussDiv}>
            <FlatList              
              data={guessRounds}
              renderItem={(itemData) => (
                <GuessLogItem guessIndex={itemData.index} guess={itemData.item} />
                )}
              keyExtractor={(item) => item}
            />
        </View>
        
        
      
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 24,
    marginTop:30
    // justifyContent: 'center',
    // alignItems: 'center'
  },

  numberDiv:{
    borderWidth: 3,
    borderColor: '#ddb52f',
    margin: 22,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  val:{
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ddb52f'
  },
  textRep:{
    fontSize: 20,
    color: '#ddb52f'
  },

  btnDiv:{
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  btns:{
    flex: 1
  },
  geussDiv:{
    flex: 1,
    margin: 20
  }
})