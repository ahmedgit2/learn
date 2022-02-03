import React, {useEffect} from 'react';
import {Text, View, Button, Alert} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation, StackActions} from '@react-navigation/native';

const Tab1 = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Top Tab 1</Text>
    </View>
  );
};
const Tab2 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Top Tab 2</Text>
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

export const TopTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
    </Tab.Navigator>
  );
};
