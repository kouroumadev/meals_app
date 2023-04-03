import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import React from 'react'

import { CATEGORIES } from '../data/dummy-data';
import CategoryGrid from '../components/CategoryGrid';



function CategoryScreen({navigation}) {

    function renderCatItem(dataItem){

        function pressHandler(){
            navigation.navigate("MealsOverview", {catId: dataItem.item.id});
        }

        return (<CategoryGrid 
                    title={dataItem.item.title} 
                    color={dataItem.item.color} 
                    OnPress={pressHandler}/>)
    }
    
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCatItem}
        
        numColumns={2}
        
      />
    </SafeAreaView>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,

    }
})