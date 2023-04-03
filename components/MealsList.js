import { StyleSheet, FlatList, View } from 'react-native'

import MealItem from './MealItem'

const MealsList = ({items, navigation}) => {

    function mealRender(mealData){
        return <MealItem meal={mealData.item} navigation={navigation}/>
    }

  return (
    <View style={styles.container}>
      <FlatList 
        data={items}
        keyExtractor={(meal) => meal.id }
        renderItem={(mealData) => mealRender(mealData)}
      />
    </View>
  )
}

export default MealsList

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16
    }
})