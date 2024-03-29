import {View, Text, FlatList, Pressable} from 'react-native';
import React from 'react';
import {AppButton, AppGrid, AppLoading, AppRate, AppText} from '../../commons';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export const Header = ({id}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerStyle}>
      <Pressable
        style={styles.backButtonStyle}
        onPress={() => navigation.goBack()}>
        <Ionicons name={'chevron-forward'} color={'#7267CB'} size={35} />
      </Pressable>
      <AppText text={`تفاصيل الطلب`} textSize={22} fontWeight={'bold'} />
    </View>
  );
};
