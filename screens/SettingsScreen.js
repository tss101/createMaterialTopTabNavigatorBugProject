import React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import { ExpoConfigView } from '@expo/samples';
import { ScrollView, StyleSheet, Platform } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,  
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
      />
    ),
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
