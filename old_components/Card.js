import { StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const Card = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: colors.red500,
        borderRadius: 10,
        elevation: 15,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 6,
        shadowOpacity: 0.5
    },
})