import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity,Platform } from 'react-native'
import {useLayoutEffect, useContext} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

import {FavoritesContext} from '../store/context/favotites-context'

const MealDetailScreen = ({route, navigation}) => {
    const meal = route.params.meal;
    const favMealCtx = useContext(FavoritesContext);
    const mealId = meal.id;
    const ingredients = meal.ingredients;
    const steps = meal.steps;

    
    const isMealFav = favMealCtx.ids.includes(mealId);

    function changeFavStatusHandler() {
        if(isMealFav) {
            favMealCtx.removeFavorite(mealId);
        } else {
            favMealCtx.addFavorite(mealId);
        }
    }

    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity onPress={changeFavStatusHandler}>
                        <Ionicons 
                            name={isMealFav ? 'star' : 'star-outline'} 
                            size={25} 
                            color="white"/>
                    </TouchableOpacity>
                )
            }
        })
    }, [navigation, changeFavStatusHandler]);

  return (
    <ScrollView style={{ marginBottom: 10}} >
        <View style={styles.container}>
            <View style={styles.imgDiv}>
                <Image source={{ uri: meal.imageUrl }} style={styles.img}/>
            </View>
            
            <View style={styles.details}>
                <Text style={styles.txtTitle}>{meal.title}</Text>
                <View style={styles.txtInfo}>
                    <Text style={styles.txtSame}>{meal.duration}mn</Text>
                    <Text style={styles.txtSame}>{meal.complexity}</Text>
                    <Text style={styles.txtSame}>{meal.affordability}</Text>
                </View>
                {/* <ScrollView> */}
                <View style={styles.bottomDiv}>
                                
                        <Text style={{ color: '#e6e2e2' }}>Ingredients</Text>
                        <View style={styles.hr}></View>

                        <View style={styles.flatDiv}>
                            {ingredients.map((meal) => (
                                <View style={styles.item} key={meal}>
                                    <Text>{meal}</Text>
                                </View>
                            ))}
                        </View>

                        <Text style={{ color: '#e6e2e2', marginTop:5 }}>Steps</Text>
                        <View style={styles.hr}></View>
                        <View style={styles.flatDiv}>
                            {steps.map((meal) => (
                                <View style={styles.item} key={meal}>
                                    <Text>{meal}</Text>
                                </View>
                            ))}
                        </View>
                    
                </View>
                {/* </ScrollView>  */}
                
            </View>
        
        </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // marginBottom: 30
    },
    imgDiv: {
        width: '100%',
        height: '50%',
        maxHeight: '50%'
    },
    img:{
        width: '100%',
        height: '100%',
    },
    details:{
        // flex: 1,
        justifyContent: 'center',
        paddingVertical: 5
    },
    txtTitle:{
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    txtInfo:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    txtSame:{
        color: '#c8c3c3',
        fontSize: 12,
        marginHorizontal: 5
    },
    bottomDiv:{
        marginHorizontal: 30,
        alignItems: 'center',
        paddingBottom: Platform.OS === 'android' ? 30 : 0
        // backgroundColor: 'red'
    },
    hr:{
        borderWidth: 1,
        marginVertical: 3,
        borderColor: '#afacac',
        width: '100%'
    },
    flatDiv:{
        width: '100%',
        // height: 150
    },
    item:{
        width: '100%',
        backgroundColor: '#afacac',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        marginVertical: 2

    }
})