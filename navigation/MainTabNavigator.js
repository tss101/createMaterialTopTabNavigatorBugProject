import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';



const tabNav =  createMaterialTopTabNavigator({
  LinksScreen,
  SettingsScreen,
},{
    //...other configs
    tabBarOptions:{
        // tint color is passed to text and icons (if enabled) on the tab bar
        activeTintColor: 'rgba(213,80,39,1)',
        inactiveTintColor: 'rgba(213,80,39,0.7)',
        // background color is for the tab component
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
        style: {
            backgroundColor: 'white'
        },
        indicatorStyle: {
            backgroundColor: 'rgba(213,80,39,1)'
        },
        showIcon: true,
        showLabel: false,
        tabStyle: {
            //padding: 0, margin:0,   //Padding 0 here
        },
        iconStyle: {
            width: 36,
            height: 36,
            //padding:0       //Padding 0 here
        },

    },
    //navigationOptions: {header: {visible: false}}, 
    navigationOptions: {header: null}, 
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    animationEnabled: true
}
);



const HomeStack = createStackNavigator({
    Home: tabNav,
    Home2: HomeScreen
});

HomeStack.navigationOptions = {
  header: null,  
};


export default HomeStack
