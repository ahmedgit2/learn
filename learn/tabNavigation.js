import * as React from 'react';
import {Text, View, Button, Alert, Pressable} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation, StackActions} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
        }}>
        {' '}
        Home!
      </Text>
      <Button
        title="go to Tabs"
        onPress={() => {
          //   navigation.navigate('TabStack');
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: 'HomeScreen',
                },
              ],
              routes: [
                {
                  name: 'TabStack',
                },
              ],
            }),
          );
        }}
      />
    </View>
  );
};

const Tab1 = () => {
  const navigation = useNavigation();
  //   useEffect(() => {
  //     navigation.addListener('beforeRemove', event => {
  //       event.preventDefault();
  //       alert('cant go back');
  //     });
  //   }, [navigation]);

  //   console.log('navigation.getState()---->', navigation.getState());
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
        }}>
        Tab1 1
      </Text>
      <Button
        title="go to screen 1"
        onPress={() => navigation.navigate('Screen1')}
      />
      <Button
        title="go to home"
        onPress={() =>
          navigation.canGoBack() ? navigation.goBack() : alert('cant go back')
        }
      />
    </View>
  );
};
const Tab2 = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
        }}>
        {' '}
        Tab1 2
      </Text>
    </View>
  );
};
const Screen1 = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
        }}>
        Screen 1
      </Text>
      <Button
        title="go to screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />
      <Button title="back to taps" onPress={() => navigation.goBack()} />
    </View>
  );
};
const Screen2 = ({route, navigation}) => {
  //   const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
        }}>
        Screen 2
      </Text>
      <Button title="back to screen1" onPress={() => navigation.pop(2)} />
    </View>
  );
};

const Tab = createBottomTabNavigator();

const TabStack = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({size, focused}) => {
          let iconName;
          if (route.name === 'Tab1') {
            iconName = focused ? 'heart' : 'hearto';
          } else if (route.name === 'Tab2') {
            iconName = focused ? 'smile-circle' : 'smileo';
          }
          return (
            <AntDesign
              name={iconName}
              size={size}
              color={focused ? 'blue' : 'gray'}
            />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'black',
      })}>
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          headerRight: () => (
            <Pressable
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <AntDesign
                name={'bars'}
                size={30}
                color={'black'}
                style={{
                  marginRight: 20,
                }}
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen name="Tab2" component={Tab2} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="TabStack"
        component={TabStack}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Screen1"
        component={Screen1}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Screen2"
        component={Screen2}
      />
    </Stack.Navigator>
  );
};

export function TabNav() {
  return <HomeStack />;
}
