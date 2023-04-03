import { StyleSheet, Text, View, Image, TouchableOpacity , Platform} from 'react-native'
import React from 'react'

const MealItem = ({meal, navigation}) => {

    function toMealDetailScreenHandler() {
        navigation.navigate("MealDetail", {meal: meal} );
      }

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={toMealDetailScreenHandler}>
            <View style={styles.innerDiv}>
                <View style={styles.imgDiv}>
                    <Image 
                        source={{ uri: meal.imageUrl }}
                        style={styles.img}
                    />
                </View>
                <View>
                    <Text style={styles.txtTitle}>{meal.title}</Text>
                </View>
                <View style={styles.divDetails}>
                    <Text style={styles.txtDetail}>{meal.duration}mn</Text>
                    <Text style={styles.txtDetail}>{meal.affordability.toUpperCase()}</Text>
                    <Text style={styles.txtDetail}>{meal.complexity.toUpperCase()}</Text>
                </View>
            </View>
        </TouchableOpacity>
        
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        margin: 5,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : '',
        shadowColor: "black",
        shadowOffset:{width: 0, height: 0},
        shadowRadius: 5,
        shadowOpacity: 0.3,
    },
    innerDiv:{
        borderRadius: 10,
        overflow: 'hidden'
    },
    imgDiv:{
        
        height: 200,
        width: '100%',
        // overflow: 'hidden'
    },
    img:{
        height: '100%',
        width: '100%'
    },
    txtTitle:{
        margin: 5,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    divDetails:{
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtDetail:{
        paddingHorizontal: 5
    }
})