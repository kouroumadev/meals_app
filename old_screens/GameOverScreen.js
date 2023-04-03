import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'

import Title from '../components/Title'
import PrimaryButton from '../components/PrimaryButton'


const GameOverScreen = ({selectedNumber, round, newGame }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Game Over !</Title>
      <View style={styles.imgDiv}>
        <Image style={styles.img} source={require('../assets/images/success.png')}/>
      </View>
      <Text style={styles.txtSms}>
        Your phone needed <Text style={styles.txtValue}>{round}</Text> rounds to guess the number <Text style={styles.txtValue}>{selectedNumber}</Text>.
      </Text>
      <PrimaryButton onPress={newGame}>Start New Game</PrimaryButton>
      
    </SafeAreaView>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 24,
    alignItems:'center',
    justifyContent: 'center',
    
  },
  imgDiv:{
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: '#907004',
    overflow: 'hidden',
    margin: 36
  },
  img:{
    width: '100%',
    height: '100%'
  },
  txtSms:{
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20
  },
  txtValue:{
    color: '#6a0236',
    fontWeight: 'bold'
  }
})