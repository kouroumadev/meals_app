import { useEffect } from 'react'

import { MEALS, CATEGORIES } from '../data/dummy-data';

import MealsList from '../components/MealsList';


const MealOverviewScreen = ({route, navigation}) => {

    const catId = route.params.catId;
    
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    } );

    useEffect(() => {
      const catTitle = CATEGORIES.find((category) => category.id === catId).title;
      navigation.setOptions({
        title: catTitle
      });

      
  
    }, [catId, navigation]);

    return <MealsList items={displayedMeals} navigation={navigation}/>
   
}

export default MealOverviewScreen

