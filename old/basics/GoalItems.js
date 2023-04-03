import { Pressable, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

const GoalItems = (props) => {
  return (
    <Pressable onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goal}>
          <Text style={{ color: 'white' }}>{props.text}</Text>
      </View>
    </Pressable>
  )
}

export default GoalItems

const styles = StyleSheet.create({
    goal:{
        margin: 9,
        padding: 5,
        borderRadius: 6,
        backgroundColor: 'green',
        color: 'white'
      },
})