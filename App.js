import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


import { NavigationContainer } from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';


import CategoryScreen from './screens/CategoryScreen';
import MealOverviewScreen from './screens/MealOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import FavoriteContextProvider from './store/context/favotites-context';

import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ 
      
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#351401' },
      sceneContainerStyle:{ backgroundColor: '#3f2f25' },
      drawerContentStyle:{backgroundColor: '#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#b08e7b'
      // drawerActiveTintColor: '#171716',
      
     }}>
      <Drawer.Screen name="Categories" component={CategoryScreen} options={{ 
        title: 'All Categories',
        drawerIcon: ({size, color}) => (
          <Ionicons name="list" size={size} color={color}/>        
          )
       }}/>
      <Drawer.Screen name="Favorites" component={FavoriteScreen} options={{ 
        drawerIcon: ({color, size}) => (
          <Ionicons name="star" size={size} color={color}/> 
        )
       }}/>
    </Drawer.Navigator>
  )
}




export default function App() {

  
  return ( 
    <>
      <StatusBar style="light" />
     
       <FavoriteContextProvider> 
           
        <NavigationContainer>

          <Stack.Navigator screenOptions={{ 
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#351401' },
            contentStyle:{ backgroundColor: '#3f2f25' }
          }}>
            <Stack.Screen 
              name="MealsCategories" 
              component={DrawerNavigator} 
              options={{ 
                headerShown: false
                }} />
            <Stack.Screen name="MealsOverview" component={MealOverviewScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{ 
              title: 'About the Meal'
            }} />
            
          </Stack.Navigator>
        
        </NavigationContainer>   
      
       </FavoriteContextProvider> 
      
    </>
    
  );
}

const styles = StyleSheet.create({
 
  
});
