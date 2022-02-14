import React from 'react';
import {Text, TextInput, View, Image} from 'react-native';

import {InputTextStyle} from './style';

export function Input(props) {
  const {
    style,
    onChangeText,
    placeholder,
    errors,
    multiline,
    numberOfLines,
    ...rest
  } = props;

  return (
    <View style={InputTextStyle.container}>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={[
          InputTextStyle.inputtext,
          {...style},
          errors ? {borderColor: 'red'} : {marginBottom: 10},
        ]}
        {...rest}
      />

      {errors ? (
        <Text style={InputTextStyle.errorMessage}>{errors}</Text>
      ) : null}
    </View>
  );
}
