import React from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import {AppNewText} from '..';
import {styles} from './style';

export const ClickableText = props => {
  const {isPress, children, onPress} = props;

  return (
    <View style={[styles.containerStyle, isPress && styles.pressed]}>
      <Pressable onPress={onPress}>
        <AppNewText style={[styles.textStyle, isPress && styles.pressedText]}>
          {children}
        </AppNewText>
      </Pressable>
    </View>
  );
};
