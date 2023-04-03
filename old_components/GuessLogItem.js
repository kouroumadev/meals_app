import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import colors from '../constants/colors'

function GuessLogItem({guessIndex, guess}) {
  return (
    <View style={styles.container}>
      <Text>#{guessIndex}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  )
}

export default GuessLogItem

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: colors.red500,
        borderRadius: 10,
        backgroundColor: '#ddb52f',
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 6,
        shadowOpacity: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        padding: 7
    }
})