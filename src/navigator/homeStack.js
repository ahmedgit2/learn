import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen, HomeScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="home"
        component={HomeScreen}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="details"
        component={DetailsScreen}
      />
      {/* <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="sendOffer"
        component={Screen2}
      /> */}
    </Stack.Navigator>
  );
};
