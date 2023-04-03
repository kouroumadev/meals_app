import { StyleSheet, Pressable, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'

function PrimaryButton ({children, onPress}) {

  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.btnContainer}>
            <Text style={styles.btnText}>{children}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    btnContainer:{
        backgroundColor: "#ac0659",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        margin: 4,
        // elevation: 2
    },
    btnText:{
        color: '#FFFFFF',
        textAlign: 'center'
    }
})