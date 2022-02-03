import React from 'react';
import {View, Text, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {RectButton} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TopTabNav} from './topTabNav';
import {HomeStack} from './tabNavigation';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomSideMenu {...props} />}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="TopTabNav" component={TopTabNav} />
    </Drawer.Navigator>
  );
};

const CustomSideMenu = ({navigation, ...props}) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignSelf: 'center',
          height: 200,
          marginVertical: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            flex: 1,
            height: 200,
            width: 200,
            borderRadius: 100,
          }}
          source={{
            uri: 'https://www.wepal.net/ar/uploads/2732018-073911PM-1.jpg',
          }}
        />
      </View>
      <RectButton
        onPress={() => navigation.navigate('TopTabNav')}
        style={{marginStart: 10, flexDirection: 'row', alignItems: 'center'}}>
        <AntDesign name="upcircleo" size={30} />
        <Text style={{marginStart: 10, fontSize: 17}}>Open Top Menu</Text>
      </RectButton>
    </DrawerContentScrollView>
  );
};
