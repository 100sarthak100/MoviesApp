import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

import moviesHomePage from '../pages/moviesHomePage';
import movieDetails from '../pages/movieDetails';
import moviesLiked from '../pages/moviesLiked';

// Bottom navigation bar
const BottomTabs = () => {
  return (
      <Tab.Navigator
          initialRouteName="MoviesHomeStackScreen"
          activeColor="#fff"
          barStyle={{ backgroundColor: '#293241' }}
      >
          <Tab.Screen
              name="MoviesHomeStackScreen"
              component={MoviesHomeStackScreen}
              options={{
                  tabBarLabel: 'Home',
                  tabBarColor: '#293241',
                  tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="home" color={color} size={26} />
                  ),
              }}
          />
          <Tab.Screen
              name="MoviesLikedStackScreen"
              component={MoviesLikedStackScreen}
              options={{
                  tabBarLabel: 'Favourites',
                  tabBarColor: '#293241',
                  tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="star-outline" color={color} size={26} />
                  ),
              }}
          />
      </Tab.Navigator>
  )
}

const MoviesHomeStack = createStackNavigator();
const MoviesLikedStack = createStackNavigator();

// Movie Home Screen Stack
const MoviesHomeStackScreen = ({ navigation }) => (
  <MoviesHomeStack.Navigator screenOptions={{
      headerStyle: {
          backgroundColor: '#293241'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold'
      }
  }}>
      <MoviesHomeStack.Screen name="Home" component={moviesHomePage} options={{
          title: 'Home',
      }} />
      <MoviesHomeStack.Screen name="Details" component={movieDetails} options={{
          title: 'Details',
      }} />
  </MoviesHomeStack.Navigator>
)

// Movies Liked Stack
const MoviesLikedStackScreen = ({ navigation }) => (
  <MoviesLikedStack.Navigator screenOptions={{
      headerStyle: {
          backgroundColor: '#293241'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold'
      }
  }}>
      <MoviesLikedStack.Screen name="Favourites" component={moviesLiked} options={{
          title: 'Favourites',
      }} />
  </MoviesLikedStack.Navigator>
)

export default BottomTabs;