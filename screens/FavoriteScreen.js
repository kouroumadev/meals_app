import { StyleSheet, View, Text } from 'react-native'
import {useContext} from 'react'

import {FavoritesContext} from '../store/context/favotites-context'
import { MEALS } from '../data/dummy-data'

import MealsList from '../components/MealsList'

const FavoriteScreen = ({navigation}) => {

  const favMealCtx = useContext(FavoritesContext);
  
  // const favMealIds = favMealCtx.ids;
  const favMeals = MEALS.filter(meal => favMealCtx.ids.includes(meal.id));

  if(favMeals.length === 0){
    return (
      <View style={styles.sms}>
        <Text style={styles.txt}>You have no favorite meal yet.</Text>
      </View>
    )
  }

  return  <MealsList items={favMeals} navigation={navigation}/>
  
}

export default FavoriteScreen

const styles = StyleSheet.create({
  sms :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})