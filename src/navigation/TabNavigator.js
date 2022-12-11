import React from 'react';
import FilmsScreen from '../screens/Films';
import GFilmsScreen from '../screens/GFilms';
import PGFilmsScreen from '../screens/PGFilms';
import PG13FilmsScreen from '../screens/PG13Films';
import RFilmsScreen from '../screens/RFilms';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = props => {

  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'blue',
            tabBarLabelStyle: {
                flex: 1,
                fontSize: 15,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
            },
            tabBarStyle: {display: 'flex'},
            tabBarIconStyle: {display: 'none'},
        }}
    >
        <Tab.Screen name={'All'} component={FilmsScreen}/>
        <Tab.Screen name={'G'} component={GFilmsScreen}/>
        <Tab.Screen name={'PG'} component={PGFilmsScreen}/>
        <Tab.Screen name={'PG-13'} component={PG13FilmsScreen}/>
        <Tab.Screen name={'R'} component={RFilmsScreen}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;