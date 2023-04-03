import { StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native'
import React from 'react'

const CategoryGrid = ({title, color, OnPress}) => {
  return (
    
        <TouchableOpacity style={[styles.container, {backgroundColor:color}]} onPress={OnPress}>
            <View style={styles.innerDiv}>
                <Text style={styles.txt}>{title}</Text>
            </View>
        </TouchableOpacity>
    
  )
}

export default CategoryGrid

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: 150,
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.3
    },
    innerDiv: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt:{
        fontWeight: 'bold',
        fontSize: 16
    }
})