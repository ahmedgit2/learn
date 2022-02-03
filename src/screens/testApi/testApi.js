import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {getProviderIssue} from '../../api/gitProviderIssue';

export const TestApi = () => {
  const [errors, setErrors] = useState();
  try {
    const data = getProviderIssue();
  } catch (error) {
    setErrors(error);
  }
  console.log('ssssssssss', errors?.message);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HIIII</Text>
    </View>
  );
};
