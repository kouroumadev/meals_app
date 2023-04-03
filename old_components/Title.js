import { StyleSheet, Text, Platform } from 'react-native'
import React from 'react'

const Title = ({children}) => {
  return (
    
      <Text style={styles.title}>{children}</Text>
    
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderColor: 'white',
        padding: 12
      }
})